import PropTypes from 'prop-types';
import { Container } from 'elements/Container';

import CmsWidgetsTop from '../CmsWidgetsTop';
import CmsWidgetsList from '../CmsWidgetsList';

import styles from './OurBrands.scss';

const OurBrands = ({ data: { sectionTop, list } }) => (
	<section className={styles.ourBrands}>
		<Container>
			<CmsWidgetsTop contentTop={sectionTop} />
			<CmsWidgetsList contentList={list} />
		</Container>
	</section>
);

OurBrands.defaultProps = {
	data: {},
};

OurBrands.propTypes = {
	data: PropTypes.objectOf(PropTypes.any),
};

export default OurBrands;
