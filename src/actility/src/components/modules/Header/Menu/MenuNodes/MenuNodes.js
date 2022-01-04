import PropTypes from 'prop-types';

import { MenuNodesSecond } from './MenuNodesSecond';
import { MenuNodesThird } from './MenuNodesThird';

import css from '../Menu.module.scss';

const MenuNodes = (
	{
		data,
	},
) => {
	if (!data?.length) {
		return null;
	}

	const isThird = !!data?.find?.((item) => item?.nodes?.length > 0 && item?.type === 'wrapper');
	const OutputComponent = isThird ? MenuNodesThird : MenuNodesSecond;

	return (
		<>
			<div className={css.overlay} />
			<OutputComponent data={data} />
		</>
	);
};

MenuNodes.defaultProps = {
	data: null,
};

MenuNodes.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]),
};

export { MenuNodes };
