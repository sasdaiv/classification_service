import { useEffect } from 'react';

const useDocumentTitle = ({
	title = 'LVS1048',

	name = 'Welcome',
}: {
	title?: string;
	name?: string;
}) => {
	const documentTitle = `${title} | ${name}`;

	useEffect(() => {
		document.title = documentTitle;
	}, [documentTitle, title, name]);
};

export default useDocumentTitle;
