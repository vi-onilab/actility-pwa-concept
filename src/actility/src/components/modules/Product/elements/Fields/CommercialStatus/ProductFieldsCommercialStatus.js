import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';
import { ProductFormModalTooltip } from 'modules/Product/elements/Form/elements/ModalTooltip';

import css from './ProductFieldsCommercialStatus.module.scss';

const VARIANTS = {
	default: css.variantMedium,
	large: css.variantLarge,
	small: css.variantSmall,
	grid: css.variantGrid,
	list: css.variantList,
	compare: css.variantCompare,
	microsite: css.variantMicrosite,
};

const ProductFieldsCommercialStatus = (
	{
		className,
		data,
		variant,
	},
) => (
	data?.commercialStatusText?.length > 0 ? (
		<Flex
			alignItems="center"
			className={classNames(
				css.wrapper,
				className,
				variant && VARIANTS?.[variant],
			)}
		>
			<div className={css.text}>
				{data.commercialStatusText}
			</div>
			<ProductFormModalTooltip>
				Tooltip
			</ProductFormModalTooltip>
		</Flex>
	) : null
);

ProductFieldsCommercialStatus.propTypes = {
	data: PropTypes.shape({
		commercialStatusText: PropTypes.string,
	}),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['small', 'default', 'large', 'list', 'grid', 'compare', 'microsite']),
};

ProductFieldsCommercialStatus.defaultProps = {
	data: null,
	className: null,
	variant: 'default',
};

export { ProductFieldsCommercialStatus };
