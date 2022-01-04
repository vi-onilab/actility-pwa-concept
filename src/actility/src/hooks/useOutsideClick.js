import { useEffect } from 'react';

const useOutsideClick = (effect, refs = []) => {
	useEffect(() => {
		const outsideClickHandler = (ev) => {
			setTimeout(() => {
				if (refs.filter(({ current }) => current?.contains?.(ev?.target)).length === 0) {
					effect();
				}
			});
		};

		document.addEventListener('click', outsideClickHandler);

		return () => {
			document.removeEventListener('click', outsideClickHandler);
		};
	}, [effect, refs]);
};

export { useOutsideClick };
