import { useEffect, useRef, useState } from 'react';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';

import css from './ScrollToTop.module.scss';

const ScrollToTop = () => {
	const shadowRef = useRef(null);
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
		);
		if (shadowRef.current) {
			observer.observe(shadowRef.current);
		}
		return () => {
			if (shadowRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(shadowRef.current);
			}
		};
	}, [shadowRef]);

	const onButtonClickHandler = () => (
		shadowRef.current?.scrollIntoView?.({ behavior: 'smooth' })
	);

	return (
		<>
			<div ref={shadowRef} className={css.shadow} />
			<button
				type="submit"
				onClick={onButtonClickHandler}
				className={classNames(css.button, !isIntersecting && css.active)}
			>
				<Icon src={ChevronArrowRightIcon} className={css.buttonIcon} />
			</button>
		</>
	);
};

export { ScrollToTop };
