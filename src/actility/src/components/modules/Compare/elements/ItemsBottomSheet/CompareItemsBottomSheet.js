import { MediaBreakpointDown } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { Image } from 'elements/Image';
import { $compare } from 'models';
import { useCompareRemoveItem } from 'hooks';

import { CloseCircleIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Link } from 'elements/Link';
import css from './CompareItemsBottomSheet.module.scss';

const CompareItemsBottomSheet = () => {
	const list = $compare.useList();
	const onRemoveFromCompare = useCompareRemoveItem();
	const [isOpen, setOpen] = $compare.useIsModalShow();

	return (
		<MediaBreakpointDown name="lg">
			<BottomSheet
				isOpen={isOpen}
				onDismiss={() => setOpen(false)}
			>
				<div className={css.wrapper}>
					<h3 className={css.title}>Compare products</h3>
					<p className={css.text}>Add at least one product to start the comparison</p>
					<div className={css.list}>
						{list?.items?.map(({
							uid,
							product,
						}, index) => {
							const key = (uid || product?.uid || product?.id || index);
							const image = product?.mediaGallery?.[0];

							return (
								<div
									key={key}
									className={css.item}
								>
									<button
										type="button"
										onClick={() => onRemoveFromCompare(product)}
									>
										<Icon src={CloseCircleIcon} className={css.itemIcon} />
									</button>
									<Image className={css.itemImage} src={image?.url} alt={image?.label} />
								</div>
							);
						})}
					</div>
					<div className={css.control}>
						{list?.itemCount < 2 ? (
							<button disabled className={css.btn} type="button">
								Compare
							</button>
						) : (
							<Link to="/compare" onClick={() => setOpen(false)} className={css.btn} type="button">
								Compare
							</Link>
						)}

					</div>

				</div>
			</BottomSheet>
		</MediaBreakpointDown>
	);
};

CompareItemsBottomSheet.propTypes = {};

CompareItemsBottomSheet.defaultProps = {};

export { CompareItemsBottomSheet };
