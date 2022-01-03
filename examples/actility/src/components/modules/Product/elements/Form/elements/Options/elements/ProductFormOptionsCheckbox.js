import PropTypes from 'prop-types';
import { Label } from 'components/elements/Label';
import { classNames } from 'helpers';
import { useProductFormContext } from 'modules/Product';

import css from '../ProductFormOptions.module.scss';

const ProductFormOptionsCheckbox = (
	{
		option,
	},
) => {
	const { form, setValueByOption } = useProductFormContext();
	const selected = form.getValues(option.code) || [];

	form.watch(option.code);

	const isOnceSelected = !!option?.values?.find(({ value, currentPrice }) => !currentPrice?.value && selected.includes(value));

	return (
		<div className={css.optionsWrapper}>
			<Label className={css.optionsLabel}>
				{option.label}
			</Label>
			<div className={css.checkboxList}>
				{option?.values?.map((optionValue, index) => (
					<button
						key={optionValue?.value || index}
						type="button"
						onClick={() => {
							setValueByOption(option, optionValue);
						}}
						disabled={!!optionValue?.currentPrice?.value && isOnceSelected}
						className={classNames(
							css.checkbox,
							selected.includes(optionValue?.value) && css.isActive,
						)}
					>
						{optionValue?.label}

						{/* <Tooltip> */}
						{/*	dsad */}
						{/* </Tooltip> */}
						{optionValue?.currentPrice?.value > 0 && (
							<p className={css.checkboxLabel}>
								{`+${optionValue.currentPrice.label}`}
							</p>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

ProductFormOptionsCheckbox.propTypes = {
	option: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormOptionsCheckbox.defaultProps = {
	option: null,
};

export { ProductFormOptionsCheckbox };
