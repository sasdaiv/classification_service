import Popup from '@/components/common/Popup';
import { TLanguage, possibleLanguages } from '@/constants/contants';
import { useTheme } from '@/contexts/ThemeContext';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { language, setLanguage } = useTheme();
	const { t } = useTranslation();

	const handleLanguageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
		setLanguage(e.currentTarget.name as TLanguage);
	};

	return (
		<Popup
			position='r'
			trigger={
				<button className='w-7 h-7 rounded-full p-1 border border-transparent hvr border-zinc-300 hover:border-orange-400 trans'>
					<img src='/icons/translation.svg' alt='Translation' />
				</button>
			}
			content={
				<div className='bg-white border rounded-2xl p-2 flex flex-col gap-1 w-max'>
					{Object.entries(possibleLanguages).map(([lang, info]) => (
						<button
							key={lang}
							name={lang}
							onClick={handleLanguageChange}
							className={classNames(
								'flex font-semibold items-center gap-1 text-[10px] sm:text-sm',
								{
									'text-orange-600': lang === language,
								},
							)}>
							<img src={`/icons/flags/${info.icon}`} alt='Language' className='w-4 rounded' />
							{t(info.name)}
						</button>
					))}
				</div>
			}
		/>
	);
};

export default LanguageSelector;
