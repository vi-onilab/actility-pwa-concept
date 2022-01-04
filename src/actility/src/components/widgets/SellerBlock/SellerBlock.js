import { Icon } from 'elements/Icon';
import sellerBlockRightImg from 'assets/img/seller-get-bg-mobile.png';
import sellerBlockRightImgLarge from 'assets/img/seller-get-bg.png';
import { Image } from 'elements/Image';

import styles from './SellerBlock.scss';

// that component integrated as cmsBlock: http://backend.preprod.thingpark.com/admin/cms/block/edit/block_id/356/key/b0daa67be3b03b2086576646c831b6b5815cfe0b063e7baa6624edfb0518a900/

const SellerBlock = () => (
	<section className={styles.sellerBlock}>
		<div className={styles.sellerBlock__left}>
			<div className="section-title">
				Increase your sales and become a seller
			</div>
			<div className={styles.sellerList}>
				<div className={styles.sellerItem}>
					<span className={styles.sellerItem__icon}>
						<Icon name="moreVisibility" />
					</span>
					<div className={styles.sellerItem__title}>Get more Visibility</div>
				</div>
				<div className={styles.sellerItem}>
					<span className={styles.sellerItem__icon}>
						<Icon name="qualified" />
					</span>
					<div className={styles.sellerItem__title}>Qualified Traffic</div>
				</div>
				<div className={styles.sellerItem}>
					<span className={styles.sellerItem__icon}>
						<Icon name="sellHours" />
					</span>
					<div className={styles.sellerItem__title}>Sell in 24&nbsp;hours</div>
				</div>
				<div className={styles.sellerItem}>
					<span className={styles.sellerItem__icon}>
						<Icon name="secureTransaction" />
					</span>
					<div className={styles.sellerItem__title}>Secure transactions</div>
				</div>
			</div>
			<div className={styles.sellerBlock__btns}>
				<button type="button" className="button">
					<span className="button__text">Become a seller</span>
				</button>
				<button type="button" className="button typeSecond">
					<span className="button__text">How to do it</span>
				</button>
			</div>
		</div>
		<div className={styles.sellerBlock__right}>
			<div className="section-title">Get your hardware certified</div>
			<div className={styles.sellerBlock__subtitle}>
				Dont miss your chance to make your own business in the IoT area
			</div>
			<div className={styles.sellerBlockRight__img}>
				<picture>
					<source srcSet={sellerBlockRightImgLarge} media="(min-width: 599px)" />
					<Image src={sellerBlockRightImg} alt="" />
				</picture>
			</div>
		</div>
	</section>
);

export default SellerBlock;
