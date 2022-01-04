import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Link } from 'elements/Link';
import { PdfIcon } from 'icons';
import { Icon } from 'elements/Icon';

import css from './DownloadableFile.module.scss';

const DownloadableFile = (
	{
		className,
		title,
		link,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<Link to={null} className={css.iconWrapper}>
			<Icon src={PdfIcon} className={css.icon} />
		</Link>
		<div className={css.content}>
			<p className={css.title}>{title}</p>
			<Link to={link} className={css.link}>Download PDF</Link>
		</div>
	</div>
);

DownloadableFile.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
};

DownloadableFile.defaultProps = {
	className: null,
	title: null,
	link: null,
};

export { DownloadableFile };
