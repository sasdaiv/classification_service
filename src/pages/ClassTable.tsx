import Table from '@/components/ClassTable/Table';
import Tabs from '@/components/ClassTable/Tabs';
import { finishedOptions } from '@/constants/contants';
import MainLayout from '@/layouts/MainLayout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassTable = () => {
	const [activeTab, setActiveTab] = useState(
		new URLSearchParams(document.location.search).get('tab')?.toUpperCase() || 'BE',
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (!finishedOptions[activeTab.toLowerCase()]) {
			navigate('/sections?tab=be', { replace: true });
			setActiveTab('BE');
		}
	}, [activeTab]);

	return (
		<MainLayout name='Classification' className='flex items-center px-6 flex-col'>
			<Table activeTab={activeTab.toLowerCase()} />
			<Tabs activeTab={activeTab} onChange={setActiveTab} />
		</MainLayout>
	);
};

export default ClassTable;
