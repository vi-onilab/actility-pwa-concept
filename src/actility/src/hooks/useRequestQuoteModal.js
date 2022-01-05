import { useState } from 'react';

import { ProductRequestQuoteModal } from 'modules/Product/elements/RequestQuoteModal';

export const useRequestQuoteModal = ({ vendorId }) => {
	const [isOpenQuoteModal, setOpenQuoteModal] = useState(false);

	return [
		ProductRequestQuoteModal,
		{
			isOpenQuoteModal,
			onDismissQuote: () => setOpenQuoteModal(false),
			vendorId,
		},
		{
			isOpenQuoteModal,
			onOpenQuote: () => setOpenQuoteModal(true),
			onDismissQuote: () => setOpenQuoteModal(false),
		},
	];
};
