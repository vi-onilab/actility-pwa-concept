import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { CloseTagIcon } from 'icons';
import { Logo } from 'elements/Logo';

import css from './ModalHeaderCrossLogo.module.scss';

const ModalHeaderCrossLogo = (
	{
		className,
		onDismiss,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		<div className={css.main}>
			<Logo className={css.logo} />
		</div>
		<button type="submit" className={css.cross} onClick={onDismiss}>
			<Icon src={CloseTagIcon} className={css.crossIcon} />
		</button>
	</div>
);

ModalHeaderCrossLogo.propTypes = {
	className: PropTypes.string,
	onDismiss: PropTypes.func,
};

ModalHeaderCrossLogo.defaultProps = {
	className: null,
	onDismiss: null,
};

export { ModalHeaderCrossLogo };
