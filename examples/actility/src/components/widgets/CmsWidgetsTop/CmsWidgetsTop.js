import PropTypes from 'prop-types';

import styles from './CmsWidgetsTop.scss';

const CmsWidgetsTop = ({ contentTop: { title, link, subtitle } }) => (
	<div className={styles.sectionTop}>
		<h2 className={styles.sectionTitle}>{title}</h2>
		<a href="/" className={styles.linkMore}>{link}</a>
		{subtitle && <div className={styles.sectionSubTitle}>{subtitle}</div>}
	</div>
);

CmsWidgetsTop.defaultProps = {
	contentTop: {},
};

CmsWidgetsTop.propTypes = {
	contentTop: PropTypes.objectOf(PropTypes.any),
};

export default CmsWidgetsTop;
