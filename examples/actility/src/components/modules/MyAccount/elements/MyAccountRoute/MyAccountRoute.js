import {
	Redirect, Route, Switch,
} from 'react-router-dom';
import { useCustomerData, useRouter } from 'hooks';
import {
	AccountInformation,
	AddressBook,
	Messages,
	Orders,
	Quotations,
	Reviews,
	SavedCards, SubscriptionHistory,
	Wishlist,
} from 'modules/MyAccount';
import { $auth } from 'models';

const MyAccountRoute = () => {
	const {
		getWishlistPath,
		getMyAccountPath,
		getMyOrdersPath,
		getMyAddressesPath,
		getMySavedCardsPath,
		getMyReviewsPath,
		getMyMessagesPath,
		getMyQuotationsPath,
		getMySubscriptionHistoryPath,
	} = useRouter();

	const { customer, loading } = useCustomerData();

	return (
		<Switch>
			{
				$auth.isToken && (
					<>
						<Route exact path={getMyAccountPath()}>
							<AccountInformation
								customer={customer}
								loading={loading}
							/>
						</Route>
						<Route exact path={getMyAddressesPath()}>
							<AddressBook
								customer={customer}
								loading={loading}
							/>
						</Route>
						<Route path={getMySavedCardsPath()}>
							<SavedCards />
						</Route>
						<Route exact path={getWishlistPath()}>
							<Wishlist />
						</Route>
						<Route exact path={getMyOrdersPath()}>
							<Orders />
						</Route>
						<Route exact path={getMyReviewsPath()}>
							<Reviews />
						</Route>
						<Route exact path={getMyMessagesPath()}>
							<Messages />
						</Route>
						<Route exact path={getMyQuotationsPath()}>
							<Quotations />
						</Route>
						<Route exact path={getMySubscriptionHistoryPath()}>
							<SubscriptionHistory />
						</Route>
					</>
				)
			}
			{
				!$auth.isToken && (
					<Redirect to="/" />
				)
			}
		</Switch>
	);
};

export { MyAccountRoute };
