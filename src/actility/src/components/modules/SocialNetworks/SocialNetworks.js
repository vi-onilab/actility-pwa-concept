import parser from 'html-react-parser';
import { useSocialNetworksQuery } from 'hooks';

import css from './SocialNetworks.module.scss';

const SocialNetworks = () => {
	const { data } = useSocialNetworksQuery();

	return (
		data?.items?.[0]?.content ? (
			parser(data?.items?.[0]?.content, {
				replace({ type, attribs }) {
					if (type === 'tag' && 'data-type' in attribs) {
						switch (attribs['data-type']) {
						case 'wrapper':
							attribs.class = css.social;
							break;
						case 'item':
							attribs.class = css.socialItem;
							break;
						default: break;
						}
					}
				},
			})
		) : null
	);
};

export { SocialNetworks };
