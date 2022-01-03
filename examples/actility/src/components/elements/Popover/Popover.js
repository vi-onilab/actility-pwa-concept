import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useOutsideClick } from 'hooks';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'assets/icons';
import { Icon } from 'elements/Icon';

import css from './Popover.module.scss';

const VARIANTS = {
	default: css.variantDefault,
};

const Popover = (
	{
		children,
		className,
		title,
		variant,
		icon,
	},
) => {
	const [isClicked, setClicked] = useState(false);

	const wrapperRef = useRef(null);

	useOutsideClick(() => isClicked && setClicked(false), [wrapperRef]);

	return (
		<div
			ref={wrapperRef}
			className={classNames(css.wrapper, className, isClicked && css.isClicked, VARIANTS?.[variant])}
		>
			<button type="button" className={css.header} onClick={() => setClicked(!isClicked)}>
				{icon && <Icon src={icon} className={css.headerIcon} />}
				<p className={css.headerTitle}>{title}</p>
				<Icon src={ChevronArrowRightIcon} className={css.headerIconArrow} />
			</button>
			<div className={css.dropdown}>
				{children}
			</div>
		</div>
	);
};

Popover.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	title: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	variant: PropTypes.oneOf(['default']),
	icon: PropTypes.oneOfType([PropTypes.func]),
};

Popover.defaultProps = {
	children: null,
	className: null,
	title: null,
	variant: 'default',
	icon: null,
};

export { Popover };
