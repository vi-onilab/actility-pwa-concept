import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { Flex } from 'elements/Flex';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon, CloseMenuIcon } from 'icons';
import { PRODUCT_OPTIONS_MAPPER, useProductFormContext } from 'modules/Product';

import css from './ProductFormStepConfiguratorModal.module.scss';

const ProductFormStepConfiguratorModal = (
	{
		isOpen,
		onDismiss,
		className,
		data,
	},
) => {
	const { form, total, onOpenDetail } = useProductFormContext();
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const steps = data?.customizeOptions;
	const countSteps = steps?.length;
	const currentStep = steps?.[currentStepIndex];

	const onPrevStep = () => setCurrentStepIndex((prev) => Math.max(0, prev - 1));
	const onNextStep = () => {
		if ((currentStepIndex + 1) >= countSteps) {
			onOpenDetail();
		} else {
			setCurrentStepIndex((prev) => Math.min(countSteps - 1, prev + 1));
		}
	};

	const RenderComponent = PRODUCT_OPTIONS_MAPPER?.[currentStep?.type] || Fragment;

	const value = form.getValues(currentStep?.code);

	return (
		<ModalPortal
			isOpen={isOpen}
			variant="configurator"
			onDismiss={onDismiss}
			header={(
				<ModalHeaderBackArrow
					onDismiss={currentStepIndex > 0 && onPrevStep}
				>
					<Flex alignItems="center">
						<Flex flex="auto" justifyContent="center">
							{`${currentStepIndex + 1}/${countSteps} step`}
						</Flex>
						<button type="button" className={css.close} onClick={onDismiss}>
							<Icon src={CloseMenuIcon} className={css.closeIcon} />
						</button>
					</Flex>
				</ModalHeaderBackArrow>
			)}
			footer={(
				<Flex
					className={css.footer}
				>
					<Flex
						as="button"
						asProps={{
							type: 'button',
							onClick: () => onOpenDetail(),
						}}
						flex="auto"
						alignItems="center"
						className={css.total}
					>
						<Flex
							className={css.totalIconWrapper}
							alignItems="center"
							justifyContent="center"
						>
							<Icon src={ChevronArrowRightIcon} className={css.totalIcon} />
						</Flex>
						<div>
							<p className={css.totalLabel}>
								Total price
							</p>
							<p className={css.totalValue}>
								{total.label}
							</p>
						</div>
					</Flex>
					<button
						type="button"
						disabled={(value === undefined || value === null || value?.length === 0)}
						className={css.button}
						onClick={onNextStep}
					>
						Confirm
					</button>
				</Flex>
			)}
			className={classNames(css.wrapper, className)}
		>
			<main className={css.main}>
				{RenderComponent !== Fragment && (
					<RenderComponent
						option={currentStep}
						data={data}
					/>
				)}
			</main>
		</ModalPortal>
	);
};

ProductFormStepConfiguratorModal.propTypes = {
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	className: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormStepConfiguratorModal.defaultProps = {
	isOpen: false,
	onDismiss: null,
	className: null,
	data: null,
};

export { ProductFormStepConfiguratorModal };
