import PropTypes from 'prop-types';

import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';
import { Image } from 'elements/Image';

import css from './BottomSheetItem.module.scss';

// eslint-disable-next-line react/prop-types
const BottomSheetItem = ({ name, icon }) => (
	<div className={css.item}>
		<div className={css.icon}>
			<Image src={icon} alt={icon} />
		</div>
		<span className={css.title}>{name}</span>
		<Icon src={ChevronArrowRightIcon} className={css.arrow} />
	</div>
);

BottomSheetItem.defaultProps = {
	name: '',
	icon: '',
};

BottomSheetItem.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
};

export default BottomSheetItem;
