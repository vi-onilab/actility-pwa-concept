import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ProductFieldsVat.module.scss';

const ProductFieldsVat = (
	{
		className,
		data,
	},
) => (
	<p
		className={classNames(css.wrapper, className)}
	>
		{data?.isVatIncluded ? '(VAT included)' : '(VAT excluded)'}
	</p>
);

ProductFieldsVat.propTypes = {
	data: PropTypes.shape({
		isVatIncluded: PropTypes.bool,
	}),
	className: PropTypes.string,
};

ProductFieldsVat.defaultProps = {
	data: null,
	className: null,
};

export { ProductFieldsVat };
