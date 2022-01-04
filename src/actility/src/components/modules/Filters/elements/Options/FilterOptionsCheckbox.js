import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'elements/Checkbox';
import { LinkArrow } from 'elements/LinkArrow';
import { InputSearch } from 'elements/InputSearch';
import { MediaBreakpointDown, useMediaBreakpoint } from 'providers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { ProductFormModalTooltip } from 'modules/Product/elements/Form/elements/ModalTooltip';
import { useFilterContext } from '../../providers';

import css from './FilterOptions.module.scss';

const FilterOptionsCheckbox = (
	{
		data,
	},
) => {
	const { onToggleOption, isOptionChecked, shared } = useFilterContext();
	const [searchValue, setSearchValue] = useState('');
	const options = data?.payload || [];
	const { isBreakpointDown } = useMediaBreakpoint();
	const [isOpen, setOpen] = useState(false);

	const allOptionsByLetters = useMemo(() => (
		Object.entries(
			data?.payload
				?.reduce((all, current) => {
					const letter = current?.label?.[0]?.toUpperCase?.();

					if (!letter) {
						return all;
					}

					return {
						...all,
						[letter]: [
							...(all?.[letter] || []),
							current,
						],
					};
				}, {}),
		)?.sort((a, b) => (
			a[0] > b[0] ? 1 : -1
		))
	), [data?.payload]);

	const searchRegExp = new RegExp(`(${searchValue})`, 'igm');

	const visibleOptions = (
		options
			?.filter(({ label = '' }) => searchRegExp.test(label))
	);

	const slicedVisibleOptions = visibleOptions?.slice(0, 6);

	const isMore = (slicedVisibleOptions?.length !== options?.length);

	const onChangeCheckboxHandler = (value, name) => {
		onToggleOption(data?.type, name);
	};

	return (
		<>
			{data && (
				<>
					{isMore && (
						!isBreakpointDown('lg') && (
							<InputSearch
								className={css.inputSearch}
								value={searchValue}
								onChange={setSearchValue}
							/>
						)
					)}
					{slicedVisibleOptions?.map?.(({ value, label }, payloadIndex) => (
						<Checkbox
							isChecked={isOptionChecked(data?.type, value)}
							name={value}
							variant={(isBreakpointDown('lg') && 'touch') || 'filter'}
							onChange={onChangeCheckboxHandler}
							key={value || payloadIndex}
						>
							{label}
						</Checkbox>
					))}
					{isMore && !searchValue?.length && allOptionsByLetters?.length > 0 && (
						<div className={css.arrowWrapper}>
							{!isBreakpointDown('lg')
								? (
									<LinkArrow
										className={css.arrowWrapperItem}
										withArrow={false}
									>
										{`All ${options?.length || 0} option(s)`}
									</LinkArrow>
								)
								:								(
									<LinkArrow
										withArrow
										variant="filterMobile"
										className={css.arrowWrapperItem}
										onClick={() => setOpen(true)}
									>
										{`See all ${options?.length || 0}`}
									</LinkArrow>
								)}

							<div className={css.modalWrapper}>
								<p className={css.modalTitle}>
									{data?.label}
								</p>
								<div className={css.modalContent}>
									{allOptionsByLetters?.map?.(([letter, letterOptions], letterIndex) => (
										<div
											key={letter || letterIndex}
											className={css.modalBox}
										>
											<p className={css.modalBoxTitle}>{letter}</p>
											{letterOptions?.map?.(({ label, value }, optionIndex) => (
												<div className={css.modalBoxContainer}>
													<Checkbox
														onChange={onChangeCheckboxHandler}
														name={value}
														isChecked={isOptionChecked(data?.type, value)}
														key={value || optionIndex}
														className={css.modalBoxItem}
													>
														{label}
													</Checkbox>
													<ProductFormModalTooltip className={css.modalBoxTooltip} />
												</div>
											))}
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</>
			)}

			<MediaBreakpointDown name="lg">
				<ModalPortal
					isOpen={isOpen}
					onDismiss={() => setOpen(false)}
					header={(
						<div>
							<ModalHeaderBackArrow onDismiss={() => setOpen(false)}>
								{data?.label}
							</ModalHeaderBackArrow>
						</div>
					)}
					footer={(
						<div className={css.footer}>
							<button
								onClick={() => setOpen(false)}
								type="button"
								className={css.bottomControlButton}
							>
								{`Show ${shared?.itemsCount || 0} product(s)`}
							</button>
						</div>
					)}
				>
					<div>
						<InputSearch
							className={css.modalSearch}
							value={searchValue}
							onChange={setSearchValue}
						/>
						<div className={css.modalCheckboxList}>
							{visibleOptions?.map?.(({ value, label }, payloadIndex) => (
								<Checkbox
									isChecked={isOptionChecked(data?.type, value)}
									name={value}
									variant="list"
									onChange={onChangeCheckboxHandler}
									key={value || payloadIndex}
								>
									{label}
								</Checkbox>
							))}
						</div>
					</div>
				</ModalPortal>
			</MediaBreakpointDown>
		</>
	);
};

FilterOptionsCheckbox.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

FilterOptionsCheckbox.defaultProps = {
	data: null,
};

export { FilterOptionsCheckbox };
