import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	ConsoleIcon, ExitIcon, MapMarkerIcon, OrdersIcon, SellerListIcon, UserIcon,
} from 'icons';
import { useCustomerLogout, useOutsideClick, useRouter } from 'hooks';
import { Popover, PopoverDivider, PopoverItem } from 'elements/Popover';

import css from './HeaderTopCustomer.module.scss';

const HeaderTopCustomer = (
	{
		className,
	},
) => {
	const onCustomerLogout = useCustomerLogout();
	const {
		getMyAccountUrl,
		getMyOrdersUrl,
		getMyAddressesUrl,
	} = useRouter();
	const buttonRef = useRef(null);
	const dropdownRef = useRef(null);
	const [isOpen, setOpen] = useState(false);

	useOutsideClick(() => isOpen && setOpen(false), [buttonRef, dropdownRef]);

	const onLogout = async () => {
		setOpen(false);
		await onCustomerLogout();
	};

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<Popover icon={SellerListIcon}>
				<PopoverItem isExternal to={getMyAccountUrl()} icon={SellerListIcon}>
					My Seller portal
				</PopoverItem>
				<PopoverItem to={null} icon={ConsoleIcon}>
					My Microsite
				</PopoverItem>
			</Popover>

			<Popover title="My account" icon={UserIcon}>
				<PopoverItem to={getMyAccountUrl()} icon={UserIcon}>
					Account Info
				</PopoverItem>
				<PopoverItem to={getMyOrdersUrl()} icon={OrdersIcon}>
					My Orders
				</PopoverItem>
				<PopoverItem to={getMyAddressesUrl()} icon={MapMarkerIcon}>
					My Addresses
				</PopoverItem>
				<PopoverItem icon={SellerListIcon}>
					Sell on ThingPark Market
				</PopoverItem>
				<PopoverDivider />
				<PopoverItem onClick={onLogout} variant="accent" icon={ExitIcon}>
					Log out
				</PopoverItem>
			</Popover>
		</div>
	);
};

HeaderTopCustomer.propTypes = {
	className: PropTypes.string,
};

HeaderTopCustomer.defaultProps = {
	className: null,
};

export { HeaderTopCustomer };
