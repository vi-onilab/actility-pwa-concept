import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';

import css from './LinkArrow.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	light: css.variantLight,
	small: css.variantSmall,
	smallBold: css.variantSmallBold,
	filterMobile: css.variantFilterMobile,
	coloredSmallHover: css.variantColoredSmallHover,
	graySmallHover: css.variantGraySmallHover,
};

const LinkArrow = (
	{
		isExternal,
		to,
		children,
		className,
		onClick,
		withArrow,
		variant,
	},
) => {
	const classes = classNames(
		css.linkArrow,
		!withArrow && css.disableArrow,
		variant && VARIANTS?.[variant],
		className,
	);

	const content = (
		<span className={css.content}>
			{children}
		</span>
	);

	if (!to?.length) {
		return (
			// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
			<span
				onClick={onClick}
				className={classes}
			>
				{content}
				<Icon src={ChevronArrowRightIcon} className={css.linkArrowIcon} />
			</span>
		);
	}

	return (
		isExternal ? (
			<a
				href={to}
				onClick={onClick}
				className={classes}
			>
				{content}
				<Icon src={ChevronArrowRightIcon} className={css.linkArrowIcon} />
			</a>
		) : (
			<Link
				to={to}
				onClick={onClick}
				className={classes}
			>
				{content}
				<Icon src={ChevronArrowRightIcon} className={css.linkArrowIcon} />
			</Link>
		)
	);
};

LinkArrow.propTypes = {
	isExternal: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	to: PropTypes.string,
	withArrow: PropTypes.bool,
	className: PropTypes.string,
	onClick: PropTypes.func,
	variant: PropTypes.oneOf(['default', 'light', 'small', 'smallBold', 'filterMobile', 'coloredSmallHover', 'graySmallHover']),
};

LinkArrow.defaultProps = {
	isExternal: false,
	children: undefined,
	withArrow: true,
	className: null,
	to: null,
	onClick: null,
	variant: 'default',
};

export { LinkArrow };
