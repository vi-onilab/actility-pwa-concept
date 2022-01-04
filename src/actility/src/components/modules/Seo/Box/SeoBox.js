import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { ReadMore } from 'elements/ReadMore';
import { classNames } from 'helpers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { MediaBreakpointDown } from 'providers';

import css from './SeoBox.module.scss';

const SeoBox = (
	{
		data,
		className,
		onAccept,
		onDismiss,
		isReadMore,
	},
) => {
	if (!data?.description?.length) {
		return null;
	}

	const content = parser(data?.description);

	return (
		<>
			<div className={classNames(css.wrapper, className, !isReadMore && css.cutText)}>
				<h3 className={css.title}>
					{data?.name}
				</h3>
				<div className={css.main}>
					{content}
					{!isReadMore && (
						<ReadMore
							as="button"
							asProps={{
								type: 'submit',
								onClick: onAccept,
							}}
							className={css.readMore}
						/>
					)}
				</div>
			</div>
			<MediaBreakpointDown name="lg">
				<ModalPortal
					header={(
						<ModalHeaderBackArrow onDismiss={onDismiss}>
							{data?.name}
						</ModalHeaderBackArrow>
					)}
					isOpen={isReadMore}
					onDismiss={onDismiss}
				>
					{content}
				</ModalPortal>
			</MediaBreakpointDown>
		</>
	);
};

SeoBox.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		__typename: PropTypes.oneOf(['Category', 'CategoryTree']),
	}).isRequired,
	className: PropTypes.string,
	onAccept: PropTypes.func,
	onDismiss: PropTypes.func,
	isReadMore: PropTypes.bool,
};

SeoBox.defaultProps = {
	className: null,
	onAccept: null,
	onDismiss: null,
	isReadMore: false,
};

export { SeoBox };
