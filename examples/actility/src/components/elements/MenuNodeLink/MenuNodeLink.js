import PropTypes from 'prop-types';

import { Link } from 'elements/Link';
import { useRouter } from 'hooks';

import { useMenuNodeLinkContext } from './MenuNodeLinkProvider';

const MenuNodeLink = ({ node, className, children }) => {
	const context = useMenuNodeLinkContext();

	const { getMenuNodeUrl } = useRouter();
	const url = getMenuNodeUrl(node);

	const onClickHandler = () => {
		context?.onLinkClick?.();
	};

	return (
		url?.isExternal ? (
			// eslint-disable-next-line react/jsx-no-target-blank
			<a
				target={url?.isTargetBlank ? '_blank' : null}
				className={className}
				onClick={onClickHandler}
				rel={url?.isTargetBlank ? 'noreferrer noopener' : null}
				href={url?.to}
			>
				{children}
			</a>
		) : (
			<Link
				target={url?.isTargetBlank ? '_blank' : null}
				rel={url?.isTargetBlank ? 'noreferrer noopener' : null}
				to={url?.to || '/'}
				onClick={onClickHandler}
				className={className}
			>
				{children}
			</Link>
		)
	);
};

MenuNodeLink.defaultProps = {
	node: {},
	className: null,
	children: null,
};

MenuNodeLink.propTypes = {
	node: PropTypes.oneOfType([PropTypes.object]),
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { MenuNodeLink };
