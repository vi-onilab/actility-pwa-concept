import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Tabs.module.scss';

const Tab = ({ isActive, children, onClick }) => (
	<button onClick={onClick} type="button" className={classNames(css.tab, isActive && css.active)}>
		{children}
	</button>
);

Tab.defaultProps = {
	isActive: false,
	children: null,
	onClick: null,
};

Tab.propTypes = {
	isActive: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	onClick: PropTypes.func,
};

export { Tab };
