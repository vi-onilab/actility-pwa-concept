import { createElement } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { UrlResolverQuery } from 'schemas';
import { DEFAULT_ROUTER_PATHS } from 'hooks';

const disabledPrefetch = new RegExp(`^(${DEFAULT_ROUTER_PATHS.map((path) => path.replace(/\/:[a-z]+/igm, '')).join('|')})`);

const Link = (
	{
		to,
		activeClassName,
		className,
		children,
		onClick,
		scroll,
		prefetch,
	},
) => {
	const [urlResolverQuery, { data: { urlResolver = null } = {} }] = useLazyQuery(UrlResolverQuery, {
		variables: {
			url: to,
		},
		skip: true,
	});

	return (
		createElement(
			activeClassName ? NavLink : RouterLink,
			{
				className,
				to,
				onMouseEnter: () => {
					if (prefetch && !urlResolver && !disabledPrefetch.test(to)) {
						urlResolverQuery();
					}
				},
				onClick: (e) => {
					if (scroll) {
						window.scrollTo({ top: 0 });
					}

					onClick?.(e);
				},
			},
			children,
		)
	);
};

Link.propTypes = {
	to: PropTypes.string,
	activeClassName: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	scroll: PropTypes.bool,
	prefetch: PropTypes.bool,
};

Link.defaultProps = {
	to: null,
	activeClassName: null,
	className: null,
	onClick: null,
	scroll: true,
	prefetch: true,
};

export { Link };
