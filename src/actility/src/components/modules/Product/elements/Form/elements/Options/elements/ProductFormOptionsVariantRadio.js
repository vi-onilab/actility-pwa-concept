import PropTypes from 'prop-types';
import { useProductFormContext } from 'modules/Product';
import { Label } from 'components/elements/Label';
import { classNames } from 'helpers';

import css from '../ProductFormOptions.module.scss';

const ProductFormOptionsVariantRadio = (
	{
		option,
	},
) => {
	const { form, setValueByOption } = useProductFormContext();

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
		</div>
	);
};

ProductFormOptionsVariantRadio.propTypes = {
	option: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormOptionsVariantRadio.defaultProps = {
	option: null,
};

export { ProductFormOptionsVariantRadio };
