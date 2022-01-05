import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	SplitBox,
	SplitBoxHeader,
	SplitBoxMain,
	SplitBoxSide,
	SplitBoxText,
	SplitBoxTitle,
} from 'elements/SplitBox';
import { ShowMore } from 'elements/ShowMore';
import { Flex } from 'elements/Flex';
import { Container } from 'elements/Container';
import { ProductSection } from 'modules/Product';

import css from './ProductSectionSellerQuestions.module.scss';

const ProductSectionSellerQuestions = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => (
			<ProductSection
				id="seller-questions"
				ref={ref}
			>
				<Container>
					<SplitBox
						className={classNames(css.wrapper, className)}
					>
						<SplitBoxSide>
							<SplitBoxHeader>
								<SplitBoxTitle>
									Seller questions
								</SplitBoxTitle>
								<SplitBoxText>
									43 questions
								</SplitBoxText>
							</SplitBoxHeader>
							<Flex className={css.buttons}>
								<button
									type="submit"
									className={css.button}
								>
									Ask your question
								</button>
								<button
									type="submit"
									className={css.button}
								>
									Request a quote
								</button>
							</Flex>
						</SplitBoxSide>
						<SplitBoxMain>
							<Flex
								wrap="wrap"
								alignItems="start"
							>
								<div className={css.item}>
									<div className={css.question}>
										<span className={css.name}>Q:&nbsp;</span>
										Hi, does this device works in Germany?
									</div>
									<div className={css.answer}>
										<span className={css.name}>A:&nbsp;</span>
										Dear, Thank you for your inquiry. Our device supports EU868, which is
										standard LoRaWAN frequency in Europe. However, it is advised that you
										check
										the LoRaWAN frequency around your region. Thank you again for your
										inquiry.
									</div>
								</div>
								<div className={css.item}>
									<div className={css.question}>
										<span className={css.name}>Q:&nbsp;</span>
										Hi, 1. Does it support lorawan ? 2. Can I use it with anyother private
										lorawan
										network? 3. Do you provide the DevEUI
										and AppKeys (in case of Lorawan )?
									</div>
									<div className={css.answer}>
										<span className={css.name}>A:&nbsp;</span>
										Dear Arun Kandasamy, I hope you are well. Thank you for your inquiry. As
										for
										your questions, 1. Does it support lorawan ? Yes, it does support
										LoRaWAN.
										However, you should also consider the frequency they use for&nbsp;
										<button
											type="submit"
											className={css.readMore}
										>
											+ Read more
										</button>
									</div>
								</div>
								<ShowMore>See all 43 questions</ShowMore>
							</Flex>
						</SplitBoxMain>
					</SplitBox>
				</Container>
			</ProductSection>
		),
	)
);

ProductSectionSellerQuestions.propTypes = {
	className: PropTypes.string,
};

ProductSectionSellerQuestions.defaultProps = {
	className: null,
};

export { ProductSectionSellerQuestions };
