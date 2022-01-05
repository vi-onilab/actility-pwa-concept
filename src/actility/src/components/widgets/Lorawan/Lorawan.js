import { Container } from 'elements/Container';

import { Icon } from 'elements/Icon';
import lorawanVideoImg from 'img/lorawan-video.jpg';
import { Image } from 'elements/Image';

import styles from './Lorawan.scss';
// that component integrated as cmsBlock: http://backend.preprod.thingpark.com/admin/cms/block/edit/block_id/353/key/b0daa67be3b03b2086576646c831b6b5815cfe0b063e7baa6624edfb0518a900/
const Lorawan = () => (
	<section className={styles.lorawan}>
		<Container>
			<div className={styles.lorawan__wrapper}>
				<div className="section-top">
					<h2 className="section-title">LoRaWAN Technology</h2>
				</div>
				<div className={styles.lorawan__video}>
					<Image src={lorawanVideoImg} alt="video" />
					<button type="button" className={styles.playVideo}>
						<Icon name="play" />
					</button>
				</div>
				<div className={styles.lorawan__content}>
					<h2 className="section-title">LoRaWAN Technology</h2>
					<div className={styles.lorawan__contentText}>
						<b>LoRaWAN is the leading Low-Power Wide Area Networking (LPWAN) technology.</b>
						It&nbsp;is the essential building block of Massive
						IoT thanks to its low&nbsp;-&nbsp;power,
						long&nbsp;-&nbsp;range, low&nbsp;-&nbsp;cost,
						highly&nbsp;-&nbsp;secure and scalable nature.
						Being operated in unlicensed band and based on an open standard published
						by the LoRa Alliance makes it the prime choice for an ever&nbsp;-&nbsp;growing
						list of public and private IoT networks...
						<a href="/" className="readMore">+&nbsp;Read&nbsp;more</a>
					</div>
					<div className={styles.lorawanList}>
						<div className={styles.lorawanList__title}>Also we have</div>
						<div className={styles.lorawanList__wrapper}>
							<div className={styles.lorawanList__item}>
								<div className={styles.lorawanList__itemIcon}>
									<Icon name="lorawanIcon" />
								</div>
								<div className={styles.lorawanList__itemContent}>
									<div className={styles.lorawanList__itemTitle}>NB-IoT</div>
									<div className={styles.lorawanList__itemText}>
										is a new cellular radio access technolog
										<a href="/" className="readMore">+&nbsp;Read&nbsp;more</a>
									</div>
								</div>
							</div>
							<div className={styles.lorawanList__item}>
								<div className={styles.lorawanList__itemIcon}>
									<Icon name="lorawanIconSecond" />
								</div>
								<div className={styles.lorawanList__itemContent}>
									<div className={styles.lorawanList__itemTitle}>LTE-M</div>
									<div className={styles.lorawanList__itemText}>
										is the simplified industry term for
										<a href="/" className="readMore">+&nbsp;Read&nbsp;more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</section>
);

export default Lorawan;
