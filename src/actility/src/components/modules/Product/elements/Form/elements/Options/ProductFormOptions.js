import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PRODUCT_OPTIONS_MAPPER } from 'modules/Product';

import css from './ProductFormOptions.module.scss';

const ProductFormOptions = (
	{
		data,
		isQuickView,
	},
) => {
	if (data?.customizeOptions?.length <= 0) {
		return null;
	}

	return (
		<div className={css.optionsList}>
			{data?.customizeOptions?.map((option, index, self) => {
				const RenderComponent = PRODUCT_OPTIONS_MAPPER?.[option.type];

				if ((!isQuickView || RenderComponent === PRODUCT_OPTIONS_MAPPER.rfRegion)) {
					return (
						<Fragment
							key={option.code}
						>
							{!option?.variant && !!self?.[index - 1]?.variant && (
								<div className={css.optionsDivider} />
							)}
							<RenderComponent
								data={data}
								option={option}
								isQuickView={isQuickView}
							/>
						</Fragment>
					);
				}

				return null;
			})}
		</div>
	);
};

ProductFormOptions.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	isQuickView: PropTypes.bool,
};

ProductFormOptions.defaultProps = {
	data: null,
	isQuickView: false,
};

export { ProductFormOptions };
