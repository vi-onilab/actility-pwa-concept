import PropTypes from 'prop-types';

import css from './PaginationProgress.module.scss';

const PaginationProgress = (
	{
		pageInfo,
		total,
		onLoadPage,
	},
) => {
	if (!total || !pageInfo) {
		return null;
	}

	const currentCount = Math.min(total, pageInfo?.currentPage * pageInfo?.pageSize);

	return (
		<div className={css.container}>
			<span className={css.text}>
				{`${currentCount} product(s) out of ${total}`}
			</span>
			<div className={css.progress}>
				<div
					className={css.value}
					style={{ width: `${(currentCount / total) * 100}%` }}
				/>
			</div>
			<button
				type="button"
				className={css.button}
				onClick={() => (
					onLoadPage?.(Math.min(pageInfo?.totalPages, pageInfo?.currentPage + 1))
				)}
			>
				<span className={css.buttonText}>Show more</span>
			</button>
		</div>
	);
};

PaginationProgress.propTypes = {
	pageInfo: PropTypes.shape({
		currentPage: PropTypes.number,
		pageSize: PropTypes.number,
		totalPages: PropTypes.number,
	}),
	total: PropTypes.number,
	onLoadPage: PropTypes.func,
};

PaginationProgress.defaultProps = {
	pageInfo: null,
	total: null,
	onLoadPage: null,
};

export { PaginationProgress };
