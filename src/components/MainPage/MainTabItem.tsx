import { FC } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { finishedOptions } from '@/constants/contants';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface IMainTabItem {
	tabKey: string;
}

const MainTabItem: FC<IMainTabItem> = ({ tabKey }) => {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col gap-1'>
			<Link
				to={`/sections?tab=${tabKey}`}
				className={classNames(
					'border hover:border-orange-500/50 hover:text-orange-500 trans rounded-xl w-full flex items-center gap-2 sm:gap-4 h-12 sm:h-16 px-1 sm:px-3 text-zinc-500',
					{
						'!text-zinc-300 border-zinc-300 hover:text-zinc-300 hover:border-zinc-300 pointer-events-none':
							!finishedOptions[tabKey],
					},
				)}>
				<div className='font-bold text-lg sm:text-xl'>{tabKey.toUpperCase()}</div>
				<div className='font-semibold text-xs sm:text-base text-center'>
					{t(`tableTitle.${tabKey}`)}
				</div>
			</Link>
			{finishedOptions[tabKey] ? (
				<div className='font-medium text-[0.4rem] sm:text-[0.5rem] text-orange-500 text-center sm:text-right'>{`v1.0, ${t('published')} ${dayjs().format('MMMM YYYY')}`}</div>
			) : (
				<div className='font-medium text-[0.4rem] sm:text-[0.5rem] text-zinc-500 text-center sm:text-right'>
					{t('Under development')}
				</div>
			)}
		</div>
	);
};

export default MainTabItem;
