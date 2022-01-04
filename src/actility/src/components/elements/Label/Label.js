import PropTypes from 'prop-types';
import { Flex } from 'elements/Flex';
import { classNames } from 'helpers';
import { ProductFormModalTooltip } from 'modules/Product/elements/Form/elements/ModalTooltip';

import css from './Label.module.scss';

const Label = (
	{
		className,
		children,
	},
) => (
	<Flex
		alignItems="center"
		className={classNames(css.wrapper, className)}
	>
		<p className={css.label}>
			{children}
			<ProductFormModalTooltip className={css.labelTooltip}>
				<header className={css.header}>
					<h3 className={css.headerTitle}>ThingPark Ready LoRaWAN® Gateway*</h3>
				</header>
				<main className={css.main}>
					<div className={css.text}>
						<p className={css.textDescription}>
							ThingPark Connected devices have been extensively tested through LoRaWAN use
							cases and application integration to confirm interoperability in networks
							powered by Actility’s network server and management software. ThingPark has been
							selected by market leaders such as Orange, Proximus, Swisscom, Cisco, Inmarsat,
							KPN, and more. cleardot
						</p>
					</div>
				</main>
			</ProductFormModalTooltip>
		</p>
	</Flex>
);

Label.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

Label.defaultProps = {
	children: null,
	className: null,
};

export { Label };
