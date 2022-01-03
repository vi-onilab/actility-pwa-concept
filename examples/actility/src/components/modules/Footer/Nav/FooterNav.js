import { useFooterMenuQuery } from 'hooks';

import FooterGroup from '../Group';
import css from './FooterNav.module.scss';

const FooterNav = () => {
	const { data } = useFooterMenuQuery();

	return (
		<div className={css.footerNav}>
			{data?.nodes?.map((node, index) => (
				<FooterGroup
					key={node?.nodeId || index}
					node={node}
				/>
			))}
		</div>
	);
};

export default FooterNav;
