import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { Rating } from 'elements/Rating';

import css from './ReviewCard.module.scss';

const ReviewCard = (
	{
		className,
		data,
	},
) => (
	<div className={classNames(css.item, className)}>
		<div className={css.reviewHeader}>
			<Rating
				variant="single"
				value={data?.summary}
			/>
			<div className={css.reviewStatus}>{data?.title}</div>
		</div>
		<div className={css.reviewContentWrapper}>
			<div className={css.reviewContent}>
				<p>
					{data?.detail}
				</p>
			</div>
			<div className={css.reviewTooltip}>
				<p className={css.reviewTooltipItem}>{data?.nickname}</p>
				<p className={css.reviewTooltipItem}>{data?.createdAt}</p>
			</div>
		</div>
	</div>
);

ReviewCard.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		summary: PropTypes.number,
		title: PropTypes.string,
		detail: PropTypes.string,
		nickname: PropTypes.string,
		createdAt: PropTypes.string,
	}),
};

ReviewCard.defaultProps = {
	className: null,
	data: null,
};

export { ReviewCard };
