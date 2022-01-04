import PropTypes from 'prop-types';
import { AddressBookItem } from 'modules/MyAccount';

const AddressBookList = (
	{
		addresses,
	},
) => {
	const shippingAndBilling = [];
	const additional = [];

	addresses.map((item) => {
		if (item.default_billing || item.default_shipping) {
			shippingAndBilling.push(item);
			return true;
		}

		additional.push(item);
		return true;
	});

	return (
		<>
			{
				!!shippingAndBilling.length && (
					<>
						<div>Default address (es)</div>
						{
							shippingAndBilling.map((address, index) => (
								<AddressBookItem
									key={address.id}
									address={address}
									serialNumber={index + 1}
								/>
							))
						}
					</>
				)
			}
			{
				!!additional.length && (
					<>
						<div>Additional address (es)</div>
						{
							additional.map((address, index) => (
								<AddressBookItem
									key={address.id}
									address={address}
									serialNumber={index + 1}
								/>
							))
						}
					</>
				)
			}
		</>
	);
};

export { AddressBookList };

AddressBookList.defaultProps = {
	addresses: [],
};

AddressBookList.propTypes = {
	addresses: PropTypes.oneOfType([PropTypes.array]),
};
