import { useState } from 'react';
import { Error } from 'elements/Error';
import { Input } from 'elements/Input';
import { REGEX_FULL_NAME_VALIDATION } from 'constants';
import { Checkbox } from 'elements/Checkbox';
import { Select } from 'elements/Select';
import { useCurrencySwitcherQuery, useFormState } from 'hooks';
import { useForm } from 'react-hook-form';
import { CreateCustomerAddressMutation } from 'schemas';
import { useMutation } from '@apollo/client';
import { $country, $notifications } from 'models';
import PropTypes from 'prop-types';

const STATE_PROVINCE = [
	{
		label: 'Alberta',
		value: 'AB',
	},
	{
		label: 'British Columbia',
		value: 'BC',
	},
	{
		label: 'Manitoba',
		value: 'MB',
	},
	{
		label: 'Northwest Territories',
		value: 'NT',
	},
	{
		label: 'Saskatchewan',
		value: 'SK',
	},
	{
		label: 'District of Columbia',
		value: 'DC',
	},
];

const AddNewAddress = (
	{
		onCloseHandler,
	},
) => {
	const [selectedCountry, setSelectedCountry] = $country.useCurrent();
	const [selectedStateProvince, setSelectedStateProvince] = useState(STATE_PROVINCE[0].value);

	const { data: { currencySwitcher = null } = {} } = useCurrencySwitcherQuery();
	const [createCustomerAddressMutation] = useMutation(CreateCustomerAddressMutation, { ignoreResults: true });

	const {
		isSubmitting, setSubmitting, setErrorMessage, errorMessage,
	} = useFormState();

	const {
		handleSubmit, register, formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			addresses_first: '',
			addresses_second: '',
			zip_code: '',
			phone_number: '',
			default_shipping_address: false,
			default_billing_address: false,
			company: '',
			vat_id: '',
		},
	});

	const onSubmitHandler = async ({
		name,
		addresses_first,
		addresses_second,
		city,
		zip_code,
		phone_number,
		default_shipping_address,
		default_billing_address,
		company,
		vat_id,
	}) => {
		setSubmitting(true);

		const [firstname, lastname] = name.split(' ');

		try {
			await createCustomerAddressMutation({
				variables: {
					input: {
						firstname,
						lastname,
						city,
						postcode: zip_code,
						country_code: selectedCountry,
						region: {
							region: selectedStateProvince,
						},
						street: `${addresses_first} ${addresses_second}`,
						telephone: phone_number,
						default_billing: default_billing_address,
						default_shipping: default_shipping_address,
						company,
						vat_id,
					},
				},
			});

			$notifications.addSuccessNotify({
				body: 'New address was successfully added!',
			});
			setSubmitting(false);
			onCloseHandler?.();
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<Error value={errors?.name?.message}>
				<Input
					name="name"
					label="First & Last Name (e.g. Tom Hanks)*"
					{...register('name', {
						required: {
							value: true,
							message: 'Name is required!',
						},
						pattern: {
							value: REGEX_FULL_NAME_VALIDATION,
							message: 'Enter your first and last name!',
						},
					})}
				/>
			</Error>
			<Error value={errors?.addresses_first?.message}>
				<Input
					name="addresses_first"
					label="Address line 1*"
					{...register('addresses_first', {
						required: {
							value: true,
							message: 'Address is required!',
						},
					})}
				/>
			</Error>
			<Error value={errors?.addresses_second?.message}>
				<Input
					name="addresses_second"
					label="Address line 2"
					{...register('addresses_second')}
					required={false}
				/>
			</Error>
			<Error value={errors?.city?.message}>
				<Input
					name="city"
					label="City*"
					{...register('city', {
						required: {
							value: true,
							message: 'City is required!',
						},
					})}
				/>
			</Error>
			<Error>
				<Select
					value={selectedStateProvince}
					isSearchable
					onChange={(newValue) => setSelectedStateProvince(newValue)}
					label="State/Province*"
					options={STATE_PROVINCE}
					required={false}
				/>
			</Error>
			<Error value={errors?.zip_code?.message}>
				<Input
					name="zip_code"
					label="Zip/Postal code*"
					{...register('zip_code', {
						required: {
							value: true,
							message: 'Zip/Postal code is required!',
						},
					})}
				/>
			</Error>
			<Error>
				<Select
					value={selectedCountry}
					isSearchable
					onChange={(newValue) => setSelectedCountry(newValue)}
					label="Country*"
					options={currencySwitcher?.countriesList}
					required={false}
				/>
			</Error>
			<Error value={errors?.phone_number?.message}>
				<Input
					name="phone_number"
					label="Phone number*"
					{...register('phone_number', {
						required: {
							value: true,
							message: 'Phone number is required!',
						},
					})}
				/>
			</Error>
			<div>
				Company information
			</div>
			<Error value={errors?.company?.message}>
				<Input
					name="company"
					label="Company name"
					{...register('company', {
						required: {
							value: true,
							message: 'Company name is required!',
						},
					})}
				/>
			</Error>
			<Error value={errors?.vat_id?.message}>
				<Input
					name="vat_id"
					label="VAT number"
					{...register('vat_id', {
						required: {
							value: true,
							message: 'VAT number is required!',
						},
					})}
				/>
			</Error>
			<Error value={errors?.default_shipping_address?.message}>
				<Checkbox
					{...register('default_shipping_address')}
				>
					<p>Use as default shipping address</p>
				</Checkbox>
			</Error>
			<Error value={errors?.default_billing_address?.message}>
				<Checkbox
					{...register('default_billing_address')}
				>
					<p>Use as default billing address</p>
				</Checkbox>
			</Error>
			<Error value={errorMessage} />
			<button
				disabled={isSubmitting}
				type="submit"
			>
				Save & close
			</button>
		</form>
	);
};

export { AddNewAddress };

AddNewAddress.propTypes = {
	onCloseHandler: PropTypes.func,
};

AddNewAddress.defaultProps = {
	onCloseHandler: null,
};
