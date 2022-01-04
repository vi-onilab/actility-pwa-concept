import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';

import css from './PaginationArrows.module.scss';

const PaginationArrows = (
	{
		className,
		current,
		count,
		onNext,
		onPrev,
	},
) => (
	<Flex
		alignItems="center"
		className={classNames(css.wrapper, className)}
	>
		<button
			className={css.prev}
			type="button"
			onClick={onPrev}
		>
			<Icon
				className={css.icon}
				src={ChevronArrowRightIcon}
			/>
			<p className={css.text}>
				Previous
			</p>
		</button>

		<Flex
			justifyContent="center"
			flex="auto"
			className={css.counter}
		>
			{`${current}/${count}`}
		</Flex>

		<button
			className={css.next}
			type="button"
			onClick={onNext}
		>
			<p className={css.text}>
				Next
			</p>
			<Icon
				className={css.icon}
				src={ChevronArrowRightIcon}
			/>
		</button>
	</Flex>
);

PaginationArrows.propTypes = {
	className: PropTypes.string,
	current: PropTypes.number,
	count: PropTypes.number,
	onPrev: PropTypes.func,
	onNext: PropTypes.func,
};

PaginationArrows.defaultProps = {
	className: null,
	current: null,
	count: null,
	onPrev: null,
	onNext: null,
};

export { PaginationArrows };
