import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useNavigationContext } from 'elements/Navigation';

import css from './ProductFormShortSticky.module.scss';

const ProductFormShortStickyWrapper = (
	{
		children,
		className,
	},
) => {
	const { isVisible = true } = useNavigationContext();

	return (
		<div
			className={classNames(
				css.wrapperBottom,
				className,
				isVisible && css.isVisible,
			)}
		>
			{children}
		</div>
	);
};

ProductFormShortStickyWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

ProductFormShortStickyWrapper.defaultProps = {
	children: null,
	className: null,
};

export { ProductFormShortStickyWrapper };
