import { useEffect } from 'react';

const useBodyScrollLock = (isLocked: boolean): void => {
	useEffect(() => {
		if (isLocked) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isLocked]);
};

export default useBodyScrollLock;
