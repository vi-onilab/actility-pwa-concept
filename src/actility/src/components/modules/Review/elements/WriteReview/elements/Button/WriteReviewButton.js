import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { useState } from 'react';
import { WriteReviewModal } from 'modules/Review/elements/WriteReview';

import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { WriteReviewSheet } from 'modules/Review/elements/WriteReview/elements/Sheet';
import css from './WriteReviewButton.module.scss';

const WriteReviewButton = (
	{
		children,
		className,
		sku,
	},
) => {
	const [isActive, setActive] = useState(false);

	const clickEventHandler = () => {
		setActive(!isActive);
	};

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<button
				type="submit"
				className={css.button}
				onClick={() => 	setActive(!isActive)}
			>
				{children}
			</button>
			<MediaBreakpointUp name="lg">
				<WriteReviewModal
					sku={sku}
					onDismiss={clickEventHandler}
					isOpen={isActive}
				/>
			</MediaBreakpointUp>
			<MediaBreakpointDown name="lg">
				<WriteReviewSheet
					sku={sku}
					onDismiss={clickEventHandler}
					isOpen={isActive}
				/>
			</MediaBreakpointDown>
		</div>
	);
};

WriteReviewButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	sku: PropTypes.string,
};

WriteReviewButton.defaultProps = {
	children: null,
	className: null,
	sku: null,
};

export { WriteReviewButton };
