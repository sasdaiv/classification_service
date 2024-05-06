import MainTabItem from '@/components/MainPage/MainTabItem';
import { options } from '@/constants/contants';
import { useTranslation } from 'react-i18next';

export const MainTabsContainer = () => {
	const { t } = useTranslation('translation');
	return (
		<div className='flex flex-col gap-6 w-full'>
			<div className='text-[10px] sm:text-sm font-semibold'>{t('Browse the tables')}</div>
			<div className='grid grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-y-3 sm:gap-x-10 w-full flex-wrap'>
				{Object.entries(options).map(([key]) => (
					<MainTabItem key={key} tabKey={key} />
				))}
			</div>
		</div>
	);
};
