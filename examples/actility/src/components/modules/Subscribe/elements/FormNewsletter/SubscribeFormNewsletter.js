import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { FormProvider, useForm } from 'react-hook-form';
import { SubscribeGuestToNewsletterMutation } from 'schemas';

import { SubscribeForm } from '../Form';

const SubscribeFormNewsletter = () => {
	const form = useForm();

	const [
		subscribeMutation, {
			data,
		},
	] = useMutation(SubscribeGuestToNewsletterMutation);
	const success = data?.subscribeGuestToNewsletter;

	const onSubmitHandler = async ({ email }) => {
		try {
			await subscribeMutation({
				variables: {
					email,
				},
			});
		} catch (err) {
			form.setError('email', { type: 'required', message: err.message });
		}
	};

	return (
		<FormProvider {...form}>
			<SubscribeForm
				success={success}
				onSubmit={onSubmitHandler}
			/>
		</FormProvider>
	);
};

SubscribeFormNewsletter.propTypes = {
	variant: PropTypes.oneOf(['default', 'subscribe']),
};

SubscribeFormNewsletter.defaultProps = {
	variant: 'default',
};

export { SubscribeFormNewsletter };
