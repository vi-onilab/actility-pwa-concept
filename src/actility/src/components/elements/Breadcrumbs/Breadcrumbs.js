import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { classNames } from 'helpers';

import css from './Breadcrumbs.module.scss';
import { Breadcrumb } from './Breadcrumb';

const Breadcrumbs = ({ children, className, isHome }) => (
	<div className={classNames(css.breadcrumbs, className)}>
		<Container>
			{isHome && (
				<Breadcrumb to="/">
					Home
				</Breadcrumb>
			)}

			{children}
		</Container>
	</div>
);

Breadcrumbs.defaultProps = {
	children: null,
	className: null,
	isHome: false,
};

Breadcrumbs.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	isHome: PropTypes.bool,
};

export { Breadcrumbs };
