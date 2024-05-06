import { TRowObj } from '@/components/SearchResultsPage/SearchTable';
import Autocomplete from '@/components/common/AutoComplete';
import { useAllTables } from '@/contexts/AllTablesContext';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Search = ({
	searchAction,
	showAC = false,
}: {
	searchAction?: () => void;
	showAC?: boolean;
}) => {
	const { tables } = useAllTables();
	const popupRef = useRef<HTMLDivElement | null>(null);
	const { query, setQuery } = useAllTables();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [filteredOptions, setFilteredOptions] = useState<TRowObj[]>([]);
	const [options] = useState<TRowObj[]>(() => {
		if (tables) {
			const resArr: TRowObj[] = [];

			Object.values(tables).forEach((value) => {
				const valueSearchTableRows = value.rows.map((item) => ({
					title: item.title,
					code: item.code,
					table: value.payload.tab,
				}));
				resArr.push(...valueSearchTableRows);
			});

			return resArr;
		}

		return [];
	});

	useEffect(() => {
		if (query) {
			setFilteredOptions(options.filter((option) => option.title.toLowerCase().includes(query)));
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [query]);

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && searchAction) {
			searchAction();
		}
	};

	useOnClickOutside(popupRef, () => setIsOpen(false));

	useEffect(() => {
		setIsOpen(false);
	}, []);

	return (
		<div className='max-w-[600px] w-full flex flex-col gap-2'>
			<div className='flex flex-col gap-2 ml-4'>
				<div className='text-lg sm:text-2xl font-bold text-orange-500'>{t('title')}</div>
				<div className='text-[10px] sm:text-sm font-medium'>
					{t('Unified construction classification')}
				</div>
			</div>
			<div className='px-4 sm:px-0'>
				<div className='flex w-full items-center shrink-0 rounded-full p-1 border-zinc-300 border border-transparent trans'>
					<input
						className='ml-3 focus:outline-none placeholder:font-medium placeholder:text-black/50 bg-transparent w-full p-1 text-[10px] sm:text-sm'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={handleKeyPress}
						placeholder={t('Search the tables...')}
					/>
					<button type='button' onClick={searchAction}>
						<div className='bg-zinc-400 rounded-full h-6 w-6 sm:h-10 sm:w-10 hvr'>
							<img src='/search_button.svg' alt='search icon' className='w-full' />
						</div>
					</button>
				</div>
				{showAC && (
					<div className='relative w-full mx-auto' ref={popupRef}>
						<Autocomplete
							open={isOpen}
							options={filteredOptions}
							onSelect={(option: TRowObj) => {
								setQuery(option.title);
								navigate('/results');
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
