import { memo, useState } from 'react';
import { Icon } from 'elements/Icon';
import { Logo } from 'elements/Logo';
import { Link } from 'elements/Link';
import { BurgerIcon } from 'icons';
import { useRouter } from 'hooks';
import { Container } from 'elements/Container';
import { MediaBreakpointDown } from 'providers';

import { BurgerMenu } from './BurgerMenu';
import { HeaderTop } from '../HeaderTop';
import Menu from './Menu';
import UserPanel from './UserPanel';
import styles from './Header.module.scss';

const Header = memo(() => {
	const { getHomeUrl } = useRouter();
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<header className={styles.header}>
				<HeaderTop />
				<div className={styles.headerBottom}>
					<Container className={styles.headerBottomWrapper}>
						<button type="button" className={styles.burgerBtn} onClick={() => setOpen(true)}>
							<Icon src={BurgerIcon} className={styles.burgerBtnIcon} />
						</button>
						<Logo
							as={Link}
							asProps={{ to: getHomeUrl() }}
							className={styles.logo}
						/>
						<Menu />
						<UserPanel />
					</Container>
				</div>
			</header>

			{isOpen && (
				<MediaBreakpointDown name="lg">
					<BurgerMenu onRequestClose={() => setOpen(false)} />
				</MediaBreakpointDown>
			)}
		</>
	);
});

export { Header };
