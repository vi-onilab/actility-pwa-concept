import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Tabs.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	small: css.variantSmall,
	touch: css.variantTouch,
	form: css.variantForm,
};

const Tabs = (
	{
		children,
		className,
		title,
		variant,
	},
) => (
	<div
		className={classNames(
			css.tabs,
			variant && VARIANTS?.[variant],
			className,
		)}
	>
		{title && (
			<p className={css.title}>{title}</p>
		)}
		{children}
	</div>
);

Tabs.defaultProps = {
	className: '',
	children: null,
	title: '',
	variant: 'default',
};

Tabs.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'small', 'touch', 'form']),
};

export { Tabs };
