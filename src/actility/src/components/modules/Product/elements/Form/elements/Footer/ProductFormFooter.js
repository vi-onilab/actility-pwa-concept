import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	ProductFieldsCommercialStatus,
	ProductFieldsVat,
	useProductFormContext,
} from 'modules/Product';
import { Label } from 'components/elements/Label';
import { Price, PriceCurrentValue } from 'components/elements/Price';
import { InputNumber } from 'elements/InputNumber';
import Button from 'elements/Button';
import { useMediaBreakpoint } from 'providers';
import { Flex } from 'elements/Flex';

import css from './ProductFormFooter.module.scss';

const ProductFormFooter = (
	{
		data,
		isQuickView,
	},
) => {
	const [isLoading, setLoading] = useState(false);
	const {
		onOpenConfigurator, total, count, onAddToCart,
	} = useProductFormContext();
	const { isBreakpointDown } = useMediaBreakpoint();
	const isExtendView = !data?.isSimpleProduct;
	const isLgDown = isBreakpointDown('lg');

	const jsxInputWithButton = (
		<>
			<InputNumber
				min={1}
				value={count.value}
				onChange={count.setValue}
				className={isQuickView && css.variantQuickView}
			/>
			<Button
				onClick={async () => {
					setLoading(true);
					await onAddToCart();
					setLoading(false);
				}}
				additionalClass={classNames(css.cardInfoSplitConfirm, isQuickView && css.variantQuickView)}
				text={isLoading ? 'Adding...' : data?.addToCartLabel}
			/>
		</>
	);

	return (
		<>
			{isExtendView && (isQuickView || isLgDown) && (
				<Flex className={classNames(css.cardEmpty, isQuickView && css.cardEmptyQuickView)}>
					<Button
						onClick={isLgDown ? onOpenConfigurator : undefined}
						additionalClass={classNames(css.cardInfoSplitConfirm, css.cardEmptyButton, !isQuickView && css.cardEmptyProductButton)}
						text="Customize"
					/>
				</Flex>
			)}

			{isExtendView && !isQuickView && !isLgDown && (
				<div className={css.cardInfo}>
					<Label>
						TOTAL PRICE
					</Label>
					<Price
						currentValue={total?.value}
						className={css.price}
					>
						<PriceCurrentValue
							className={css.priceCurrent}
						/>
					</Price>
					<div className={css.cardInfoSplit}>
						<ProductFieldsVat data={data} />
						<ProductFieldsCommercialStatus
							data={data}
							className={css.cardInfoCommercial}
						/>
					</div>
					<div className={css.cardInfoSplit}>
						{jsxInputWithButton}
					</div>
				</div>
			)}

			{!isExtendView && (
				<div className={css.cardEmpty}>
					<div className={css.cardInfoSplit}>
						{jsxInputWithButton}
					</div>
				</div>
			)}
		</>
	);
};

ProductFormFooter.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	isQuickView: PropTypes.bool,
};

ProductFormFooter.defaultProps = {
	data: null,
	isQuickView: false,
};

export { ProductFormFooter };
