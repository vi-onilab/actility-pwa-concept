import { Container } from 'elements/Container';

import { Icon } from 'elements/Icon';

import styles from './Benefites.scss';
// that component integrated as cmsBlock: http://backend.preprod.thingpark.com/admin/cms/block/edit/block_id/352/key/b0daa67be3b03b2086576646c831b6b5815cfe0b063e7baa6624edfb0518a900/
const Benefites = () => (
	<section className={styles.benefites}>
		<Container>
			<div className={styles.benefites__list}>
				<div className={`${styles.benefites__item} ${styles.verticalRepresented}`}>
					<div className={styles.benefites__icon}>
						<Icon name="benefitesRepresented" />
					</div>
					<div className={styles.benefites__text}>+10 IoT verticals&nbsp;represented</div>
				</div>
				<div className={`${styles.benefites__item} ${styles.tp_connected}`}>
					<div className={styles.benefites__icon}>
						<Icon name="benefitesConnected" />
					</div>
					<div className={styles.benefites__text}>
						Access to a selection of ThingPark&nbsp;Connected devices
					</div>
				</div>
				<div className={`${styles.benefites__item} ${styles.productShipped}`}>
					<div className={styles.benefites__icon}>
						<Icon name="benefitesShipped" />
					</div>
					<div className={styles.benefites__text}>Products shipped&nbsp;worldwide</div>
				</div>
				<div className={`${styles.benefites__item} ${styles.kitsStart}`}>
					<div className={styles.benefites__icon}>
						<Icon name="benefitesBox" />
					</div>
					<div className={styles.benefites__text}>
						Ready to use kits to&nbsp;start&nbsp;your IoT project
					</div>
				</div>
				<div className={`${styles.benefites__item} ${styles.sertDevices}`}>
					<div className={styles.benefites__icon}>
						<Icon name="benefitesLorawan" />
					</div>
					<div className={styles.benefites__text}>
						Varied catalog of LoRaWAN certified&nbsp;devices
					</div>
				</div>
			</div>
		</Container>
	</section>
);

export default Benefites;
