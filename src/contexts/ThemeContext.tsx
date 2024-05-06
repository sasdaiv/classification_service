import { TLanguage, possibleLanguages } from '@/constants/contants';
import dayjs from 'dayjs';
import {
	Dispatch,
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

export interface IThemeContext {
	language: TLanguage;
	setLanguage: Dispatch<React.SetStateAction<TLanguage>>;
}

interface IThemeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<TLanguage>(() => {
		const langFromStorage = localStorage.getItem('language') as TLanguage;
		return possibleLanguages[langFromStorage] ? langFromStorage : 'lv';
	});
	useEffect(() => {
		localStorage.setItem('language', language);

		i18n
			.changeLanguage(language)
			.then(() => {
				document.documentElement.setAttribute('dir', i18n.dir());
				document.documentElement.setAttribute('lang', i18n.language);
			})
			.catch(() => {});

		dayjs.locale(language);
	}, [language]);

	const value: IThemeContext = useMemo(
		() => ({
			language,
			setLanguage,
		}),
		[language, setLanguage],
	);
	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
