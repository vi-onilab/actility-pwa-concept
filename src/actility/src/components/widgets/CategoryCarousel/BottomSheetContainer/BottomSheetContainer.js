import PropTypes from 'prop-types';

import css from './BottomSheetContainer.module.scss';
import BottomSheetItem from '../BottomSheetItem';

const BottomSheetContainer = ({ list }) => (
	<div className={css.wrapper}>
		{list?.map((category) => (
			<BottomSheetItem name={category?.name} icon={category?.categoryWidgetSvgIcon} />
		))}
	</div>
);

BottomSheetContainer.defaultProps = {
	list: [],
};

BottomSheetContainer.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object),
};

export default BottomSheetContainer;
