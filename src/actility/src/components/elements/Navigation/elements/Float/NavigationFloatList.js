import { createRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './NavigationFloat.module.scss';

const NavigationFloatList = (
	{
		data,
		active,
	},
) => {
	const navItemsRefs = useMemo(() => (
		data?.reduce((result, current) => ({ ...result, [current.key]: createRef() }), {})
	), [data]);

	useEffect(() => {
		navItemsRefs?.[active]?.current?.scrollIntoView({
			inline: 'center',
			block: 'center',
		});
	}, [active, navItemsRefs]);

	return (
		<ul
			className={css.list}
		>
			{data?.map(({ label, key, ref }, index) => (
				<button
					type="button"
					ref={navItemsRefs?.[key]}
					key={key || index}
					onClick={() => {
						const item = ref?.current;

						if (item) {
							window.scrollTo({
								behavior: 'smooth',
								top: item.offsetTop,
							});
						}
					}}
					className={classNames(
						css.item,
						active === key && css.isActive,
					)}
				>
					{label}
				</button>
			))}
		</ul>
	);
};

NavigationFloatList.propTypes = {
	active: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		ref: PropTypes.oneOfType([PropTypes.object]),
	})),
};

NavigationFloatList.defaultProps = {
	active: null,
	data: [],
};

export { NavigationFloatList };
