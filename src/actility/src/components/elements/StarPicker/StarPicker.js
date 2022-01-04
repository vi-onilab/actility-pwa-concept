import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { RatingHollowIcon, RatingIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Flex } from 'elements/Flex';

import css from './StarPicker.module.scss';

const StarPicker = (
	{
		className,
		title,
		value,
		onChange,
		data,
	},
) => {
	const items = useMemo(() => (
		[
			...(data?.length > 0 ? (
				data
			) : (
				Array.from({ length: 5 })
					.map((_, index) => ({
						optionId: index + 1,
						value: index + 1,
					}))
			)),
		].reverse()
	), [data]);

	const activeIndex = items.findIndex(({ optionId }) => String(optionId) === String(value));

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			{title && (
				<p className={css.title}>{title}</p>
			)}

			<Flex
				alignItems="center"
				direction="rowReverse"
				justifyContent="end"
				className={css.list}
			>
				{items.map((item, index) => {
					const key = item.optionId || index;
					const isActive = activeIndex >= 0 && activeIndex <= index;

					return (
						<button
							key={key}
							type="button"
							className={classNames(
								css.item,
								isActive && css.itemActive,
							)}
							title={item.value}
							onClick={() => onChange?.(item.optionId)}
						>
							<Icon
								src={RatingIcon}
								className={css.fillIcon}
							/>
							<Icon
								src={RatingHollowIcon}
								className={css.outlineIcon}
							/>
						</button>
					);
				})}
			</Flex>

		</div>
	);
};

StarPicker.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.shape({
		optionId: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	})),
};

StarPicker.defaultProps = {
	className: null,
	title: null,
	value: null,
	onChange: null,
	data: [],
};

export { StarPicker };
