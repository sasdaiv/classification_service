import About from '@/pages/About';
import ClassTable from '@/pages/ClassTable';
import Main from '@/pages/Main';
import SearchResults from '@/pages/SearchResults';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
		},
		{
			path: 'about',
			element: <About />,
		},
		{
			path: 'results',
			element: <SearchResults />,
		},
		{
			path: 'sections',
			element: <ClassTable />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
