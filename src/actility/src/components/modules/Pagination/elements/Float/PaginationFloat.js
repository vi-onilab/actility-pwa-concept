import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { PaginationFloatPage } from 'modules/Pagination';

import css from './PaginationFloat.module.scss';

const PaginationFloat = (
	{
		className,
		pageInfo,
		total,
		onLoadPage,
	},
) => {
	const [isOpen, setIsOpen] = useState(false);

	if (!total || !pageInfo || pageInfo?.totalPages < 2) {
		return null;
	}

	const MIN = Math.max((pageInfo?.currentPage - 3), 1);
	const MAX = Math.min((pageInfo?.currentPage + 2), (pageInfo?.totalPages - 1));

	const pages = (
		Array
			.from({ length: pageInfo?.totalPages })
			.map((_, index) => (index + 1))
			.slice(
				MIN,
				MAX,
			)
	);

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<div className={classNames(css.list, isOpen && css.isOpen)}>
				<PaginationFloatPage
					page={1}
					isActive={pageInfo?.currentPage === 1}
					onClick={() => onLoadPage(1)}
				/>

				{pages.length > 0 && (pages?.[0] - 1) !== 1 && (
					<PaginationFloatPage
						isDelimiter
					/>
				)}

				{pages.map((page, index) => (
					<button
						key={page || index}
						type="button"
						onClick={() => page && onLoadPage(page)}
						className={classNames(
							css.item,
							!page && css.itemDelimiter,
							pageInfo?.currentPage === page && css.isActive,
						)}
					>
						{page || '...'}
					</button>
				))}

				{pages.length > 0 && (pages[pages.length - 1] + 1) !== pageInfo?.totalPages && (
					<PaginationFloatPage
						isDelimiter
					/>
				)}

				<PaginationFloatPage
					page={pageInfo?.totalPages}
					isActive={pageInfo?.currentPage === pageInfo?.totalPages}
					onClick={() => onLoadPage(pageInfo?.totalPages)}
				/>
			</div>
			<button type="button" onClick={() => setIsOpen(!isOpen)} className={css.label}>
				{`${pageInfo?.currentPage}/${pageInfo?.totalPages}`}
			</button>
		</div>
	);
};

PaginationFloat.propTypes = {
	className: PropTypes.string,
	pageInfo: PropTypes.shape({
		currentPage: PropTypes.number,
		pageSize: PropTypes.number,
		totalPages: PropTypes.number,
	}),
	total: PropTypes.number,
	onLoadPage: PropTypes.func,
};

PaginationFloat.defaultProps = {
	className: null,
	pageInfo: null,
	total: null,
	onLoadPage: null,
};

export { PaginationFloat };
