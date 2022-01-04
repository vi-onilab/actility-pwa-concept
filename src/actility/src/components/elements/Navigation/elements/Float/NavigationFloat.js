import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ArrowLeftStrong } from 'icons';
import { Icon } from 'elements/Icon';

import { NavigationFloatList } from './NavigationFloatList';
import { NavigationFloatWrapper } from './NavigationFloatWrapper';
import css from './NavigationFloat.module.scss';

const NavigationFloat = (
	{
		className,
		data,
	},
) => {
	const containerRef = useRef();

	const [isOpen, setIsOpen] = useState(true);
	const [activeKey, setActiveKey] = useState(null);

	useEffect(() => {
		const visibleIntersection = (
			(
				data?.map(({ key, ref }) => ({
					key,
					current: ref?.current,
					isIntersecting: false,
				})) || []
			).filter(({ current }) => !!current)
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(() => {
					const containerHeight = containerRef?.current?.offsetHeight || 0;
					const windowScrollPosition = (window.pageYOffset + containerHeight);

					visibleIntersection.forEach((item) => {
						if (item.current) {
							const { top, height } = {
								top: item.current.offsetTop,
								height: item.current.offsetHeight,
							};

							item.isIntersecting = (top + height - containerHeight) < windowScrollPosition;
						}
					});

					const nextAfterLastActive = visibleIntersection.find((item) => !item?.isIntersecting);

					setActiveKey((nextAfterLastActive || visibleIntersection?.[visibleIntersection.length - 1])?.key || null);
				});
			},
			{
				rootMargin: `${-(containerRef.current?.offsetTop || 0)}px 0px 0px 0px`,
				threshold: Array.from({ length: 11 }).map((_, index) => (index / 10)),
			},
		);

		data?.forEach?.(({ ref }) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			data?.forEach?.(({ ref }) => {
				if (ref.current) {
					observer?.unobserve(ref.current);
				}
			});
		};
	}, [data, activeKey, setActiveKey]);

	return (
		<NavigationFloatWrapper
			ref={containerRef}
			className={classNames(
				className,
				!isOpen && css.isOpen,
			)}
		>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={css.close}
			>
				<Icon
					src={ArrowLeftStrong}
					className={css.closeIcon}
				/>
				<span className={css.closeTitle}>
					{isOpen ? 'Open' : 'Hide'}
				</span>
			</button>
			<NavigationFloatList
				data={data}
				active={activeKey}
			/>
		</NavigationFloatWrapper>
	);
};

NavigationFloat.propTypes = {
	hiddenByRef: PropTypes.shape({
		current: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	}),
	className: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		ref: PropTypes.oneOfType([PropTypes.object]),
	})),
};

NavigationFloat.defaultProps = {
	hiddenByRef: null,
	className: null,
	data: [],
};

export { NavigationFloat };
