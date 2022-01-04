import { NavList } from 'elements/NavList';

import { BurgerMenuPreferencesCountry } from './BurgerMenuPreferencesCountry';
import { BurgerMenuPreferencesLanguage } from './BurgerMenuPreferencesLanguage';
import { BurgerMenuPreferencesCurrency } from './BurgerMenuPreferencesCurrency';

import styles from '../../Header.module.scss';

const BurgerMenuPreferences = () => (
	<div className={styles.burgerMenu__block}>
		<NavList>
			<BurgerMenuPreferencesCountry />
			<BurgerMenuPreferencesLanguage />
			<BurgerMenuPreferencesCurrency />
		</NavList>
	</div>
);

BurgerMenuPreferences.defaultProps = {};

BurgerMenuPreferences.propTypes = {};

export { BurgerMenuPreferences };
