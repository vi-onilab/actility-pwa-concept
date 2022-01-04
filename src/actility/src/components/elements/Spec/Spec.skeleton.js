import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './Spec.module.scss';

const SpecSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

SpecSkeleton.propTypes = {
	className: PropTypes.string,
};

SpecSkeleton.defaultProps = {
	className: null,
};

export { SpecSkeleton };
