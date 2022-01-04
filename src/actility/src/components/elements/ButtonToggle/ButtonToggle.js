import PropTypes from 'prop-types';
import { useState } from 'react';
import { classNames } from 'helpers';

import css from './ButtonToggle.module.scss';

const ButtonToggle = ({ children, isActive }) => {
	const [isChecked, setChecked] = useState(isActive);

	const eventHandler = () => {
		setChecked(!isChecked);
	};
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<div className={classNames(css.wrapper, isChecked && css.isActive)} onClick={eventHandler}>
			{children}
			<div className={css.toggleWrapper}>
				<div className={css.toggle} />
			</div>
		</div>
	);
};

ButtonToggle.defaultProps = {
	children: null,
	isActive: false,
};

ButtonToggle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	isActive: PropTypes.bool,
};

export { ButtonToggle };
