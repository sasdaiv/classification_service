import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className='bg-orange-400 py-3 px-3 sm:px-6 flex items-center justify-between border-t border-zinc-300'>
			<a
				className='text-xs font-medium mr-4 text-white hvr flex items-center gap-1'
				href='https://baukor.com/'
				target='_blank'
				rel='noopener noreferrer'>
				<span className='hidden sm:block'>{t('footerLeft')}</span>
				<img src='/baukor_logo.png' alt='Baukor Logo' className='inline-block h-8 mb-1' />
				<span className='hidden sm:block'>{t('footerRight')}.</span>
			</a>
			<div className='flex items-center text-[8px] sm:text-xs font-medium text-white'>
				&copy; {t('reservedRights')}
			</div>
		</footer>
	);
};

export default Footer;
