import { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductMapGuideModal, useProductFormContext } from 'modules/Product';
import { Label } from 'components/elements/Label';
import { classNames } from 'helpers';
import { LinkArrow } from 'elements/LinkArrow';

import css from '../ProductFormOptions.module.scss';

const ProductFormOptionsRfRegion = (
	{
		option,
		isQuickView,
	},
) => {
	const { form, setValueByOption } = useProductFormContext();
	const [isOpenMapGuide, setOpenGuideMap] = useState(false);

	form.watch(option.code);

	return (
		<div className={css.optionsWrapper}>
			<Label className={css.optionsLabel}>
				{option?.label}
			</Label>
			<div className={css.checkboxTouchList}>
				{option?.values?.map((optionValue) => (
					<button
						key={optionValue?.value}
						type="button"
						onClick={() => setValueByOption(option, optionValue)}
						className={classNames(css.checkboxTouch, form.getValues(option.code) === optionValue?.value && css.isActive)}
					>
						{optionValue?.label}
					</button>
				))}
			</div>

			{!isQuickView && (
				<>
					<LinkArrow
						onClick={() => setOpenGuideMap(true)}
						variant="filterMobile"
						className={css.checkboxTouchArrow}
					>
						LoRa Frequency Map Guide
					</LinkArrow>
					<ProductMapGuideModal
						isOpen={isOpenMapGuide}
						onDismiss={() => setOpenGuideMap(false)}
					/>
				</>
			)}
		</div>
	);
};

ProductFormOptionsRfRegion.propTypes = {
	option: PropTypes.oneOfType([PropTypes.object]),
	isQuickView: PropTypes.bool,
};

ProductFormOptionsRfRegion.defaultProps = {
	option: null,
	isQuickView: false,
};

export { ProductFormOptionsRfRegion };
