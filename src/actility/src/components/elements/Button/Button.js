import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = (
	{
		text,
		additionalClass,
		onClick,
		type,
	},
) => (
	<button
		type={type || 'button'}
		onClick={onClick}
		className={additionalClass ? `${styles.button} ${additionalClass}` : `${styles.button}`}
	>
		{text}
	</button>
);

Button.defaultProps = {
	text: '',
	additionalClass: '',
	onClick: null,
	type: 'button',
};

Button.propTypes = {
	text: PropTypes.string,
	additionalClass: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default Button;
