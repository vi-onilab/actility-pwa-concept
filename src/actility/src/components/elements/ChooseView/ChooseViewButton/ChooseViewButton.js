import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import cl from '../ChooseView.module.scss';

const ChooseViewButton = ({
	children, isActive, onClick,
}) => (
	<button
		type="button"
		onClick={onClick}
		className={classNames(cl.viewBtn, isActive && cl.active)}
	>
		{children}
	</button>
);

ChooseViewButton.defaultProps = {
	children: true,
	onClick: null,
	isActive: false,
};

ChooseViewButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	onClick: PropTypes.func,
	isActive: PropTypes.bool,
};

export { ChooseViewButton };
