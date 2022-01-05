import { useEffect, useMemo, useState } from 'react';
import { NavList, NavListItem } from 'elements/NavList';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import { $language } from 'models';
import { useCurrencySwitcherQuery } from 'hooks';
import { Image } from 'elements/Image';

import css from '../../Header.module.scss';

const BurgerMenuPreferencesLanguage = () => {
	const [isBottomSheet, setBottomSheet] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = $language.useCurrent();
	const { data: { currencySwitcher = null } = {} } = useCurrencySwitcherQuery();

	const active = useMemo(() => (
		currencySwitcher?.languagesList?.find((lang) => lang?.value === selectedLanguage)
	), [currencySwitcher, selectedLanguage]);

	useEffect(() => {
		if (currencySwitcher?.currentLanguageCode) {
			const { currentLanguageCode } = currencySwitcher;

			if (selectedLanguage !== currentLanguageCode) {
				const newLanguage = currencySwitcher?.languagesList?.find?.((lang) => lang?.value === selectedLanguage);

				if (newLanguage?.url) {
					window.location.href = newLanguage.url;
				}
			}
		}
	}, [currencySwitcher, selectedLanguage, setSelectedLanguage]);

	if (!selectedLanguage) {
		return null;
	}

	return (
		<>
			<NavListItem
				isArrow
				icon={(
					<Image src={active?.icon} alt="" />
				)}
				onClick={() => setBottomSheet(true)}
			>
				{active?.label}
			</NavListItem>
			<BottomSheet
				className={css.bottomSheet}
				isOpen={isBottomSheet}
				onDismiss={() => setBottomSheet(false)}
				header="Choose your language"
			>
				<BottomSheetMain>
					<NavList>
						{currencySwitcher?.languagesList?.map?.((lang) => (
							<NavListItem
								onClick={() => {
									setSelectedLanguage(lang?.value);
									setBottomSheet(false);
								}}
								icon={(
									<Image src={lang?.icon} alt="" />
								)}
								key={lang?.value}
							>
								{lang?.label}
							</NavListItem>
						))}
					</NavList>
				</BottomSheetMain>
			</BottomSheet>
		</>
	);
};

BurgerMenuPreferencesLanguage.defaultProps = {};

BurgerMenuPreferencesLanguage.propTypes = {};

export { BurgerMenuPreferencesLanguage };
