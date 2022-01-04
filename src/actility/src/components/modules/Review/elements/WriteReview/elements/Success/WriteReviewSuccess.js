import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';
import { Icon } from 'elements/Icon';
import { CheckCircleIcon } from 'icons';

import css from './WriteReviewSuccess.module.scss';

const WriteReviewSuccess = (
	{
		className,
	},
) => (
	<Flex
		direction="column"
		alignItems="center"
		className={classNames(css.wrapper, className)}
	>
		<Icon src={CheckCircleIcon} className={css.icon} />
		<p className={css.text}>
			Your review has been sent for moderation!
		</p>
	</Flex>
);

WriteReviewSuccess.propTypes = {
	className: PropTypes.string,
};

WriteReviewSuccess.defaultProps = {
	className: null,
};

export { WriteReviewSuccess };
