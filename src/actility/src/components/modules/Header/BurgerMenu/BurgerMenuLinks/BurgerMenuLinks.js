import styles from '../../Header.module.scss';

const BurgerMenuLinks = () => (
	<div className={styles.burgerMenu__block}>
		<ul className={styles.mainNav__list}>
			<li className={styles.mainNav__item}>
				<a
					href="/"
					className={styles.mainNav__link}
				>
					How to become a seller
				</a>
			</li>
			<li className={styles.mainNav__item}>
				<a
					href="/"
					className={styles.mainNav__link}
				>
					FAQ
				</a>
			</li>
			<li className={styles.mainNav__item}>
				<a
					href="/"
					className={styles.mainNav__link}
				>
					Contact us
				</a>
			</li>
		</ul>
	</div>
);

BurgerMenuLinks.defaultProps = {};

BurgerMenuLinks.propTypes = {};

export { BurgerMenuLinks };
