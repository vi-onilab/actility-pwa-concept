import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from 'elements/Label';
import { LinkArrow } from 'elements/LinkArrow';
import { classNames } from 'helpers';
import {
	ProductDeliveryInformationBox, ProductFormFooter, ProductFormOptions, ProductSpecs,
} from 'modules/Product';
import { useMediaBreakpoint } from 'providers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';

import css from './ProductForm.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	quickView: css.variantQuickView,
};

const ProductForm = (
	{
		className,
		data,
		variant,
	},
) => {
	const [isOpenSpecs, setOpenSpecs] = useState(false);
	const { isBreakpointDown } = useMediaBreakpoint();
	const isLgDown = isBreakpointDown('lg');

	const isQuickView = variant === 'quickView';

	const isExtendView = !data?.isSimpleProduct;

	const jsxProductInformation = (
		<div className={classNames(css.cardSelect, isQuickView && css.isQuickView)}>
			<Label>
				Product information
			</Label>
			<ProductSpecs data={data} variant={isQuickView && 'quickView'} />
			{(!isQuickView || isExtendView) && (
				<>
					{isLgDown && (
						<ModalPortal
							header={(
								<ModalHeaderBackArrow onDismiss={() => setOpenSpecs(false)}>
									Product specification
								</ModalHeaderBackArrow>
							)}
							isOpen={isOpenSpecs}
							onDismiss={() => setOpenSpecs(false)}
						>
							<ProductSpecs data={data} />
						</ModalPortal>
					)}
					<LinkArrow
						variant="smallBold"
						onClick={() => {
							if (isLgDown) {
								setOpenSpecs(true);
							} else {
								document.getElementById('specifications')?.scrollIntoView?.({
									behavior: 'smooth',
									block: 'start',
								});
							}
						}}
						className={css.goToAllSpecs}
					>
						Go to all specification
					</LinkArrow>
				</>
			)}
		</div>
	);

	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				(variant && VARIANTS?.[variant]) || VARIANTS.default,
			)}
		>
			{isExtendView && isQuickView && jsxProductInformation}

			{/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
			 {((isExtendView && !isLgDown) || !isExtendView) && (
				<ProductFormOptions
					data={data}
					isQuickView={isQuickView}
				/>
			)}

			{isLgDown && (
				<ProductDeliveryInformationBox />
			)}

			{!isExtendView && isLgDown && jsxProductInformation}

			<ProductFormFooter
				data={data}
				isQuickView={isQuickView}
			/>

			{!isExtendView && !isLgDown && jsxProductInformation}
		</div>
	);
};

ProductForm.propTypes = {
	className: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.object]),
	variant: PropTypes.oneOf(['default', 'quickView', false]),
};

ProductForm.defaultProps = {
	className: null,
	data: null,
	variant: 'default',
};

export { ProductForm };
