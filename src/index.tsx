import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';
import { AllTablesProvider } from '@/contexts/AllTablesContext.tsx';
import '@/i18n.ts';
import { ThemeProvider } from '@/contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<AllTablesProvider>
			<App />
		</AllTablesProvider>
	</ThemeProvider>,
);
