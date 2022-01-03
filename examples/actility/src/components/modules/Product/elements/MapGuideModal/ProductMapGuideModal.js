import { lazy, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ModalPortal } from 'elements/Modal';
import { Flex } from 'elements/Flex';
import { Icon } from 'elements/Icon';
import { QuestionIcon } from 'icons';
import { useMediaBreakpoint } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { Skeleton } from 'elements/Skeleton';

import css from './ProductMapGuideModal.module.scss';

const ITEMS = [
	{ label: 'EU863-870', regions: ['fr'] },
	{ label: 'EU433', regions: ['pl'] },
	{ label: 'US902-928', regions: ['us'] },
	{ label: 'AU915-928', regions: ['au'] },
	{ label: 'AS920-923 (“AS1”)', regions: ['by'] },
	{ label: 'AS923-925 (“AS2”)', regions: ['ru', 'by'] },
	{ label: 'CN470-510', regions: ['gr'] },
	{ label: 'CN779-787', regions: ['en'] },
	{ label: 'IN865-867', regions: ['gl'] },
	{ label: 'KR920-923', regions: ['sd'] },
	{ label: 'EU868', regions: ['es'], disabled: true },
];

const SvgMapLazy = lazy(() => import('elements/SvgMap').then((x) => ({ default: x.SvgMap })));

const ProductMapGuideModal = (
	{
		className,
		isOpen,
		onDismiss,
	},
) => {
	const { isBreakpointDown } = useMediaBreakpoint();
	const [activeIndex, setActiveIndex] = useState(0);

	const isLgDown = isBreakpointDown('lg');

	const onSelectLocationHandler = (newLocation) => {
		const location = ITEMS.findIndex(({ regions, disabled }) => (
			!disabled && regions.map((item) => item.toLowerCase()).includes(newLocation)
		));

		if (location >= 0) {
			setActiveIndex(location);
		}
	};

	const jsxContext = (
		<>
			<h2 className={css.title}>LoRa Frequency Map Guide</h2>
			<Flex
				direction={isLgDown ? 'column' : 'row'}
				className={css.content}
			>
				<Flex
					wrap="wrap"
					direction={isLgDown ? 'row' : 'column'}
					className={css.side}
				>
					<div className={css.label}>RF Region</div>

					{ITEMS.map((item, index) => (
						<button
							type="button"
							disabled={item.disabled}
							key={item.label || index}
							onClick={() => setActiveIndex(index)}
							className={classNames(css.item, activeIndex === index && css.isActive)}
						>
							<p>{item.label}</p>
							{item.disabled && (
								<Icon
									src={QuestionIcon}
									className={css.icon}
								/>
							)}
						</button>
					))}
				</Flex>

				<Flex
					flex="auto"
					className={css.main}
				>
					<Suspense
						fallback={(
							<Skeleton width="100%" height="100%" />
						)}
					>
						<SvgMapLazy
							className={css.map}
							onSelectLocation={onSelectLocationHandler}
							value={ITEMS[activeIndex].regions}
							locationClassName={css.location}
						/>
					</Suspense>
				</Flex>
			</Flex>
		</>
	);

	return (
		isLgDown ? (
			<BottomSheet
				isOpen={isOpen}
				onDismiss={onDismiss}
			>
				{jsxContext}
			</BottomSheet>
		) : (
			<ModalPortal
				isOpen={isOpen}
				onDismiss={onDismiss}
				className={classNames(css.wrapper, className)}
			>
				{jsxContext}
			</ModalPortal>
		)
	);
};

ProductMapGuideModal.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
};

ProductMapGuideModal.defaultProps = {
	className: null,
	isOpen: false,
	onDismiss: null,
};

export { ProductMapGuideModal };
