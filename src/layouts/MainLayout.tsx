import { useAllTables } from '@/contexts/AllTablesContext';
import { FC, ReactNode, useEffect, useState } from 'react';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import Loader from '@/components/common/Loader';

type TMainLayout = {
	children: ReactNode;
	className: string;
	name?: string;
	title?: string;
};

const MainLayout: FC<TMainLayout> = ({ children, className, name, title }) => {
	const { isLoading, tables } = useAllTables();
	const { t } = useTranslation();
	const { language } = useTheme();
	const [docTitle, setDocTitle] = useState<{ name?: string; title?: string }>({});

	useEffect(() => {
		setDocTitle({
			name: name ? t(name) : undefined,
			title: title ? t(title) : undefined,
		});
	}, [name, title, t, language]);

	useDocumentTitle(docTitle);

	if (isLoading || !tables) {
		return <Loader />;
	}
	return (
		<div className='relative w-screen h-screen flex flex-col overflow-y-auto'>
			<Header />
			<main className={`relative grow mx-auto w-full max-w-[1280px] ${className ?? ''}`}>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
