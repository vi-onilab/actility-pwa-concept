import { useCustomerData } from 'hooks';

const MyAccountBanner = () => {
	const { customer, loading } = useCustomerData();

	if (loading || !customer?.email) {
		return 'MyAccountBannerPlaceholder';
	}

	return (
		<div>
			<div>
				Hi,
				{`${customer?.firstname} ${customer?.lastname}`}
			</div>
			<div>
				{customer?.email}
			</div>
		</div>
	);
};

export { MyAccountBanner };
