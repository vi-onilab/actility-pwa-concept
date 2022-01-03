import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon, QuestionIcon } from 'icons';
import { Checkbox } from 'elements/Checkbox';
import { useProductFormContext } from 'modules/Product';
import { useOutsideClick } from 'hooks';

import css from './ProductFormSubscriptionSelect.module.scss';

const ProductFormSubscriptionSelect = (
	{
		className,
		data,
	},
) => {
	const wrapperRef = useRef();
	const triggerRef = useRef();
	const [isOpen, setOpen] = useState(false);
	const { form, setValueByOption } = useProductFormContext();
	const items = data?.subscriptionsList;
	const activeTabId = form.getValues('subscription');
	const activeTab = items?.find(({ id }) => activeTabId === id);

	useOutsideClick(() => {
		setOpen(false);
	}, [triggerRef, wrapperRef]);

	return (
		<div
			className={classNames(css.subscription, className)}
		>
			<p className={css.subscriptionTitle}>
				Subscription
				<br />
				period:
			</p>
			<div
				className={css.subscriptionSelect}
			>
				<button
					className={css.subscriptionSelectButton}
					onClick={() => setOpen(true)}
					ref={triggerRef}
					type="button"
				>
					<div
						className={css.subscriptionSelectContent}
					>
						<p className={css.subscriptionSelectType}>
							{activeTab?.label}
						</p>
						<p className={css.subscriptionSelectPrice}>
							{activeTab?.content?.currentValue}
							<Icon src={QuestionIcon} className={css.subscriptionSelectPriceIcon} />
							{activeTab?.content?.initialValue?.length > 0 && (
								<span className={css.subscriptionSelectOldPrice}>
									{activeTab.content.initialValue}
								</span>
							)}
						</p>
					</div>
					<Icon src={ChevronArrowRightIcon} className={css.subscriptionSelectIcon} />
				</button>

				{isOpen && (
					<div
						ref={wrapperRef}
						className={css.subscriptionOptions}
					>

						{items?.map(({ id, label, content }, index) => (
							<div
								key={id || index}
								className={css.subscriptionOption}
							>
								<Checkbox
									onChange={() => {
										setOpen(false);

										setValueByOption({
											type: 'subscription',
											code: 'subscription',
										}, { value: id });
									}}
									className={css.checkbox}
									isChecked={activeTabId === id}
								>
									<div className={css.subscriptionOptionContent}>
										<p className={css.subscriptionOptionType}>
											{label}
										</p>
										<p className={css.subscriptionOptionPrice}>
											{content?.currentValue}
											{content?.initialValue?.length > 0 && (
												<span className={css.subscriptionOptionPriceAfter}>
													{content.initialValue}
												</span>
											)}
										</p>
										{content?.description?.length > 0 && (
											<p className={css.subscriptionOptionDescription}>
												{content.description}
											</p>
										)}
									</div>
								</Checkbox>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

ProductFormSubscriptionSelect.propTypes = {
	className: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormSubscriptionSelect.defaultProps = {
	className: null,
	data: null,
};

export { ProductFormSubscriptionSelect };
