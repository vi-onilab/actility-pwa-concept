import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { SubscribeFormVendor } from 'modules/Subscribe';
import { Rating } from 'elements/Rating';
import { LinkArrow } from 'elements/LinkArrow';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { Image } from 'elements/Image';
import { ContentParser } from 'elements/ContentParser';
import { SocialButtons } from 'elements/SocialButtons';
import { classNames } from 'helpers';
import { useFaqAskModal } from 'modules/Faq';

import css from './MicrositeSectionInfo.module.scss';

const MicrositeSectionInfo = (
	forwardRef((
		{
			data,
		},
		ref,
	) => {
		const [FaqModal, faqProps, { onOpen }] = useFaqAskModal({ vendorId: data?.id });
		const [isReadAll, setReadAll] = useState(false);

		const jsxButtons = (
			<div className={css.sectionLogoControl}>
				<button
					type="button"
					className={css.sectionLogoControlButton}
					onClick={onOpen}
				>
					<span className={css.sectionLogoControlButtonText}>Contact the seller</span>
				</button>
			</div>
		);

		const jsxContactInformation = (
			<div className={css.sectionSubscribe}>
				<p className={css.sectionSubscribeTitle}>Contact information</p>
				<div className={css.sectionSubscribeList}>
					{data?.country?.length > 0 && (
						<p className={css.sectionSubscribeItem}>
							<span className={css.sectionSubscribeItemTitle}>Country:&nbsp;</span>
							{data?.country}
						</p>
					)}
					{data?.address?.length > 0 && (
						<p className={css.sectionSubscribeItem}>
							<span className={css.sectionSubscribeItemTitle}>Address:&nbsp;</span>
							{data?.address}
						</p>
					)}
				</div>
				<SubscribeFormVendor vendorId={data?.id} />
				<SocialButtons data={data?.social} />
			</div>
		);

		return (
			<MicrositeSectionLayout ref={ref} className={css.paddingBottom}>
				<Container variant="small">
					<div className={css.section}>
						<MediaBreakpointUp name="lg">
							<div className={css.sectionLeft}>
								<div className={css.sectionLogo}>

									<div className={css.sectionLogoWrapper}>
										{data?.image?.length > 0 && (
											<Image
												src={data.image}
												alt={data?.storeName}
												className={css.sectionLogoWrapperImg}
											/>
										)}
									</div>

									{jsxButtons}
									{jsxContactInformation}
								</div>
							</div>
						</MediaBreakpointUp>
						<div className={css.sectionRight}>

							<MediaBreakpointDown name="lg">
								<div className={css.sectionLogoWrapper}>
									{data?.image?.length > 0 && (
										<Image
											src={data.image}
											alt={data?.storeName}
											className={css.sectionLogoWrapperImg}
										/>
									)}
								</div>
							</MediaBreakpointDown>

							<div className={css.sectionContent}>
								<div className={css.sectionHeader}>
									<h2 className={css.sectionHeaderTitle}>
										{data?.storeName}
									</h2>
									<Rating variant="list" count="1" />
								</div>

								<div className={classNames(css.contentReadMore, isReadAll && css.isReadMore)}>
									<ContentParser
										className={css.contentReadMoreMain}
										html={data?.description}
									/>

									{data?.certifications?.items?.length > 0 && (
										<div className={css.sectionBlock}>
											<p className={css.sectionBlockTitle}>Our certificates</p>
											<div className={css.sectionBlockContent}>
												<div className={css.sectionBlockContentImages}>
													{data.certifications.items.slice?.(0, 2)?.map?.(({ image, label }, index) => (
														<div
															key={index}
															className={css.sectionBlockContentImage}
														>
															{image?.length > 0 && (
																<Image src={image} alt={label} />
															)}
														</div>
													))}
												</div>
												{data?.certifications?.items?.length > 2 && (
													<LinkArrow
														onClick={() => {
															document.getElementById('certifications')?.scrollIntoView?.({
																behavior: 'auto',
																block: 'start',
															});
														}}
													>
														Go to all certifications
													</LinkArrow>
												)}
											</div>
										</div>
									)}

									{!isReadAll && (
										<MediaBreakpointDown name="lg">
											<LinkArrow
												onClick={() => setReadAll(true)}
												variant="smallBold"
											>
												Read all
											</LinkArrow>
										</MediaBreakpointDown>
									)}
								</div>

								<MediaBreakpointDown name="lg">
									{jsxButtons}
									{jsxContactInformation}
								</MediaBreakpointDown>
							</div>
						</div>
					</div>
				</Container>
				<FaqModal {...faqProps} />
			</MicrositeSectionLayout>
		);
	}));

MicrositeSectionInfo.propTypes = {
	data: PropTypes.oneOf([PropTypes.object]),
};

MicrositeSectionInfo.defaultProps = {
	data: null,
};

export { MicrositeSectionInfo };
