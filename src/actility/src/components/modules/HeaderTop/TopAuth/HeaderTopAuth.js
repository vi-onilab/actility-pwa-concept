import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';
import { useAuthContext } from 'modules/Auth';
import { $auth } from 'models';

import { HeaderTopCustomer } from '../TopCustomer';

import css from './HeaderTopAuth.module.scss';

const HeaderTopAuth = (
	{
		className,
	},
) => {
	const isToken = $auth.useIsToken();
	const { onOpenLogin, onOpenRegister } = useAuthContext();

	return (
		<Flex
			className={classNames(css.wrapper, className)}
		>
			{isToken ? (
				<HeaderTopCustomer />
			) : (
				<>
					<button
						type="button"
						onClick={onOpenRegister}
						className={css.buttonSignUp}
					>
						Sign up
					</button>
					<button
						type="button"
						onClick={onOpenLogin}
						className={css.buttonLogin}
					>
						Login
					</button>
				</>
			)}

		</Flex>
	);
};

HeaderTopAuth.propTypes = {
	className: PropTypes.string,
};

HeaderTopAuth.defaultProps = {
	className: null,
};

export { HeaderTopAuth };
