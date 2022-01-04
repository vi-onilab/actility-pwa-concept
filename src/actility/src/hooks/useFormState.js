import { useState } from 'react';

const useFormState = () => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [isSubmitting, setSubmitting] = useState(false);

	return {
		isSubmitting,
		setSubmitting: (state) => {
			setSubmitting(state);
			setErrorMessage(null);
		},
		errorMessage,
		setErrorMessage: (state) => {
			setErrorMessage(state);
			setSubmitting(false);
		},
	};
};

export { useFormState };
