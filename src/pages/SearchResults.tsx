import { Search } from '@/components/common/Search';
import SearchTable from '@/components/SearchResultsPage/SearchTable';
import MainLayout from '@/layouts/MainLayout';

const SearchResults = () => {
	return (
		<>
			<MainLayout
				name='Search'
				className='flex items-center px-4 py-8 sm:p-10 flex-col gap-10 sm:gap-20 w-full'>
				<Search />
				<SearchTable />
			</MainLayout>
		</>
	);
};

export default SearchResults;
