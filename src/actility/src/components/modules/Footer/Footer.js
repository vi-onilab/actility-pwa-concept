import { memo } from 'react';
import logo from 'assets/img/footerLogo.png';
import signatureHeart from 'assets/img/signatureHeart.png';
import { Icon } from 'elements/Icon';
import { Container } from 'elements/Container';
import {
	CertificateIcon, ConversationIcon, CreditCardIcon, EarthIcon,
} from 'icons';

import { Image } from 'elements/Image';
import ImageVisa from '../../../assets/images/visa.png';
import ImageMastercard from '../../../assets/images/mastercard.png';
import ImageSepa from '../../../assets/images/sepa.png';

import ImageWire from '../../../assets/images/wire.png';
import styles from './Footer.module.scss';
import FooterNav from './Nav';
import { SocialNetworks } from '../SocialNetworks';
import { SubscribeFormNewsletter } from '../Subscribe';

const Footer = memo(() => (
	<footer className={styles.footer}>
		<div className={styles.footerTop}>
			<Container>
				<div className={styles.footer__wrapper}>
					<a href="/" className={styles.footer__logo}>
						<Image src={logo} alt="Logo" />
					</a>
					<div className={styles.footerAbout}>
						<div className={styles.footerAbout__item}>
							<Icon src={CreditCardIcon} className={styles.footerAboutItemIcon} />
							<span className={styles.footerAboutItem__text}>Secure Payment</span>
						</div>
						<div className={styles.footerAbout__item}>
							<Icon src={EarthIcon} className={styles.footerAboutItemIcon} />
							<span className={styles.footerAboutItem__text}>Worldwide shipping</span>
						</div>
						<div className={styles.footerAbout__item}>
							<Icon src={CertificateIcon} className={styles.footerAboutItemIcon} />
							<span className={styles.footerAboutItem__text}>Certified Solutions</span>
						</div>
						<div className={styles.footerAbout__item}>
							<Icon src={ConversationIcon} className={styles.footerAboutItemIcon} />
							<span className={styles.footerAboutItem__text}>Customer Service 5/7</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
		<div className={styles.footerCenter}>
			<Container>
				<div className={styles.footer__wrapper}>
					<div className={styles.footerConnection}>
						<SubscribeFormNewsletter />
						<SocialNetworks />
					</div>
					<FooterNav />
				</div>
			</Container>
		</div>
		<div className={styles.footerBottom}>
			<Container>
				<div className={styles.footer__wrapper}>
					<div className={styles.footerBottom__left}>
						<a href="/">Actility’s property all rights reserved *</a>
						<a href="/">Participation Policy</a>
					</div>
					<div className={styles.footerBottom__right}>
						<ul className={styles.paymentsList}>
							<li className={styles.paymentsList__item}>
								<Image src={ImageVisa} alt="Visa" />
							</li>
							<li className={styles.paymentsList__item}>
								<Image src={ImageMastercard} alt="MasterCard" />
							</li>
							<li className={styles.paymentsList__item}>
								<Image src={ImageSepa} alt="Sepa" />
							</li>
							<li className={styles.paymentsList__item}>
								<Image src={ImageWire} alt="Wire" />
							</li>
						</ul>
						<div className={styles.footerSignature}>
							<span>Made with</span>
							<Image src={signatureHeart} alt="heart" />
							<span>by Onilab</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	</footer>
));

export { Footer };
