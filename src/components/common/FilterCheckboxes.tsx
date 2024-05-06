import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type TFIlterCheckboxes = {
	filteredOptions: string[];
	setFilteredOptions: (option: string) => void;
	staticOptions: string[];
	useOptionsLabels?: boolean;
	toggleShowHideFilters: (arr: string[]) => void;
	label?: string;
};

const FilterCheckboxes: FC<TFIlterCheckboxes> = ({
	filteredOptions,
	setFilteredOptions,
	staticOptions,
	useOptionsLabels,
	label,
	toggleShowHideFilters,
}) => {
	const { t } = useTranslation();
	return (
		<div className='w-fit h-fit rounded-2xl px-4 pb-4 pt-2 flex flex-col whitespace-nowrap gap-4'>
			<div className='hidden lg:block'>
				<div className='flex items-center justify-between gap-2'>
					<div className='text-sm font-semibold'>{label || t('Tabs')}:</div>
					<button
						className='text-xs hvr bg-orange-500 border p-1 text-white rounded'
						onClick={() => toggleShowHideFilters(!filteredOptions.length ? staticOptions : [])}>
						{t(filteredOptions.length ? 'Hide All' : 'Show All')}
					</button>
				</div>
			</div>
			<div className='flex lg:flex-col gap-2 flex-wrap text-justify'>
				{staticOptions.map((option) => (
					<div
						key={option}
						className='flex items-center bg-orange-300 lg:bg-transparent p-1 rounded-md'>
						<input
							checked={filteredOptions.includes(option)}
							id={`teal-checkbox-${option}`}
							type='checkbox'
							value={option}
							onChange={() => setFilteredOptions(option)}
							className='w-2 lg:w-3 h-2 lg:h-3 grow-0 accent-white'
						/>
						<label
							htmlFor={`teal-checkbox-${option}`}
							className='ms-2 text-[8px] lg:text-sm font-medium cursor-pointer'>
							{useOptionsLabels ? t(`tableTitle.${option}`) : option}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterCheckboxes;
