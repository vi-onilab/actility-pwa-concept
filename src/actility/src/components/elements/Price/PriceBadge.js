import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import Badge from 'elements/Badge';
import css from './Price.module.scss';

const PriceBadge = ({ className, data }) => (
	<div className={classNames(css.badges, className)}>
		{data?.map(({ value, type }, index) => (
			<Badge
				key={index}
				variant={type}
			>
				{value}
			</Badge>
		))}
	</div>
);

PriceBadge.propTypes = {
	className: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.string,
		value: PropTypes.string,
	})),
};

PriceBadge.defaultProps = {
	className: null,
	data: null,
};

export { PriceBadge };
