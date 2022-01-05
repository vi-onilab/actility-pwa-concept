import { useState } from 'react';
import PropTypes from 'prop-types';
import { PaginationFloat, PaginationProgress } from 'modules/Pagination';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';

const PaginationCombineProgressWithFloat = (
	{
		pageInfo,
		total,
		onLoadPage,
	},
) => {
	const [isClicked, setClicked] = useState(false);

	return (
		<>
			<MediaBreakpointUp name="lg">
				<PaginationProgress
					pageInfo={pageInfo}
					total={total}
					onLoadPage={(value) => (
						onLoadPage(value, { isFloat: false, isNextFloat: false })
					)}
				/>
			</MediaBreakpointUp>
			<MediaBreakpointDown name="lg">
				{isClicked ? (
					<PaginationFloat
						pageInfo={pageInfo}
						total={total}
						onLoadPage={(value) => (
							onLoadPage(value, { isFloat: true, isNextFloat: true })
						)}
					/>
				) : (
					<PaginationProgress
						pageInfo={pageInfo}
						total={total}
						onLoadPage={(value) => {
							setClicked(true);
							onLoadPage?.(value, { isFloat: false, isNextFloat: true });
						}}
					/>
				)}
			</MediaBreakpointDown>
		</>
	);
};

PaginationCombineProgressWithFloat.propTypes = {
	pageInfo: PropTypes.shape({
		currentPage: PropTypes.number,
		pageSize: PropTypes.number,
		totalPages: PropTypes.number,
	}),
	total: PropTypes.number,
	onLoadPage: PropTypes.func,
};

PaginationCombineProgressWithFloat.defaultProps = {
	pageInfo: null,
	total: null,
	onLoadPage: null,
};

export { PaginationCombineProgressWithFloat };
