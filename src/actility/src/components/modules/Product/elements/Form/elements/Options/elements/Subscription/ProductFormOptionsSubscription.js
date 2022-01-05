import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Badge from 'elements/Badge';
import { Label } from 'elements/Label';
import { classNames } from 'helpers';
import { useProductFormContext } from 'modules/Product';

import css from './ProductFormOptionsSubscription.module.scss';

const ProductFormOptionsSubscription = (
	{
		className,
		option,
		data,
	},
) => {
	const firstId = data?.subscriptionsList?.[0]?.id;
	const { form, setValueByOption } = useProductFormContext();
	const activeTab = form.getValues(option.code);

	form.watch(option.code);

	useEffect(() => {
		if (activeTab === undefined || activeTab === null) {
			setValueByOption(option, { value: firstId });
		}
	}, [activeTab, firstId, option, setValueByOption]);

	const active = data?.subscriptionsList?.find?.(({ id }) => id === activeTab);

	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				data?.subscriptionsList?.length > 2 && css.isCollapse,
			)}
		>
			<Label>
				Choose Subscription period
			</Label>

			<div className={css.main}>

				<header className={css.tabs}>
					{data?.subscriptionsList.map((
						{
							id, label, text, badge,
						},
						index,
					) => (
						<button
							key={index}
							type="button"
							onClick={() => form.setValue(option.code, id)}
							className={classNames(css.tab, activeTab === id && css.isActive)}
						>
							<p className={css.tabTitle}>{label}</p>
							<p className={css.tabText}>{text}</p>
							{badge && (
								<Badge variant="subscribeLabel" className={css.tabBadge}>
									{badge}
								</Badge>
							)}
						</button>
					))}
				</header>
				<main className={css.content}>

					{!!active && (
						<>
							{active?.content.label && (
								<p className={css.label}>
									{active.content.label}
								</p>
							)}

							<h3 className={css.currentValue}>
								{active?.content?.currentValue}
								{active?.content?.initialValue && (
									<span className={css.initialValue}>{active.content.initialValue}</span>
								)}
							</h3>
							{active?.content?.description && (
								<p className={css.description}>
									{active.content.description}
								</p>
							)}
						</>
					)}
				</main>
			</div>
		</div>
	);
};

ProductFormOptionsSubscription.propTypes = {
	className: PropTypes.string,
	option: PropTypes.oneOfType([PropTypes.object]),
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductFormOptionsSubscription.defaultProps = {
	className: null,
	option: null,
	data: null,
};

export { ProductFormOptionsSubscription };
