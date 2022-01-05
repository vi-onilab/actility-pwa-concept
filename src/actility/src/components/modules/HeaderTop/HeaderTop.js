import { memo } from 'react';
import { Icon } from 'elements/Icon';
import { CommentIcon, InfoIcon, QuestionIcon } from 'icons';
import { Container } from 'elements/Container';

import { HeaderTopStoreSwitcher } from './StoreSwitcher';
import { HeaderTopAuth } from './TopAuth';
import css from './HeaderTop.module.scss';

const HeaderTop = memo(() => (
	<div className={css.headerTop}>
		<Container className={css.headerTopWrapper}>
			<div className={css.headerInfo}>
				<div className={css.headerInfoItem}>
					<Icon src={InfoIcon} className={css.headerInfoItemIcon} />
					<div className={css.headerInfoItemText}>How to become a seller</div>
				</div>
				<div className={css.headerInfoItem}>
					<Icon src={QuestionIcon} className={css.headerInfoItemIcon} />
					<div className={css.headerInfoItemText}>FAQ</div>
				</div>
				<div className={css.headerInfoItem}>
					<Icon src={CommentIcon} className={css.headerInfoItemIcon} />
					<div className={css.headerInfoItemText}>Contact us</div>
				</div>
			</div>
			<div className={css.headerTopRight}>
				<div className={css.headerTopUser}>
					<HeaderTopAuth />
					<HeaderTopStoreSwitcher />
				</div>
			</div>
		</Container>
	</div>
));

export { HeaderTop };
