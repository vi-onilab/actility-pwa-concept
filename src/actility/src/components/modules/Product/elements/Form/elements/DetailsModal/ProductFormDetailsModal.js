import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ModalPortal } from 'elements/Modal';
import { useMediaBreakpoint } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { Flex } from 'elements/Flex';
import { useProductFormContext } from 'modules/Product';
import { InputNumber } from 'elements/InputNumber';

import css from './ProductFormDetailsModal.module.scss';

const ProductFormDetailsModal = (
	{
		className,
		isOpen,
		onDismiss,
	},
) => {
	const {
		getDetails, total, form, count,
		onAddToCart,
	} = useProductFormContext();
	const { isBreakpointUp } = useMediaBreakpoint();

	const data = useMemo(() => (isOpen ? getDetails() : []), [getDetails, isOpen]);

	const jsxContent = (
		<form onSubmit={form.handleSubmit(onAddToCart)} className={css.container}>
			<h2 className={css.title}>Price details</h2>
			<Flex
				direction="column"
				className={css.main}
			>
				{data?.map?.(({ label, values }, groupIndex) => (
					<div
						key={groupIndex}
						className={css.group}
					>
						<div className={css.label}>
							{label}
						</div>
						{values?.map?.((value, valueIndex) => (
							<Flex
								key={valueIndex}
								alignItems="center"
								className={css.option}
							>
								<div>
									{value.label}
								</div>

								<Flex alignItems="center" className={css.value}>
									{value.initialValue && (
										<div className={css.initialValue}>
											{value.initialValue}
										</div>
									)}
									<div className={css.currentValue}>
										{value.currentValue}
									</div>
								</Flex>
							</Flex>
						))}
					</div>
				))}

			</Flex>
			{form.formState.isValid && (
				<Flex
					direction="column"
					className={css.footer}
				>
					<Flex
						alignItems="center"
					>
						<Flex flex="auto" className={css.total}>
							Total price
						</Flex>
						<div className={css.totalValue}>
							{total?.label}
						</div>
					</Flex>
					<Flex
						className={css.count}
					>
						<InputNumber
							value={count.value}
							onChange={count.setValue}
						/>

						<button
							type="submit"
							onClick={() => null}
							className={css.addToCartButton}
						>
							Add to cart
						</button>
					</Flex>
				</Flex>
			)}
		</form>
	);

	const classes = classNames(css.wrapper, className);

	return (
		isBreakpointUp('lg') ? (
			<ModalPortal
				isOpen={isOpen}
				onDismiss={onDismiss}
				className={classes}
			>
				{jsxContent}
			</ModalPortal>
		) : (
			<BottomSheet
				isOpen={isOpen}
				onDismiss={onDismiss}
				className={classes}
			>
				{jsxContent}
			</BottomSheet>
		)
	);
};

ProductFormDetailsModal.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
};

ProductFormDetailsModal.defaultProps = {
	className: null,
	isOpen: false,
	onDismiss: null,
};

export { ProductFormDetailsModal };
