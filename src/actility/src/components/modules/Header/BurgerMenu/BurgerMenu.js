import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { CloseMenuIcon } from 'icons';
import { Logo } from 'elements/Logo';

import css from '../Header.module.scss';
import { BurgerMenuAuth } from './BurgerMenuAuth';
import { BurgerMenuPreferences } from './BurgerMenuPreferences';
import { BurgerMenuLinks } from './BurgerMenuLinks';
import { BurgerMenuNodes } from './BurgerMenuNodes';

const BurgerMenu = ({ onRequestClose }) => (
	<div className={css.burgerMenu}>
		<div className={css.burgerMenu__header}>
			<button
				onClick={onRequestClose}
				type="button"
				className={css.burgerMenu__close}
			>
				<Icon src={CloseMenuIcon} className={css.burgerMenu__closeIcon} />
			</button>
			<Logo className={css.logo} />
		</div>
		<BurgerMenuAuth />
		<BurgerMenuNodes onRequestClose={onRequestClose} />
		<BurgerMenuLinks />
		<BurgerMenuPreferences />
	</div>
);

BurgerMenu.defaultProps = {
	onRequestClose: null,
};

BurgerMenu.propTypes = {
	onRequestClose: PropTypes.func,
};

export { BurgerMenu };
