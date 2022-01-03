import { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';

import { BurgerMenuNodesThird } from './BurgerMenuNodesThird';
import { BurgerMenuNodesSecond } from './BurgerMenuNodesSecond';

import css from './BurgerMenuNodes.module.scss';

const BurgerMenuNodesModal = ({ data, onRequestClose, isOpen }) => {
	const [activeNode, setActiveNode] = useState(null);
	const isColumn = !!data?.nodes?.find((node) => node?.type === 'wrapper');

	const ListComponent = isColumn ? BurgerMenuNodesThird : BurgerMenuNodesSecond;

	return (
		<ModalPortal
			isOpen={isOpen}
			header={(
				<ModalHeaderBackArrow onDismiss={onRequestClose}>
					{data?.title}
				</ModalHeaderBackArrow>
			)}
			onDismiss={onRequestClose}
		>
			<main className={css.main}>
				<ListComponent
					data={data}
					onChangeRequest={setActiveNode}
				/>
			</main>

			{activeNode && (
				<BurgerMenuNodesModal
					isOpen={!!activeNode?.nodeId}
					data={activeNode}
					onRequestClose={() => setActiveNode(null)}
				/>
			)}
		</ModalPortal>
	);
};

BurgerMenuNodesModal.defaultProps = {
	data: [],
};

BurgerMenuNodesModal.propTypes = {
	data: PropTypes.objectOf(PropTypes.object),
	isOpen: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
};

export { BurgerMenuNodesModal };
