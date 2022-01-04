import { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalPortal } from 'elements/Modal';
import { AddNewAddress, AddressBookEmpty, AddressBookList } from 'modules/MyAccount';

const AddressBook = (
	{
		customer,
		loading,
	},
) => {
	const [isVisibleAddNewAddressModal, setVisibleAddNewAddressModal] = useState(false);

	const onOpenAddNewAddressModalHandler = () => {
		setVisibleAddNewAddressModal(true);
	};

	const onCloseAddNewAddressModalHandler = () => {
		setVisibleAddNewAddressModal(false);
	};

	if (loading || !customer?.email) {
		return 'AddressBookPlaceholder';
	}

	return (
		<>
			{
				customer?.addresses?.length ? (
					<>
						<AddressBookList addresses={customer.addresses} />
						<button type="button" onClick={onOpenAddNewAddressModalHandler}>Add new</button>
					</>
				) : (
					<AddressBookEmpty onOpenAddNewHandler={onOpenAddNewAddressModalHandler} />
				)
			}
			<ModalPortal
				isOpen={isVisibleAddNewAddressModal}
				onDismiss={onCloseAddNewAddressModalHandler}
			>
				<AddNewAddress onCloseHandler={onCloseAddNewAddressModalHandler} />
			</ModalPortal>
		</>
	);
};

export { AddressBook };

AddressBook.defaultProps = {
	customer: {},
	loading: false,
};

AddressBook.propTypes = {
	customer: PropTypes.oneOfType([PropTypes.object]),
	loading: PropTypes.bool,
};
