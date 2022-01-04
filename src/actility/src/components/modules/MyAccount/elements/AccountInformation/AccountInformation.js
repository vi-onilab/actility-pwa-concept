import PropTypes from 'prop-types';
import { ChangeEmail, ChangePassword, SubscribeNewsletters } from 'modules/MyAccount';

export const AccountInformation = (
	{
		customer,
		loading,
	},
) => {
	if (loading || !customer?.email) {
		return 'AccountInformationPlaceholder';
	}

	return (
		<>
			<ChangeEmail customerEmail={customer.email} />
			<ChangePassword customerEmail={customer.email} />
			<SubscribeNewsletters customerEmail={customer.email} isSubscribed={customer.is_subscribed} />
		</>
	);
};

export default { AccountInformation };

AccountInformation.defaultProps = {
	customer: {},
	loading: false,
};

AccountInformation.propTypes = {
	customer: PropTypes.oneOfType([PropTypes.object]),
	loading: PropTypes.bool,
};
