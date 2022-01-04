import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { Link } from 'react-router-dom';
import { TopRightArrowIcon } from 'assets/icons';

import css from './PopoverItem.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	accent: css.variantAccent,
};

const PopoverItem = (
	{
		children,
		className,
		icon,
		variant,
		onClick,
		to,
		isExternal,
	},
) => (
	to ? (
		<div className={css.container}>
			<Link
				to={to}
				onClick={onClick}
				className={classNames(
					css.wrapper,
					className,
					VARIANTS?.[variant],
				)}
				target={isExternal && '_blank'}
			>
				<Icon
					src={icon}
					className={css.icon}
				/>
				<p className={css.title}>{children}</p>
				{
					isExternal && (
						<Icon
							src={TopRightArrowIcon}
							className={css.externalIcon}
						/>
					)
				}
			</Link>
		</div>
	) : (
		<div className={css.container}>
			<button
				type="button"
				onClick={onClick}
				className={classNames(
					css.wrapper,
					className,
					VARIANTS?.[variant],
				)}
			>
				<Icon src={icon} className={css.icon} />
				<p className={css.title}>{children}</p>
			</button>
		</div>
	)
);
PopoverItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.func]),
	variant: PropTypes.oneOf(['default', 'accent']),
	onClick: PropTypes.func,
	to: PropTypes.string,
	isExternal: PropTypes.bool,
};

PopoverItem.defaultProps = {
	children: null,
	className: null,
	icon: null,
	variant: 'default',
	onClick: null,
	to: null,
	isExternal: false,
};

export { PopoverItem };
