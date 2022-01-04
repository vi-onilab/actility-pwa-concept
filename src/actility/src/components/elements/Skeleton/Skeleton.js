import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Skeleton.module.scss';

const Skeleton = (
	{
		className,
		inline,
		children,
		...style
	},
) => (
	<div className={classNames(css.skeleton, className, inline && css.inline)} style={style}>
		{children}
	</div>
);

Skeleton.defaultProps = {
	children: null,
	className: null,
	width: null,
	height: null,
	borderRadius: null,
	inline: false,
};

Skeleton.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	borderRadius: PropTypes.string,
	inline: PropTypes.bool,
};

export { Skeleton };
