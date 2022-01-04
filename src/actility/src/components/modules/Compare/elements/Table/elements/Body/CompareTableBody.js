import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Container } from 'elements/Container';

import css from './CompareTableBody.module.scss';

const CompareTableBody = (
	{
		children,
		className,
	},
) => (
	<Container
		className={classNames(css.wrapper, className)}
	>
		{children}
	</Container>
);

CompareTableBody.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CompareTableBody.defaultProps = {
	children: null,
	className: null,
};

export { CompareTableBody };
