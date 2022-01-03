/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-comment-textnodes */
import parser, { domToReact } from 'html-react-parser';
import { Link } from 'elements/Link';
import attributesToProps from 'html-react-parser/lib/attributes-to-props';
import WidgetsRenderer from '../components/widgets/WidgetsRenderer';

const Parser = ({ content }) => {
	const processLink = ({ attribs, children }) => {
		const { href, ...attrs } = attribs;

		if (href) {
			const isAbsoluteUrl = (value) => new RegExp(
				'^(?:[a-z]+:)?//', 'i',
			).test(value);
			const isSpecialLink = (value) => new RegExp(
				'^(sms|tel|mailto):', 'i',
			).test(value);

			if (!isAbsoluteUrl(href) && !isSpecialLink(href)) {
				return (
					<Link {...attributesToProps({ ...attrs, to: href })}>
						{domToReact(children, parserOptions)}
					</Link>
				);
			}
		}
	};

	const processWidget = ({
		children: [{ data: widgetJson }],
		attribs: {
			'data-widget-type': widgetType,
		},
	}) => {
		try {
			const widgetContent = JSON.parse(widgetJson);

			return (
				<WidgetsRenderer
					widgetContent={widgetContent}
					widgetType={widgetType}
				/>
			);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(
				'We cannot parse widget data as JSON while processing HTML Content. '
                + 'Content is: ',
				content,
				'Widget type is: ',
				widgetType,
				'Error: ',
				e,
			);
			return (<></>);
		}
	};

	const parserOptions = {
		replace: (domNode) => {
			const { name, attribs, children } = domNode;

			if (name === 'a') {
				return processLink(domNode);
			}

			// it is not valid to put a div inside a P tag,
			// so anytime when we have only one children inside a P tag
			// and this children is widget script, so replace whole P tag
			// with widget
			// the widget could be wrapped inside a P tag because somebody
			// has pressed Enter key in wysiwyg and
			// it automatically wrapped widget inside a P tag
			if ((name === 'p')
                && (children)
                && (children.length === 1)
                && (children[0].type === 'script')
                && (children[0].attribs.type === 'text/widget')
			) {
				return processWidget(children[0]);
			}

			// but widget can be placed not only inside P, for example if
			// the content is edited without wysiwyg
			if ((name === 'script')
                && (attribs.type === 'text/widget')
                && (children)
                && (children.length)
                && (children[0].type === 'text')
			) {
				return processWidget(domNode);
			}
		},
	};

	return parser(content, parserOptions);
};

export default Parser;
