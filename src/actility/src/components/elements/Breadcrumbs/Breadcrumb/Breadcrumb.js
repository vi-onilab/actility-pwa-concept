import PropTypes from 'prop-types';
import { Link } from 'elements/Link';
import { classNames } from 'helpers';

import css from './Breadcrumb.module.scss';

const Breadcrumb = (
	{
		to,
		children,
		className,
	},
) => (
	to ? (
		<Link
			to={to}
			className={classNames(css.breadcrumb, className)}
		>
			<span className={css.text}>
				{children}
			</span>
		</Link>
	) : (
		<span
			className={classNames(css.breadcrumb, css.isActive, className)}
		>
			<span className={css.text}>
				{children}
			</span>
		</span>
	)
);

Breadcrumb.defaultProps = {
	to: null,
	className: null,
	children: null,
};

Breadcrumb.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { Breadcrumb };
