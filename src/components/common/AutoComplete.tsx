import { TRowObj } from '@/components/SearchResultsPage/SearchTable';
import classNames from 'classnames';
import { FC } from 'react';

type AutocompleteProps = {
	options: TRowObj[];
	onSelect: (selectedOption: TRowObj) => void;
	noResultsMessage?: string;
	open: boolean;
};

const Autocomplete: FC<AutocompleteProps> = ({
	options,
	open,
	onSelect,
	noResultsMessage = 'No results with this query...',
}) => {
	return (
		<>
			{open && options.length > 0 && (
				<div className='absolute flex flex-col left-0 right-0 mx-auto z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-[300px] overflow-y-auto'>
					{options.map((option, index) => (
						<button
							key={index}
							onClick={() => onSelect(option)}
							className={classNames('cursor-pointer p-2 text-sm hover:bg-gray-100 text-left', {
								'border-b': index !== options.length - 1,
							})}>
							{option.title}
						</button>
					))}
				</div>
			)}
			{open && options.length === 0 && (
				<div className='absolute w-[90%] left-0 right-0 mx-auto z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-[300px] overflow-y-auto'>
					<div className='p-2 text-sm'>{noResultsMessage}</div>
				</div>
			)}
		</>
	);
};

export default Autocomplete;
