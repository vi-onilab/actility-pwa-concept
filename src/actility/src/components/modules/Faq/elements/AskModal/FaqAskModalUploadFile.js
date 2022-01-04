import { useMemo } from 'react';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';
import { Image } from 'elements/Image';
import { CloseMenuIcon } from 'icons';
import { Icon } from 'elements/Icon';

import css from './FaqAskModal.module.scss';

const FaqAskModalUploadFile = ({
	className,
	data,
	onClick,
}) => {
	const src = useMemo(() => URL.createObjectURL(data), [data]);

	return (
		<button
			type="button"
			onClick={onClick}
			className={classNames(css.fileWrapper, className)}
		>
			<Image src={src} />
			<Icon src={CloseMenuIcon} className={css.fileDelete} />
		</button>
	);
};
FaqAskModalUploadFile.defaultProps = {
	className: null,
	data: null,
	onClick: null,
};

FaqAskModalUploadFile.propTypes = {
	className: PropTypes.string,
	data: PropTypes.string,
	onClick: PropTypes.func,
};

export { FaqAskModalUploadFile };
