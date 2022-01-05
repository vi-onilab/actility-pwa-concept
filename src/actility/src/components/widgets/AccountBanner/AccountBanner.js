import { Container } from 'elements/Container';

import accountBannerLogo from 'img/account-banner-logo.png';
import { Image } from 'elements/Image';

import styles from './AccountBanner.scss';
// that component integrated as cmsBlock: http://backend.preprod.thingpark.com/admin/cms/block/edit/block_id/354/key/b0daa67be3b03b2086576646c831b6b5815cfe0b063e7baa6624edfb0518a900/
const AccountBanner = () => (
	<div className={styles.accountBanner}>
		<Container>
			<div className={styles.accountBanner__block}>
				<div className={styles.accountBanner__text}>
					Create an Account in ThingPark Community and&nbsp;connect
					<span> up to 3 gateways and 50 devices for free!</span>
				</div>
				<div className={styles.accountBanner__logo}>
					<Image src={accountBannerLogo} alt="logo banner" />
				</div>
			</div>
		</Container>
	</div>
);

export default AccountBanner;
