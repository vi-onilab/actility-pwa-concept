import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './Breadcrumbs.module.scss';

const BreadcrumbsSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

BreadcrumbsSkeleton.propTypes = {
	className: PropTypes.string,
};

BreadcrumbsSkeleton.defaultProps = {
	className: null,
};

export { BreadcrumbsSkeleton };
