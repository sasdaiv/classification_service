import DownloadTables from '@/components/MainPage/DownloadTables';
import { MainTabsContainer } from '@/components/MainPage/MainTabsContainer';
import QuestionsAnswers from '@/components/MainPage/QuestionsAnswers';
import { Search } from '@/components/common/Search';
import MainLayout from '@/layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();
	return (
		<MainLayout
			name='Welcome'
			className='flex items-center px-4 py-8 sm:p-10 flex-col gap-10 sm:gap-20'>
			<Search searchAction={() => navigate('/results')} showAC />
			<MainTabsContainer />
			<DownloadTables />
			<QuestionsAnswers />
		</MainLayout>
	);
};

export default Main;
