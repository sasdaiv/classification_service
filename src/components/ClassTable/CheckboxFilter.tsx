import { FC } from 'react';
import FilterCheckboxes from '@/components/common/FilterCheckboxes';
import Popup from '@/components/common/Popup';
import { useTranslation } from 'react-i18next';

type TCheckboxFilter = {
	filteredOptions: string[];
	staticOptions: string[];
	label: string;
	onChange: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
};

const CheckboxFilter: FC<TCheckboxFilter> = ({
	filteredOptions,
	label,
	onChange,
	staticOptions,
}) => {
	const { t } = useTranslation();
	return (
		<Popup
			trigger={
				<button className='w-fit border !border-zinc-300 px-3 py-1 rounded-md bg-zinc-100 text-[10px] sm:text-sm hover:bg-white trans flex items-center gap-1'>
					<span className='font-semibold'>{`${t('level') + ' ' + label.slice(5)}`}</span>
					<img src='/icons/filter.svg' alt='Filter' className='h-4 w-4' />
				</button>
			}
			content={
				<div className='bg-white border rounded-2xl'>
					<FilterCheckboxes
						toggleShowHideFilters={(arr: string[]) =>
							onChange((prev: Record<string, string[]>) => ({ ...prev, [label]: arr }))
						}
						filteredOptions={filteredOptions}
						staticOptions={staticOptions}
						label={label}
						setFilteredOptions={(value: string) => {
							onChange((prev: Record<string, string[]>) => ({
								...prev,
								[label]: prev[label]?.includes(value)
									? prev[label].filter((itm: string) => itm !== value)
									: [...prev[label], value],
							}));
						}}
					/>
				</div>
			}
		/>
	);
};

export default CheckboxFilter;
