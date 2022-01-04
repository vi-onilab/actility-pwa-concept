import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Image } from 'elements/Image';

import css from './Select.module.scss';

const SelectItem = (
	{
		className,
		icon,
		value,
		children,
		onClick,
		isActive,
	},
) => {
	const onClickHandler = () => onClick?.(value);

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<div
			onClick={onClickHandler}
			className={classNames(
				css.item,
				isActive && css.isActive,
				className,
			)}
		>
			{icon && (
				<Image
					src={icon}
					className={css.itemIcon}
					alt=""
				/>
			)}
			<div className={css.itemLabel}>
				{children}
			</div>
		</div>
	);
};

SelectItem.defaultProps = {
	className: null,
	value: null,
	icon: null,
	onClick: null,
	isActive: false,
};
SelectItem.propTypes = {
	className: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	icon: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	onClick: PropTypes.func,
	isActive: PropTypes.bool,
};

export { SelectItem };
