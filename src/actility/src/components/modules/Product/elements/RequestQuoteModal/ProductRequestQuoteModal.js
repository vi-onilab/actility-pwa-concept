import PropTypes from 'prop-types';
import { ModalPortal } from 'elements/Modal';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { ProductQuoteCard } from 'modules/Product/elements/QuoteCard';
import { Input } from 'elements/Input';
import Button from 'elements/Button';

import css from './ProductRequestQuoteModal.module.scss';

const ProductRequestQuoteModal = (
	{
		isOpenQuoteModal,
		onDismissQuote,
	},
) => {
	const jsx = (
		<div className={css.modal}>
			<div className={css.header}>
				<h3 className={css.headerTitle}>Request a quote</h3>
			</div>
			<ProductQuoteCard className={css.card} />
			<Input className={css.input} label="Your price*" />
			<Input multiple className={css.inputText} label="Comments" />
			<Button additionalClass={css.button} text="Send request" onClick={() => null} />
		</div>
	);

	return (
		<>
			<MediaBreakpointUp name="lg">
				<ModalPortal
					isOpen={isOpenQuoteModal}
					onDismiss={onDismissQuote}
				>
					{jsx}
				</ModalPortal>
			</MediaBreakpointUp>
			<MediaBreakpointDown name="lg">
				<BottomSheet
					onDismiss={onDismissQuote}
					isOpen={isOpenQuoteModal}
				>
					{jsx}
				</BottomSheet>
			</MediaBreakpointDown>
		</>
	);
};

ProductRequestQuoteModal.propTypes = {
	onDismissQuote: PropTypes.func,
	isOpenQuoteModal: PropTypes.bool,
};

ProductRequestQuoteModal.defaultProps = {
	onDismissQuote: null,
	isOpenQuoteModal: false,
};

export { ProductRequestQuoteModal };
