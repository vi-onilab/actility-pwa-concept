import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { useNavigationContext } from '../../providers';

import css from './NavigationFloat.module.scss';

const NavigationFloatWrapper = forwardRef(
	(
		{
			className,
			children,
		},
		ref,
	) => {
		const { isVisible } = useNavigationContext();

		return (
			<div
				ref={ref}
				className={classNames(
					css.wrapper,
					className,
					isVisible && css.isVisible,
				)}
			>
				{children}
			</div>
		);
	},
);

NavigationFloatWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

NavigationFloatWrapper.defaultProps = {
	className: null,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { NavigationFloatWrapper };
