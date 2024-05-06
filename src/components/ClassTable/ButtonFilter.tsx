import classNames from 'classnames';
import { Dispatch, FC } from 'react';
import { useTranslation } from 'react-i18next';

type TButtonFilter = {
	label: string;
	active: boolean;
	changeFunction: Dispatch<React.SetStateAction<Record<string, boolean> | null>>;
};
const ButtonFilter: FC<TButtonFilter> = ({ label, changeFunction, active }) => {
	const { t } = useTranslation();
	return (
		<button
			onClick={() => {
				console.log(label);
				changeFunction((prev) => ({ ...prev, [label]: !prev![label] }));
			}}
			className={classNames(
				'w-fit border !border-zinc-300 px-3 py-1 rounded-md text-[10px] sm:text-sm hover:bg-white trans flex items-center gap-1',
				{
					'bg-orange-300 text-white': active,
				},
			)}>
			<span className='font-semibold'>{`${t('level') + ' ' + label.slice(5)}`}</span>
		</button>
	);
};

export default ButtonFilter;
