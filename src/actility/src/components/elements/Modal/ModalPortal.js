import PropTypes from 'prop-types';
import { Portal } from 'elements/Portal';
import { Overlay } from 'elements/Overlay';

import Modal from './Modal';

const ModalPortal = (
	{
		variant,
		isOpen,
		animation: Animation,
		...props
	},
) => {
	const jsxOverlay = (
		isOpen && (
			<Overlay onClick={props?.onDismiss} isOverAll />
		)
	);

	const jsxContent = (
		isOpen ? (
			<Portal>
				<Modal isOpen={isOpen} variant={variant} {...props} />
			</Portal>
		) : (
			<></>
		)
	);

	if (Animation) {
		return (
			<>
				{jsxOverlay}
				<Animation isOpen={isOpen}>
					{jsxContent}
				</Animation>
			</>
		);
	}

	return (
		<>
			{jsxOverlay}
			{jsxContent}
		</>
	);
};

ModalPortal.defaultProps = {
	...Modal.defaultProps,
	animation: null,
};
ModalPortal.propTypes = {
	...Modal.propTypes,
	animation: PropTypes.func,
};

export { ModalPortal };
