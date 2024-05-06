import { teamMembers } from '@/constants/contants';
import { useTranslation } from 'react-i18next';

const Team = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full flex flex-col gap-4 py-4 sm:p-8 border-t-2 border-orange-500'>
			<div className='font-bold text-xs sm:text-base'>{t('team.title')}</div>
			<div className='flex gap-4 sm:gap-10 flex-col sm:flex-row'>
				<div className='text-[10px] sm:text-sm text-justify'>{t('team.subtitle1')}</div>
				<div className='text-[10px] sm:text-sm text-justify'>{t('team.subtitle2')}</div>
			</div>
			<div className='flex gap-4 sm:gap-8 sm:px-4 justify-evenly flex-wrap'>
				{teamMembers.map((item) => (
					<div key={item.fullName} className='flex flex-col gap-1 sm:gap-4 items-center'>
						<div className='w-[120px] sm:w-[200px]  h-[120px] sm:h-[200px] relative'>
							<div className='absolute inset-0 bg-orange-400 z-1 transform rotate-3 origin-bottom-left opacity-75 rounded-2xl'></div>
							<img
								src={item.photo}
								alt='User photo'
								className='relative w-full h-full object-fit object-cover rounded-2xl z-[2]'
							/>
						</div>
						<div className='text-[10px] sm:text-sm font-bold'>{item.fullName}</div>
						<div className='text-[0.5rem] sm:text-xs font-semibold'>{item.position}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
