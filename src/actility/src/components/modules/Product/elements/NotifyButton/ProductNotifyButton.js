import { useMutation } from '@apollo/client';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { CheckIcon, NotificationIcon } from 'icons';
import { classNames } from 'helpers';
import { ProductAlertPriceDropSubscribeMutation } from 'schemas';
import { $notifications } from 'models';

import css from './ProductNotifyButton.module.scss';

const ProductNotifyButton = (
	{
		className,
		data,
	},
) => {
	const [productAlertPriceDropSubscribeMutation, { loading, data: { productAlertPriceDropSubscribe = null } = {} }] = useMutation(ProductAlertPriceDropSubscribeMutation, {
		variables: {
			productId: data?.id,
		},
	});

	const onClickHandler = async () => {
		if (data?.id && !loading) {
			try {
				await productAlertPriceDropSubscribeMutation();
			} catch (err) {
				if (err?.message?.length > 0) {
					$notifications.addErrorNotify({ body: err.message });
				}
			}
		}
	};

	return (
		productAlertPriceDropSubscribe ? (
			<div className={classNames(css.success, className)}>
				<Icon
					src={CheckIcon}
					className={css.icon}
				/>
				<span className={css.text}>
					{'Congratulations! You\'re subscribed.'}
				</span>
			</div>
		) : (
			<button
				type="submit"
				onClick={onClickHandler}
				className={classNames(css.wrapper, className, loading && css.loading)}
			>
				<Icon
					src={NotificationIcon}
					className={css.icon}
				/>
				<span className={css.text}>
					{loading ? 'Please, wait...' : 'Notify me when the price drops'}
				</span>
			</button>
		)
	);
};

ProductNotifyButton.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		id: PropTypes.number,
	}),
};

ProductNotifyButton.defaultProps = {
	className: null,
	data: null,
};

export { ProductNotifyButton };
