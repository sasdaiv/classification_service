import { finishedOptions, possibleLanguages } from '@/constants/contants';
import { useTheme } from '@/contexts/ThemeContext';
import React, {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export interface IFilePayload {
	filters: IFileFilters;
	maxLevel: number;
	tab: string;
}

export interface IFileFilters {
	[key: string]: string[];
}

export interface IFileRow {
	code: string;
	title: string;
	show: boolean;
	level: number;
	level1: string;
	level2: string;
	level3: string;
	level4?: string;
}

export interface IAllTablesContext {
	tables: TData | null;
	isLoading: boolean;
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFileResponse {
	payload: IFilePayload;
	rows: IFileRow[];
}

export type TSingleTable = IFileResponse & { title: string };

export type TData = Record<string, TSingleTable>;

interface IAuthProviderProps {
	children: ReactNode;
}

const AllTablesContext = createContext<IAllTablesContext>({} as IAllTablesContext);

export const AllTablesProvider: FC<IAuthProviderProps> = ({ children }) => {
	const { language } = useTheme();
	const [tables, setTables] = useState<TData | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [query, setQuery] = useState<string>(
		new URLSearchParams(document.location.search).get('query') || '',
	);

	useEffect(() => {
		setIsLoading(true);
		if (possibleLanguages[language]) {
			const fetchAllFiles = async () => {
				try {
					const res = {} as TData;
					const filesPromises = Object.entries(finishedOptions).map(async ([shortName, title]) => {
						const detailedInfo = await fetch(
							`/TABLES/classification-${shortName}-${language}.json`,
						);
						const detailedInfoJson = await detailedInfo.json();
						res[shortName] = { title: title, ...detailedInfoJson };
					});

					await Promise.all(filesPromises);
					setTables(res as TData);
				} catch (error) {
					console.error('SOMETHING WENT WRONG, PLEASE CHECK FILES, THEIR NAMES AND LOCATIONS...');
				} finally {
					setIsLoading(false);
				}
			};
			fetchAllFiles();
		}
	}, [language]);

	const value: IAllTablesContext = useMemo(
		() => ({
			tables: tables || null,
			isLoading,
			query,
			setQuery,
			setIsLoading,
		}),
		[tables, isLoading, query, setQuery, setIsLoading],
	);
	return <AllTablesContext.Provider value={value}>{children}</AllTablesContext.Provider>;
};

export const useAllTables = () => {
	return useContext(AllTablesContext);
};
