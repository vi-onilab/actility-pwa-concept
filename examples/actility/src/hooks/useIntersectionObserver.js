import { useEffect } from 'react';

export const useIntersectionObserver = (callback, deps = [], options = {}) => {
	useEffect(() => {
		if (deps?.length > 0) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((item) => {
						if (item?.target && item?.rootBounds) {
							callback(item);
						}
					});
				},
				options,
			);

			deps.forEach((dep) => {
				if (dep?.current) {
					observer.observe(dep.current);
				}
			});

			return () => {
				deps.forEach((dep) => {
					if (dep?.current) {
						observer.unobserve(dep.current);
					}
				});
			};
		}

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [callback, ...deps, options]);
};
