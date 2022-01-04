import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ShowMore } from 'elements/ShowMore';
import {
	SplitBox,
	SplitBoxHeader,
	SplitBoxMain,
	SplitBoxSide,
	SplitBoxTitle,
} from 'elements/SplitBox';
import { Flex } from 'elements/Flex';
import {
	Spec,
	SpecGroup,
	SpecLabel,
	SpecRow,
	SpecValue,
} from 'elements/Spec';
import { MediaBreakpointUp, useMediaBreakpoint } from 'providers';
import { Container } from 'elements/Container';
import { ProductSection, useProductContext } from 'modules/Product';

import css from './ProductSectionSpecifications.module.scss';

const MAX_VISIBLE_GROUPS = 2;

const ProductSectionSpecifications = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const { isBreakpointDown } = useMediaBreakpoint();
			const isMediaLg = isBreakpointDown('lg');
			const [isVisibleMore, setVisibleMore] = useState(false);
			const product = useProductContext();

			const list = product?.specifications || [];

			if (list?.length < 1 || (product?.isSimpleProduct && isMediaLg)) {
				return null;
			}

			return (
				<ProductSection
					id="specifications"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<SplitBoxSide>
								<SplitBoxHeader>
									<SplitBoxTitle>Specifications</SplitBoxTitle>
								</SplitBoxHeader>
							</SplitBoxSide>
							<SplitBoxMain>
								<Flex
									wrap="wrap"
									alignItems="start"
								>
									<Spec>
										{(list?.slice?.(0, (!isVisibleMore && ((isMediaLg && !product?.isExistCustomization) || !isMediaLg) ? 2 : list.length)))?.map?.(({ options }, index) => (
											<SpecGroup
												key={index}
											>
												{options?.map?.(({ label, value }, optionIndex) => (
													<SpecRow
														key={optionIndex}
													>
														<SpecLabel>
															{label}
														</SpecLabel>
														<SpecValue>
															{value}
															{/* <Rating variant="single" value="5" className={css.rating} /> */}
														</SpecValue>
													</SpecRow>
												))}
											</SpecGroup>
										))}
									</Spec>
									{!isVisibleMore && ((isMediaLg && !product?.isExistCustomization) || !isMediaLg) && list.length > MAX_VISIBLE_GROUPS && (
										<MediaBreakpointUp name="lg">
											<ShowMore
												onClick={() => setVisibleMore(true)}
											>
												See all specification
											</ShowMore>
										</MediaBreakpointUp>
									)}
								</Flex>
							</SplitBoxMain>
						</SplitBox>
					</Container>
				</ProductSection>
			);
		},
	)
);

ProductSectionSpecifications.propTypes = {
	className: PropTypes.string,
};

ProductSectionSpecifications.defaultProps = {
	className: null,
};

export { ProductSectionSpecifications };
