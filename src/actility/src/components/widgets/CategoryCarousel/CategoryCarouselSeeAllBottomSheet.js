import PropTypes from 'prop-types';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import BottomSheetContainer from './BottomSheetContainer';

const CategoryCarouselSeeAllBottomSheet = ({ open, onDismiss, categories }) => (
	<BottomSheet
		header="Popular categories"
		onDismiss={onDismiss}
		isOpen={open}
	>
		<BottomSheetMain>
			<BottomSheetContainer list={categories} />
		</BottomSheetMain>
	</BottomSheet>
);

CategoryCarouselSeeAllBottomSheet.defaultProps = {
	categories: [],
	open: false,
	onDismiss: null,
};

CategoryCarouselSeeAllBottomSheet.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.object),
	open: PropTypes.bool,
	onDismiss: PropTypes.func,
};

export { CategoryCarouselSeeAllBottomSheet };
