import PropTypes from 'prop-types';
import { Label } from 'components/elements/Label';
import { classNames } from 'helpers';
import { useProductFormContext } from 'modules/Product';
import { ProductFormModalTooltip } from 'modules/Product/elements/Form/elements/ModalTooltip';

import css from '../ProductFormOptions.module.scss';

const ProductFormOptionsRadio = (
	{
		option,
	},
) => {
	const {
		form,
		setValueByOption,
	} = useProductFormContext();
	const selected = form.getValues(option.code) || [];

	form.watch(option.code);

	return (
		<div className={css.optionsWrapper}>
			<Label className={css.optionsLabel}>
				{option.label}
			</Label>
			<div className={css.radioList}>
				{option?.values?.map((optionValue, index) => (
					<button
						key={optionValue?.value || index}
						type="button"
						onClick={() => setValueByOption(option, optionValue)}
						className={classNames(
							css.radio,
							selected === optionValue?.value && css.isActive,
						)}
					>
						<p className={css.label}>
							{optionValue?.label}
							<ProductFormModalTooltip>
								<header className={css.header}>
									<h3 className={css.headerTitle}>ThingPark Ready LoRaWAN® Gateway*</h3>
								</header>
								<main className={css.main}>
									<div className={css.item}>
										<div className={css.itemImageWrapper}>
											{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
											<img className={css.itemImage} src="" alt="Image" />
										</div>
										<p className={css.itemTitle}>
											Ufispace Enterprise Indoor Gateway
										</p>
									</div>
									<div className={css.text}>
										<p className={css.textDescription}>
											ThingPark Connected devices have been extensively tested through LoRaWAN use
											cases and application integration to confirm interoperability in networks
											powered by Actility’s network server and management software. ThingPark has been
											selected by market leaders such as Orange, Proximus, Swisscom, Cisco, Inmarsat,
											KPN, and more. cleardot
										</p>
									</div>
								</main>
							</ProductFormModalTooltip>
						</p>

						{optionValue?.currentPrice?.value > 0 && (
							<p className={css.radioLabel}>
								{`+${optionValue?.currentPrice?.label}`}
							</p>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

ProductFormOptionsRadio.propTypes = {
	option: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormOptionsRadio.defaultProps = {
	option: null,
};

export { ProductFormOptionsRadio };
