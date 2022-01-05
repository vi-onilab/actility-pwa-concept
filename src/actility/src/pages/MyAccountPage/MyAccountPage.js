import { memo } from 'react';
import { MyAccountBanner, MyAccountRoute, MyAccountSidebar } from 'modules/MyAccount';

const MyAccountPage = () => (
	<>
		<MyAccountBanner />
		<MyAccountSidebar />
		<MyAccountRoute />
	</>
);

export default memo(MyAccountPage);
