import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ChooseView.module.scss';

const ChooseView = ({ children, className }) => (
	<div className={classNames(css.viewBlock, className)}>
		{children}
	</div>
);
ChooseView.defaultProps = {
	children: null,
	className: null,
};

ChooseView.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

export { ChooseView };
