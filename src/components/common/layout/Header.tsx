import LanguageSelector from '@/components/common/layout/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<header className='sticky top-0 z-10 bg-zinc-100 py-3 px-3 sm:px-6 flex items-center justify-between border-b'>
			<div className='flex items-center gap-2 sm:gap-4'>
				<NavLink to='/' className='text-2xl font-bold mr-4 hvr' onClick={() => navigate('/')}>
					{t('title')}
				</NavLink>
				<div className='flex gap-2 sm:gap-4 font-medium text-[10px] sm:text-sm'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`h-full hover:text-orange-400 border-b-2 border-transparent trans ${isActive ? 'border-b-2 border-b-orange-400 text-orange-500' : ''}`
						}>
						{t('Classification')}
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) =>
							`h-full hover:text-orange-400 border-b-2 border-transparent trans ${isActive ? 'border-b-2 border-b-orange-400 text-orange-500' : ''}`
						}>
						{t('About')}
					</NavLink>
				</div>
			</div>
			<LanguageSelector />
		</header>
	);
};

export default Header;
