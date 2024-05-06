import { RefObject, useEffect } from 'react';

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	actionOnClickOutside: () => void,
): void {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				actionOnClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
}

export default useOnClickOutside;
