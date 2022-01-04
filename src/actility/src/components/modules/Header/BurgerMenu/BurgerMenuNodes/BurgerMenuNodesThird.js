import PropTypes from 'prop-types';
import { Image } from 'elements/Image';

import css from './BurgerMenuNodes.module.scss';

const BurgerMenuNodesThird = ({ data, onChangeRequest }) => (
	<div className={css.columns}>
		{data?.nodes?.map((node, index) => (
			<div className={css.column} key={node?.nodeId || index}>
				{node?.nodes?.map((childNode, childIndex) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
					<div
						key={childNode?.nodeId || childIndex}
						onClick={() => onChangeRequest(childNode)}
						className={css.item}
					>
						{childNode?.content?.categoryWidgetSvgIcon && (
							<Image
								src={childNode?.content?.categoryWidgetSvgIcon}
								alt={childNode?.title}
							/>
						)}
						{childNode?.title}
					</div>
				))}
			</div>
		))}
	</div>
);

BurgerMenuNodesThird.defaultProps = {
	data: [],
};

BurgerMenuNodesThird.propTypes = {
	data: PropTypes.objectOf(PropTypes.object),
	onChangeRequest: PropTypes.func.isRequired,
};

export { BurgerMenuNodesThird };
