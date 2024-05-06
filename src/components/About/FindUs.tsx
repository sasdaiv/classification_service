import { useTranslation } from 'react-i18next';

const FindUs = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full flex flex-col py-4 gap-4 sm:p-8 border-t-2 border-orange-500'>
			<div className='font-bold text-xs sm:text-base'>{t('findUs.title')}</div>
			<div className='flex gap-4 sm:gap-10 flex-col sm:flex-row'>
				<div className='sm:text-sm text-[10px] text-justify'>{t('findUs.subtitle1')}</div>
				<div className='sm:text-sm text-[10px] text-justify'>{t('findUs.subtitle2')}</div>
			</div>
			<div className='w-full h-[400px] rounded-2xl overflow-hidden relative'>
				<iframe
					width='100%'
					className='z-1 text-xs sm:text-base'
					height='100%'
					src='https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Riga+(Baukor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
			</div>
		</div>
	);
};

export default FindUs;
