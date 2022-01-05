import { useCustomerLogout } from 'hooks';
import { MyAccountNavigation } from 'modules/MyAccount';

const MyAccountSidebar = () => {
	const onCustomerLogout = useCustomerLogout();

	const onLogout = async () => {
		await onCustomerLogout();
	};

	return (
		<>
			<MyAccountNavigation />
			<button
				type="button"
				onClick={onLogout}
			>
				Logout
			</button>
		</>
	);
};

export { MyAccountSidebar };
