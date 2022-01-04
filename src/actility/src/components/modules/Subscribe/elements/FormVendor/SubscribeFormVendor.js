import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { FormProvider, useForm } from 'react-hook-form';
import { SubscribeEmailToVendorMutation } from 'schemas';

import { SubscribeForm } from '../Form';

const SubscribeFormVendor = ({ vendorId }) => {
	const form = useForm();

	const [
		subscribeMutation, {
			data,
		},
	] = useMutation(SubscribeEmailToVendorMutation);
	const success = data?.subscribeEmailToVendor;

	const onSubmitHandler = async ({ email }) => {
		try {
			await subscribeMutation({
				variables: {
					email,
					vendorId,
				},
			});
		} catch (err) {
			form.setError('email', { type: 'required', message: err.message });
		}
	};

	return (
		<FormProvider {...form}>
			<SubscribeForm
				variant="microsite"
				success={success}
				onSubmit={onSubmitHandler}
			/>
		</FormProvider>
	);
};

SubscribeFormVendor.propTypes = {
	vendorId: PropTypes.string,
};

SubscribeFormVendor.defaultProps = {
	vendorId: null,
};

export { SubscribeFormVendor };
