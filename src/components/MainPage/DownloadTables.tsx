import { useTranslation } from 'react-i18next';

const DownloadTables = () => {
	const { t } = useTranslation();
	return (
		<div className='flex flex-col w-full items-end gap-2'>
			<a
				href='/downloads/LVS1048.xlsx'
				className='flex items-center gap-1 font-medium text-[8px] sm:text-xs hvr'>
				{t('Download the tables')}
				<img src='/icons/chevron_right.svg' alt='Right' className='h-4 w-4' />
			</a>
		</div>
	);
};

export default DownloadTables;
