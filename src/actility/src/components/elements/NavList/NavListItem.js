import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';

import css from './NavList.module.scss';
import { Icon } from '../Icon';

const NavListItem = (
	{
		icon,
		children,
		className,
		isArrow,
		as,
		asProps,
		onClick,
		isActive,
	},
) => (
	createElement(
		as,
		{
			onClick,
			...asProps,
			className: classNames(
				css.item, className,
				isActive && css.itemActive,
			),
		},
		<div className={css.itemMain}>
			{icon && (
				<div className={css.itemIcon}>
					{icon}
				</div>
			)}
			<div className={css.itemText}>
				{children}
				{isArrow && <Icon src={ChevronArrowRightIcon} className={css.itemArrow} />}
			</div>
		</div>,
	)
);

NavListItem.defaultProps = {
	children: null,
	className: null,
	icon: null,
	isArrow: false,
	as: 'div',
	asProps: {},
	onClick: null,
	isActive: false,
};
NavListItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	icon: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	isArrow: PropTypes.bool,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
	onClick: PropTypes.func,
	isActive: PropTypes.bool,
};

export { NavListItem };
