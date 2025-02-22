import { useEffect, useState } from 'react';

const getMatches = (query: string): boolean => {
	if (typeof window !== 'undefined') {
		return window.matchMedia(query).matches;
	}
	return false;
};

export default function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState<boolean>(getMatches(query));

	useEffect(() => {
		function handleChange() {
			setMatches(getMatches(query));
		}

		const matchMedia = window.matchMedia(query);

		handleChange();

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
	}, [query]);

	return matches;
}
