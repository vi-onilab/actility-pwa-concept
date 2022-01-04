import PropTypes from 'prop-types';
import css from './Tags.module.scss';

const Tags = ({ children }) => (
	<div className={css.wrapper}>
		{children}
	</div>
);

Tags.defaultProps = {
	children: null,
};

Tags.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { Tags };
