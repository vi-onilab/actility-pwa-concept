import PropTypes from 'prop-types';

import css from '../ProductCard.module.scss';

const PARAMS = [
	{ key: 'sku', label: 'SKU' },
	{ key: 'acRfTransceiver', label: 'RF Region' },
	{ key: 'acLoraClass', label: 'LoRa Class' },
	{ key: 'acOtherProtocol', label: 'Other protocol' },
];

const ProductCardParams = ({ data }) => {
	const categories = data?.categories?.map(({ name }) => name).join(', ');

	const attributes = (
		PARAMS
			.map((param) => (
				param.key in data && data?.[param.key]?.length > 0 && ({
					...param,
					value: data?.[param.key],
				})
			))
			.filter(Boolean)
	);

	return (
		<div className={css.params}>
			<ul className={css.paramsList}>
				{attributes?.map(({ value, key, label }, index) => (
					<li key={key || index} className={css.paramsItem}>
						<p className={css.paramsLabel}>{`${label}:`}</p>
						<p className={css.paramsValue}>{value}</p>
					</li>
				))}
			</ul>

			<div className={css.paramsSolution}>
				<p className={css.paramsLabel}>Solution Represented:</p>
				<p className={css.paramsValue}>{categories}</p>
			</div>
		</div>
	);
};

ProductCardParams.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductCardParams.defaultProps = {
	data: null,
};

export { ProductCardParams };
