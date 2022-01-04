import PropTypes from 'prop-types';
import { SceneTab } from 'elements/SceneTabs/SceneTab';
import { SceneTabs } from 'elements/SceneTabs';
import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { forwardRef, useState } from 'react';
import { ContentParser } from 'elements/ContentParser';
import { Image } from 'elements/Image';

import css from './MicrositeSectionCertification.module.scss';

const MicrositeSectionCertification = (
	forwardRef((
		{ vendor },
		ref,
	) => {
		const [activeIndex, setActiveIndex] = useState(null);

		if (!vendor?.certifications?.items?.length) {
			return null;
		}

		return (
			<MicrositeSectionLayout
				ref={ref}
				id="certifications"
				variant="primary"
			>
				<Container variant="small">
					<div className={css.containerHeader}>
						<h2 className={css.containerHeaderTitle}>Certifications</h2>
					</div>
					<SceneTabs value={activeIndex} onChange={setActiveIndex}>
						{vendor?.certifications?.items?.map(({ label, image, description }, index) => (
							<SceneTab
								key={index}
								className={css.tabColored}
								title={label}
								icon={(
									<Image src={image} alt="label" />
								)}
							>
								<ContentParser html={description} />
							</SceneTab>
						))}
					</SceneTabs>
				</Container>
			</MicrositeSectionLayout>
		);
	})
);

MicrositeSectionCertification.propTypes = {
	vendor: PropTypes.oneOfType([PropTypes.object]),
};

MicrositeSectionCertification.defaultProps = {
	vendor: null,
};

export { MicrositeSectionCertification };
