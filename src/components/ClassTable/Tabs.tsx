import { finishedOptions, options } from '@/constants/contants';
import classNames from 'classnames';
import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';

interface TabComponentProps {
	activeTab: string;
	onChange: Dispatch<string>;
}

const Tabs: React.FC<TabComponentProps> = ({ activeTab, onChange }) => {
	const optionsStr = Object.keys(options).map((item) => item.toUpperCase());
	const navigate = useNavigate();

	const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		onChange(e.currentTarget.name);
		navigate(`/sections?tab=${e.currentTarget.name.toLowerCase()}`, { replace: true });
	};

	return (
		<div className='fixed left-0 top-1/2 transform -translate-y-1/2'>
			<div className='flex flex-col border rounded-r-md sm:rounded-r-lg overflow-hidden'>
				{optionsStr.map((option) => (
					<button
						disabled={!finishedOptions[option.toLowerCase()]}
						key={option}
						name={option}
						onClick={handleChange}
						className={classNames(
							'w-4 sm:w-8 text-[10px] sm:text-base py-2 sm:p-0 font-bold bg-white',
							{
								'!bg-orange-500 text-white': activeTab === option,
								'text-zinc-300': !finishedOptions[option.toLowerCase()],
							},
						)}>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default Tabs;
