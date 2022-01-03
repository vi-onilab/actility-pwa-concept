import PropTypes from 'prop-types';
import { useFaqAskModal } from 'modules/Faq';

import css from './FaqOpenAskModalButton.module.scss';

const FaqOpenAskModalButton = (
	{
		children,
		vendorId,
	},
) => {
	const [FaqModal, faqProps, { onOpen }] = useFaqAskModal({ vendorId });

	return (
		<>
			<button
				type="button"
				onClick={onOpen}
				className={css.controlButton}
			>
				<span className={css.controlButtonText}>
					{children}
				</span>
			</button>

			<FaqModal {...faqProps} />
		</>
	);
};

FaqOpenAskModalButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	vendorId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FaqOpenAskModalButton.defaultProps = {
	children: null,
	vendorId: null,
};

export { FaqOpenAskModalButton };
