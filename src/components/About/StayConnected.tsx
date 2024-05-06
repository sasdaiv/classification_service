import { connectInfromation } from '@/constants/contants';
import { useTranslation } from 'react-i18next';

const StayConnected = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full flex flex-col gap-2 sm:gap-6 py-4 sm:p-8 border-t-2 border-orange-500'>
			<div className='text-xs sm:text-base font-bold'>{t('stayConnected.title')}</div>
			<div className='text-[10px] sm:text-sm text-justify'>{t('stayConnected.subtitle')}</div>
			<div className='flex flex-col gap-8 mt-4 sm:mt-0'>
				{connectInfromation.map((item) => (
					<a
						key={item.label}
						{...item.linkProps}
						className=' flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm sm:hvr sm:w-fit font-semibold text-center w-full'>
						<img
							src={`/icons/${item.icon}.svg`}
							alt={item.icon}
							className='h-4 sm:h-6 w-4 sm:w-6'
						/>
						{item.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default StayConnected;
