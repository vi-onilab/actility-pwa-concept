import PropTypes from 'prop-types';

const AddressBookEmpty = (
	{
		onOpenAddNewHandler,
	},
) => (
	<div>
		<div>
			There are currently no addresses
			added to your profile.
		</div>
		<button type="button" onClick={onOpenAddNewHandler}>Add new</button>
	</div>
);

export { AddressBookEmpty };

AddressBookEmpty.propTypes = {
	onOpenAddNewHandler: PropTypes.func,
};

AddressBookEmpty.defaultProps = {
	onOpenAddNewHandler: null,
};
