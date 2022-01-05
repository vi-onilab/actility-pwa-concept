import PropTypes from 'prop-types';
import { domToReact } from 'html-react-parser';
import { VideoInjector } from 'elements/VideoInjector';

import css from './ContentParserTable.module.scss';

const ContentParserTable = (
	{
		data,
	},
) => (
	<div className={css.wrapper}>
		{data && domToReact([data], {
			// eslint-disable-next-line consistent-return
			replace(node) {
				if (node.type === 'tag' && node.name === 'iframe' && node?.attribs?.src) {
					return (
						<div className={css.video}>
							<VideoInjector src={node?.attribs?.src} />
						</div>
					);
				}
			},
		})}
	</div>
);

ContentParserTable.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

ContentParserTable.defaultProps = {
	data: {},
};

export { ContentParserTable };
