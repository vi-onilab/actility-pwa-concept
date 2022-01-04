import PropTypes from 'prop-types';

const RootProvider = (
	{
		children,
		providers,
	},
) => (
	providers.reduceRight((result, Current) => (
		<Current>
			{result}
		</Current>
	), children)
);

RootProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	providers: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export { RootProvider };
