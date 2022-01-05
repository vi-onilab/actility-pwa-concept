import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';
import { ModalPortal } from 'elements/Modal';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon, ZoomInIcon } from 'icons';

import { Image } from 'elements/Image';
import { useEffect, useState } from 'react';
import { ImageZoom } from 'elements/ImageZoom';
import { ModalHeaderCloseIcon } from 'elements/Modal/Header/CloseIcon';

import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import css from './ProductGalleryModal.module.scss';

const ProductGalleryModal = (
	{
		className,
		isOpen,
		onDismiss,
		data,
		imageIndex,
	},
) => {
	const [activeIndex, setActiveIndex] = useState(imageIndex);
	const [isStarted, setStarted] = useState(false);

	useEffect(() => {
		setActiveIndex(imageIndex);
	}, [imageIndex]);

	const activeZoomImage = data?.mediaGallery?.[activeIndex];

	const onDismissCustom = () => {
		onDismiss?.();
		setStarted(false);
	};
	return (
		<ModalPortal
			className={classNames(css.wrapper, className)}
			isOpen={!!isOpen}
			header={(
				<MediaBreakpointDown name="lg">
					<ModalHeaderCloseIcon
						onDismiss={onDismissCustom}
						isStarted={isStarted}
						title="1/5 step"
					/>
				</MediaBreakpointDown>
			)}
			footer={(
				<MediaBreakpointDown name="lg">
					{!isStarted && (
						<div className={css.zoomFooter}>
							<button type="button" className={css.zoomButton}>
								<Icon src={ZoomInIcon} className={css.zoomIcon} />
								<span className={css.zoomTitle}>Use two fingers to Zoom-in</span>
							</button>
						</div>
					)}
				</MediaBreakpointDown>
			)}
			onDismiss={onDismiss}
		>
			<div className={css.inner}>
				<MediaBreakpointUp name="lg">
					<Flex
						as="button"
						asProps={{
							type: 'button',
							onClick: () => (
								setActiveIndex(
									(activeIndex + data?.mediaGallery?.length - 1) % data?.mediaGallery?.length,
								)),
						}}
						justifyContent="center"
						alignItems="center"
						className={css.arrowPrev}
					>
						<Icon
							src={ChevronArrowRightIcon}
							className={css.arrowIcon}
						/>
					</Flex>
					<Flex
						as="button"
						asProps={{
							type: 'button',
							onClick: () => (
								setActiveIndex((activeIndex + 1) % data?.mediaGallery?.length)
							),
						}}
						justifyContent="center"
						alignItems="center"
						className={css.arrowNext}
					>
						<Icon
							src={ChevronArrowRightIcon}
							className={css.arrowIcon}
						/>
					</Flex>
				</MediaBreakpointUp>
				<Flex
					className={css.gallery}
				>
					<MediaBreakpointUp name="lg">
						<div className={css.thumbs}>
							{data?.mediaGallery?.map?.(({
								url,
							}, index) => (
								<div
									className={classNames(
										css.thumb,
										index === activeIndex && css.isActive,
									)}
									key={url || index}
								>
									<MediaBreakpointUp name="lg">
										<Image
											className={css.thumbImage}
											src={url}
											onClick={() => setActiveIndex(index)}
										/>
									</MediaBreakpointUp>
								</div>
							))}
						</div>
					</MediaBreakpointUp>
					<div className={css.images}>
						{activeZoomImage?.url?.length > 0 && (
							<>
								<MediaBreakpointUp name="lg">
									<ImageZoom
										src={activeZoomImage.url}
										zoomSrc={activeZoomImage.url}
										className={css.image}
									/>
								</MediaBreakpointUp>
								<MediaBreakpointDown name="lg">
									<TransformWrapper centerOnInit onZoomStart={() => setStarted(true)}>
										<TransformComponent>
											<Image src={activeZoomImage.url} className={css.mobileImage} />
										</TransformComponent>
									</TransformWrapper>
								</MediaBreakpointDown>
							</>
						)}
					</div>
				</Flex>
			</div>
		</ModalPortal>
	);
};

ProductGalleryModal.propTypes = {
	className: PropTypes.string,
	imageIndex: PropTypes.number,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	data: PropTypes.shape({
		categories: PropTypes.arrayOf(PropTypes.shape({
			categoryWidgetSvgIcon: PropTypes.string,
			name: PropTypes.string,
		})),
		mediaGallery: PropTypes.arrayOf(PropTypes.shape({
			url: PropTypes.string,
			label: PropTypes.string,
		})),
	}),
};

ProductGalleryModal.defaultProps = {
	className: null,
	imageIndex: 0,
	isOpen: null,
	onDismiss: null,
	data: null,
};

export { ProductGalleryModal };
