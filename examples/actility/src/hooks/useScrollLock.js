import { useEffect } from 'react';
import { disablePageScroll, enablePageScroll, addScrollableSelector } from 'scroll-lock';

addScrollableSelector('[data-rsbs-scroll]');

const useScrollLock = (isOpen) => {
	useEffect(() => {
		if (isOpen) {
			disablePageScroll();

			return () => {
				enablePageScroll();
			};
		}

		return () => {};
	}, [isOpen]);

	return {
		scrollableProps: { 'data-scroll-lock-scrollable': true },
	};
};

export { useScrollLock };
