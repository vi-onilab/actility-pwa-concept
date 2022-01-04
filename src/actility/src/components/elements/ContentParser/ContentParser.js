import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import parser from 'html-react-parser';
import { VideoInjector } from 'elements/VideoInjector';

import {
	ContentParserCaptionTableInTable,
	ContentParserStyle,
	ContentParserTable,
	ContentParserTabTable,
} from './elements';
import css from './ContentParser.module.scss';

const findChild = (node, selector) => {
	if (node?.children) {
		const item = node.children?.find?.(selector);

		return item ?? node.children?.reduce((result, current) => {
			if (!result) {
				return findChild(current, selector);
			}

			return result;
		}, null);
	}

	return null;
};

const ContentParser = (
	{
		html,
		className,
	},
) => (
	<ContentParserStyle
		className={classNames(css.wrapper, className)}
	>
		{html?.length > 0 && parser(html, {
			// eslint-disable-next-line consistent-return
			replace(node) {
				if (node.type === 'tag') {
					if (node.name === 'iframe' && node?.attribs?.src) {
						return (
							<VideoInjector src={node?.attribs?.src} />
						);
					}

					if (node.name === 'table') {
						if (!node.parent && findChild(node, ({ name }) => name === 'table')) {
							return (
								<ContentParserCaptionTableInTable data={node} />
							);
						}

						const style = node.attribs?.style;
						if (style?.includes('left') || style?.includes('auto')) {
							return (
								<ContentParserTabTable data={node} />
							);
						}

						return (
							<ContentParserTable data={node} />
						);
					}
				}
			},
		})}
	</ContentParserStyle>
);

ContentParser.propTypes = {
	html: PropTypes.string,
	className: PropTypes.string,
};

ContentParser.defaultProps = {
	html: null,
	className: null,
};

export { ContentParser };
