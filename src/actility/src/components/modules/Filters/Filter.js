import PropTypes from 'prop-types';

import { FilterProvider } from './providers';

import css from './Filter.module.scss';

const Filter = (
	{
		data,
		initial,
		controls,
		children,
		onChange,
	},
) => (
	<FilterProvider
		filters={data}
		initial={initial}
		controls={controls}
		onChange={onChange}
	>
		<div className={css.pageContentRow}>
			{children}
		</div>
	</FilterProvider>
);

Filter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	initial: PropTypes.oneOfType([PropTypes.object]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	onChange: PropTypes.func,
	controls: FilterProvider.propTypes.controls,
};

Filter.defaultProps = {
	data: {},
	initial: {},
	onChange: null,
	controls: FilterProvider.defaultProps.controls,
};

export { Filter };
