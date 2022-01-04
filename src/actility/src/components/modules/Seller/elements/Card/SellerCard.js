import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import Button from 'elements/Button';
import { Image } from 'elements/Image';
import { useRouter } from 'hooks';
import { useHistory } from 'react-router-dom';
import { Link } from 'elements/Link';
import { useFaqAskModal } from 'modules/Faq';
import { useRequestQuoteModal } from 'hooks/useRequestQuoteModal';

import css from './SellerCard.module.scss';

const SellerCard = (
	{
		className,
		data,
	},
) => {
	const [FaqModal, faqProps, { onOpen }] = useFaqAskModal({ vendorId: data?.id });
	const [ProductRequestQuoteModal, quoteProps, { onOpenQuote }] = useRequestQuoteModal({ vendorId: data?.id });
	const { push } = useHistory();
	const { getMicrositeUrl } = useRouter();

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<Link
				to={getMicrositeUrl(data?.id)}
				className={css.image}
			>
				{data?.image?.length > 0 && (
					<Image src={data.image} alt={data.storeName} />
				)}
			</Link>
			<div className={css.main}>
				<Button
					additionalClass={classNames(
						css.button,
						css.buttonInvert,
					)}
					onClick={() => {
						if (data?.id) {
							push(getMicrositeUrl(data.id));
						}
					}}
					text="Visit microsite"
				/>
				<Button additionalClass={css.button} onClick={onOpen} text="Contact the seller" />
				<Button additionalClass={css.button} onClick={onOpenQuote} text="Request a quote" />
				{data?.workHours?.length > 0 && (
					<p className={css.workTime}>
						{data.workHours}
					</p>
				)}
			</div>
			<FaqModal {...faqProps} />
			<ProductRequestQuoteModal {...quoteProps} />
		</div>
	);
};

SellerCard.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		image: PropTypes.string,
		storeName: PropTypes.string,
		workHours: PropTypes.string,
	}),
};

SellerCard.defaultProps = {
	className: null,
	data: null,
};

export { SellerCard };
