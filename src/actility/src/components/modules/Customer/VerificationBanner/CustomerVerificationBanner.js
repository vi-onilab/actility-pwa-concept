import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useState } from 'react';
import { CloseTagIcon, WarningVerificationIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Container } from 'elements/Container';

import css from './CustomerVerificationBanner.module.scss';

const CustomerVerificationBanner = (
	{
		className,
		isOpen,
	},
) => {
	const [isActive, setActive] = useState(isOpen);
	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				isActive && css.isActive,
			)}
		>
			<Container className={css.container}>
				<div className={css.inner}>
					<Icon
						src={WarningVerificationIcon}
						className={css.icon}
					/>
					<div className={css.content}>
						<h3 className={css.title}>
							A verification link has been sent to your email account
						</h3>
						<p className={css.text}>
							Please click on the link just been sent to you email account to verify your
							email and continue shopping process.
						</p>
					</div>
					<button
						type="button"
						className={css.button}
						onClick={() => setActive(!isActive)}
					>
						<Icon
							src={CloseTagIcon}
							className={css.buttonIcon}
						/>
					</button>
				</div>
			</Container>
		</div>
	);
};

CustomerVerificationBanner.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
};

CustomerVerificationBanner.defaultProps = {
	className: null,
	isOpen: false,
};

export { CustomerVerificationBanner };
