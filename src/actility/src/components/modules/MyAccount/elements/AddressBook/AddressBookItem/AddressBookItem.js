import PropTypes from 'prop-types';
import { DeleteCustomerAddressMutation } from 'schemas';
import { useMutation } from '@apollo/client';
import { $notifications } from 'models';
import { useCountriesQuery } from 'hooks';

const AddressBookItem = (
	{
		address,
		serialNumber,
	},
) => {
	const result = [];
	let label = '';

	const { countries, loading } = useCountriesQuery();

	const [deleteCustomerAddressMutation] = useMutation(DeleteCustomerAddressMutation, {
		onCompleted: () => {
			$notifications.addSuccessNotify({
				body: 'Address was successfully removed!',
			});
		},
		onError: (err) => {
			$notifications.addErrorNotify({
				body: err.message,
			});
		},
		ignoreResults: true,
		variables: {
			id: address.id,
		},
	});

	if (loading) {
		return 'AddressBookItemPlaceholder';
	}

	if (address.default_billing && address.default_shipping) {
		label = 'Default shipping & Billing';
	} else if (address.default_shipping) {
		label = 'Default shipping';
	} else if (address.default_billing) {
		label = 'Default billing';
	} else {
		label = `Additional ${serialNumber}`;
	}

	if (address.firstname && address.lastname) {
		result.push(<div key="full-name">{`${address.firstname} ${address.lastname}`}</div>);
	}

	if (address.company) {
		result.push(
			<span key="company">
				{`${address.company} `}
				<br />
			</span>,
		);
	}

	if (address.street) {
		if (address.street[0]) {
			result.push(
				<span key="street-line-1">
					{`${address.street[0]} `}
					<br />
				</span>,
			);
		}

		if (address.street[1]) {
			result.push(
				<span key="street-line-2">
					{`${address.street[1]} `}
					<br />
				</span>,
			);
		}
	}

	if (address.city || (address.region && address.region.region) || address.postcode) {
		const city = address.city ? `${address.city} ` : '';
		const region = (address?.region?.region ? `${address.region.region} ` : '')
			|| (address?.region?.label ? `${address?.region?.label} ` : '');
		const postcode = address.postcode ? address.postcode : '';

		result.push(
			<span key="city-region-postcode">
				{`${city} ${region} ${postcode}`}
				<br />
			</span>,
		);
	}

	if (address.country_id || address?.country?.code) {
		const countryCode = address.country_id || address?.country?.code;
		const country = countries.filter((item) => item.two_letter_abbreviation === countryCode).shift();

		if (country) {
			result.push(
				<span key="country">
					{country.full_name_locale}
					<br />
				</span>,
			);
		}
	}

	if (address.telephone) {
		result.push(<span key="telephone">{address.telephone}</span>);
	}

	return (
		<div style={{ border: '2px solid red', marginBottom: 20 }}>
			{label}
			<button
				type="button"
				style={{ marginRight: 20 }}
			>
				edit
			</button>
			<button
				type="button"
				onClick={deleteCustomerAddressMutation}
			>
				delete
			</button>
			{result}
		</div>
	);
};

export { AddressBookItem };

AddressBookItem.defaultProps = {
	address: {},
	serialNumber: 0,
};

AddressBookItem.propTypes = {
	address: PropTypes.oneOfType([PropTypes.object]),
	serialNumber: PropTypes.number,
};
