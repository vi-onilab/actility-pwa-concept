import { useMemo, useState } from 'react';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import { NavList, NavListItem } from 'elements/NavList';
import { getCountryIcon } from 'helpers';
import { Image } from 'elements/Image';
import { $country } from 'models';
import { useCurrencySwitcherQuery } from 'hooks';

import css from '../../Header.module.scss';

const BurgerMenuPreferencesCountry = () => {
	const [isBottomSheet, setBottomSheet] = useState(false);
	const [selectedCountry, setSelectedCountry] = $country.useCurrent();
	const { data: { currencySwitcher = null } = {} } = useCurrencySwitcherQuery();

	const active = useMemo(() => (
		currencySwitcher?.countriesList?.find((country) => country?.value === selectedCountry)
	), [currencySwitcher, selectedCountry]);

	if (!selectedCountry) {
		return null;
	}

	return (
		<>
			<NavListItem
				isArrow
				icon={
					<Image src={getCountryIcon(active?.value)} alt="" />
				}
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
						{currencySwitcher?.countries?.map?.((country) => (
							<NavListItem
								onClick={() => {
									setSelectedCountry(country?.value);
									setBottomSheet(false);
								}}
								icon={(
									<Image src={getCountryIcon(country?.value)} alt="" />
								)}
								key={country?.value}
							>
								{country?.label}
							</NavListItem>
						))}
					</NavList>
				</BottomSheetMain>
			</BottomSheet>
		</>
	);
};

BurgerMenuPreferencesCountry.defaultProps = {};

BurgerMenuPreferencesCountry.propTypes = {};

export { BurgerMenuPreferencesCountry };
