import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { CheckCircleIcon } from 'icons';
import { Flex } from 'elements/Flex';

import css from './FaqAskModalSuccess.module.scss';

const FaqAskModalSuccess = (
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
			Your question was successfully sent!
		</p>
	</Flex>
);

FaqAskModalSuccess.propTypes = {
	className: PropTypes.string,
};

FaqAskModalSuccess.defaultProps = {
	className: null,
};

export { FaqAskModalSuccess };
