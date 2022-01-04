import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { CompareFloatIcon, TrashIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Link } from 'elements/Link';
import { useCompareContext } from 'modules/Compare';
import { useCompareClear, useRouter } from 'hooks';

import css from './CompareFloatNav.module.scss';

const CompareFloatNav = (
	{
		className,
	},
) => {
	const { getCompareUrl } = useRouter();
	const { useListModel } = useCompareContext();
	const onRemoveCompare = useCompareClear();

	const data = useListModel();
	const count = data?.itemCount || 0;

	return (
		<div
			className={classNames(
				css.wrapper,
				count && css.isActive,
				className,
			)}
		>
			<Link
				to={getCompareUrl()}
				className={css.compareButton}
			>
				<Icon
					src={CompareFloatIcon}
					className={css.compareButtonIcon}
				/>
			</Link>
			<div className={css.counter}>
				{count}
			</div>
			<button
				type="button"
				onClick={onRemoveCompare}
				className={css.clearButton}
			>
				<Icon
					src={TrashIcon}
					className={css.clearButtonIcon}
				/>
			</button>
		</div>
	);
};

CompareFloatNav.propTypes = {
	className: PropTypes.string,
};

CompareFloatNav.defaultProps = {
	className: null,
};

export { CompareFloatNav };
