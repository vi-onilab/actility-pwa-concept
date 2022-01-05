import { useAuthContext } from 'modules/Auth';
import { $auth } from 'models';
import { Icon } from 'elements/Icon';
import {
	ChevronArrowRightIcon, ConsoleIcon, SellerListIcon, TopRightArrowIcon,
} from 'assets/icons';
import { Link } from 'react-router-dom';
import { CustomerVerificationBanner } from 'modules/Customer/VerificationBanner';

import styles from '../../Header.module.scss';

const BurgerMenuAuth = () => {
	const isToken = $auth.useIsToken();
	const {
		onOpenLogin,
		onOpenRegister,
	} = useAuthContext();

	return (
		<>
			{isToken && <CustomerVerificationBanner />}
			<div className={styles.burgerMenu__block}>
				{isToken
					? (
						<div className={`${styles.userRegisteredUser} ${''}`}>
							<div className={styles.userRegisteredUser__icon}>
								<Icon name="user" />
							</div>
							<div className={styles.userRegisteredUser__info}>
								<div className={styles.userRegisteredUser__name}>Pascal Chove</div>
								<div className={styles.userRegisteredUser__email}>pascal_сhove1963@gmail.com</div>
							</div>
						</div>
					)
					: (
						<div className={styles.userPanel}>
							<button
								type="button"
								onClick={onOpenRegister}
								className={styles.btnSignUp}
							>
								Sign up
							</button>
							<button
								type="button"
								onClick={onOpenLogin}
								className={styles.btnLogin}
							>
								Login
							</button>
						</div>
					)}
			</div>
			{isToken
			&& (
				<div className={styles.burgerMenu__block}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<Link to={null} className={styles.mainNav__item}>
						<div className={styles.mainNav__link}>
							<Icon src={SellerListIcon} className={styles.mainNav__icon} />
							<p className={styles.mainNav__title}>Sell on ThingPark Market</p>
							<Icon src={TopRightArrowIcon} className={styles.mainNav__linkArrow} />
						</div>
					</Link>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<Link to={null} className={styles.mainNav__item}>
						<div className={styles.mainNav__link}>
							<Icon src={ConsoleIcon} className={styles.mainNav__icon} />
							<p className={styles.mainNav__title}>My Microsite</p>
							<Icon src={ChevronArrowRightIcon} className={styles.mainNav__linkArrow} />
						</div>
					</Link>
				</div>
			)}
		</>
	);
};

export { BurgerMenuAuth };
