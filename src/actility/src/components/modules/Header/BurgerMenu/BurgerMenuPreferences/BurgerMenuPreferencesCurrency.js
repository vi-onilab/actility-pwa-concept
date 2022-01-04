import { useMemo, useState } from 'react';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import { NavList, NavListItem } from 'elements/NavList';
import { $currency } from 'models';
import { useCurrencySwitcherQuery } from 'hooks';

import css from '../../Header.module.scss';

const BurgerMenuPreferencesCurrency = () => {
	const [isBottomSheet, setBottomSheet] = useState(false);
	const [selectedCurrency, setSelectedCurrency] = $currency.useCurrent();
	const { data: { currency = null } = {} } = useCurrencySwitcherQuery();

	const active = useMemo(() => (
		currency?.currenciesList?.find((curr) => curr?.value === selectedCurrency)
	), [currency, selectedCurrency]);

	if (!selectedCurrency) {
		return null;
	}

	return (
		<>
			<NavListItem
				isArrow
				onClick={() => setBottomSheet(true)}
			>
				{active?.label}
			</NavListItem>
			<BottomSheet
				className={css.bottomSheet}
				isOpen={isBottomSheet}
				onDismiss={() => setBottomSheet(false)}
				header="Choose your shipping country"
			>
				<BottomSheetMain>
					<NavList>
						{currency?.currenciesList?.map?.((item) => (
							<NavListItem
								onClick={() => {
									setSelectedCurrency(item?.value);
									setBottomSheet(false);
								}}
								key={item?.value}
							>
								{item?.label}
							</NavListItem>
						))}
					</NavList>
				</BottomSheetMain>
			</BottomSheet>
		</>
	);
};

BurgerMenuPreferencesCurrency.defaultProps = {};

BurgerMenuPreferencesCurrency.propTypes = {};

export { BurgerMenuPreferencesCurrency };
