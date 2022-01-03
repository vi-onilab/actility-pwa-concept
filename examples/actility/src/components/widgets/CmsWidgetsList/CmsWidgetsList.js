import PropTypes from 'prop-types';
import { Image } from 'elements/Image';

import styles from './CmsWidgetsList.scss';

const CmsWidgetsList = ({ contentList }) => (
	<ul className={styles.list}>
		{contentList.map(({
			id,
			imgUrl,
			alt,
			title,
			text,
			readMore,
		}) => (
			<li key={id} className={styles.listItem}>
				<a href="/" className={styles.listItem__link}>
					<div className={styles.listItem__img}>
						<Image src={imgUrl} alt={alt} />
					</div>
					{title && <div className={styles.listItem__title}>{title}</div>}
					{text && <div className={styles.listItem__text}>{text}</div>}
					{readMore && <div className={styles.listItem__more}>{readMore}</div>}
				</a>
			</li>
		))}
	</ul>
);

CmsWidgetsList.defaultProps = {
	contentList: {},
};

CmsWidgetsList.propTypes = {
	contentList: {
		text: PropTypes.string,
	},
};

export default CmsWidgetsList;
