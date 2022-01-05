import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Skeleton } from 'elements/Skeleton';

import css from './ProductDeliveryInformationBox.module.scss';

const ProductDeliveryInformationBoxSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

ProductDeliveryInformationBoxSkeleton.propTypes = {
	className: PropTypes.string,
};

ProductDeliveryInformationBoxSkeleton.defaultProps = {
	className: null,
};

export { ProductDeliveryInformationBoxSkeleton };
