import PropTypes from 'prop-types';

import css from './FilterGroup.module.scss';

const FilterGroup = (
	{
		title,
		children,
	},
) => (
	<div className={css.filterWrapper}>
		{title && (
			<p className={css.filterTitle}>
				{title}
			</p>
		)}
		<div className={css.filterContent}>
			{children}
		</div>
	</div>
);

FilterGroup.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
		PropTypes.object,
	]),
};

FilterGroup.defaultProps = {
	title: null,
	children: null,
};

export { FilterGroup };
