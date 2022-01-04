import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { Counter } from 'elements/Counter';
import { CounterList } from 'elements/Counter/List';
import { CounterItem } from 'elements/Counter/Item';
import { MicrositeSectionLayout } from 'modules/Microsite';

import css from './MicrositeSectionBusinessProfile.module.scss';

const MicrositeSectionBusinessProfile = (
	forwardRef(
		(
			{ vendor },
			ref,
		) => {
			if (!vendor?.businessProfile?.items?.length) {
				return null;
			}

			return (
				<MicrositeSectionLayout
					ref={ref}
					id="profile"
					variant="primary"
				>
					<Container variant="small">
						<div className={css.containerHeader}>
							<h2 className={css.containerHeaderTitle}>Business Profile</h2>
						</div>
						<Counter>
							<CounterList>
								{vendor?.businessProfile?.items?.map(({ label, value }, index) => (
									<CounterItem
										key={index}
										count={value}
									>
										{label}
									</CounterItem>
								))}
							</CounterList>
						</Counter>
					</Container>
				</MicrositeSectionLayout>
			);
		},
	)
);

MicrositeSectionBusinessProfile.propTypes = {
	vendor: PropTypes.shape({
		businessProfile: PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.shape({
				label: PropTypes.string,
				value: PropTypes.string,
			})),
		}),
	}),
};

MicrositeSectionBusinessProfile.defaultProps = {
	vendor: null,
};

export { MicrositeSectionBusinessProfile };
