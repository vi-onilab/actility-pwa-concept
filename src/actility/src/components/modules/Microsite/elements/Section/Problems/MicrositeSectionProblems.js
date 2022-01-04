import { forwardRef } from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { FaqOpenAskModalButton } from 'modules/Faq';
import { Accordion } from 'elements/Accordion';
import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';

import css from './MicrositeSectionProblems.module.scss';

const MicrositeSectionProblems = forwardRef(
	({ vendor }, ref) => {
		if (!vendor?.problems?.items?.length) {
			return null;
		}

		return (
			<MicrositeSectionLayout
				ref={ref}
				id="faq"
				variant="largePaddingTop"
			>
				<Container variant="small" className={css.last}>
					<div className={css.section}>

						<div className={css.sectionLeft}>
							<h2 className={css.sectionLeftTitle}>
								If you have problems
							</h2>
							<p className={css.sectionLeftText}>
								You can take a look at the answers to common questions, and if you don&apos;t find a
								suitable
								answer,
								contact us.
							</p>
							<div className={css.sectionControl}>
								<FaqOpenAskModalButton vendorId={vendor?.id}>
									Ask a Question
								</FaqOpenAskModalButton>
							</div>
						</div>
						<div className={css.sectionRight}>
							{vendor?.problems?.items?.map?.(({ question, answer }, index) => (
								<Accordion
									key={index}
									title={question}
									variant="list"
								>
									{parser(answer || 'No yet.')}
								</Accordion>
							))}
						</div>
					</div>
				</Container>
			</MicrositeSectionLayout>
		);
	},
);

MicrositeSectionProblems.propTypes = {
	vendor: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		problems: PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.shape({
				question: PropTypes.string,
				answer: PropTypes.string,
			})),
		}),
	}),
};

MicrositeSectionProblems.defaultProps = {
	vendor: null,
};

export { MicrositeSectionProblems };
