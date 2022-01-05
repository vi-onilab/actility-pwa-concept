import { useState } from 'react';

import { FaqAskModal } from '../elements';

export const useFaqAskModal = ({ vendorId }) => {
	const [isOpen, setOpen] = useState(false);

	return [
		FaqAskModal,
		{
			isOpen,
			onDismiss: () => setOpen(false),
			vendorId,
		},
		{
			isOpen,
			onOpen: () => setOpen(true),
			onDismiss: () => setOpen(false),
		},
	];
};
