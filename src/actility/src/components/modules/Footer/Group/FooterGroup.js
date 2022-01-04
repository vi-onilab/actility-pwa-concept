import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { MenuNodeLink } from 'elements/MenuNodeLink';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';

import css from './FooterGroup.module.scss';

const FooterGroup = ({ node }) => {
	const [isActive, setActive] = useState(0);

	return (
		<div className={classNames(css.footerNav__block, isActive && css.active)}>
			<button
				type="button"
				onClick={() => setActive((prev) => !prev)}
				className={css.footerNav__title}
			>
				{node?.title}
				<Icon src={ChevronArrowRightIcon} className={css.footerNav__icon} />
			</button>
			<ul className={css.footerNav__list}>
				{node.nodes?.map((item, index) => (
					<li key={item?.nodeId || index}>
						<MenuNodeLink node={item}>{item?.title}</MenuNodeLink>
					</li>
				))}
			</ul>
		</div>
	);
};

FooterGroup.propTypes = {
	node: PropTypes.objectOf(PropTypes.any),
};

FooterGroup.defaultProps = {
	node: null,
};

export default FooterGroup;
