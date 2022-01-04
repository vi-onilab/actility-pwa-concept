import { useEffect, useState } from 'react';
import { SectionTitle } from 'elements/Section';
import { Select } from 'elements/Select';
import { Skeleton } from 'elements/Skeleton';
import { ModalPortal } from 'elements/Modal';
import { getCountryIcon } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { Image } from 'elements/Image';
import { $country, $currency, $language } from 'models';
import { Flex } from 'elements/Flex';
import { useCurrencySwitcherQuery } from 'hooks';

import css from './HeaderTopStoreSwitcher.module.scss';

const HeaderTopStoreSwitcher = () => {
	const [isActive, setActive] = useState(false);
	const [selectedCountry, setSelectedCountry] = $country.useCurrent();
	const [selectedLanguage, setSelectedLanguage] = $language.useCurrent();
	const [selectedCurrency, setSelectedCurrency] = $currency.useCurrent();

	const currentCountryIcon = getCountryIcon(selectedCountry);

	const { data: { currencySwitcher = null, currency = null } = {}, loading } = useCurrencySwitcherQuery();

	useEffect(() => {
		if (currencySwitcher) {
			const currentLanguageCode = currencySwitcher?.currentLanguageCode;

			if (selectedLanguage !== currentLanguageCode) {
				const newLanguage = currencySwitcher?.languages?.find?.((lang) => lang?.locale === selectedLanguage);

				if (newLanguage?.url) {
					window.location.href = newLanguage.url;
				}
			}
		}
	}, [currencySwitcher, selectedLanguage, setSelectedLanguage]);

	return (
		<button
			type="submit"
			className={css.wrapper}
			onClick={() => setActive(true)}
		>
			<div className={css.title}>Ship to</div>
			<div className={css.trigger}>
				<div className={css.triggerValue}>
					{(loading || !currentCountryIcon) ? (
						<Skeleton className={css.triggerIcon} />
					) : (
						<Image
							src={currentCountryIcon}
							className={css.triggerIcon}
							alt=""
						/>
					)}
					<Icon src={ChevronArrowRightIcon} className={css.triggerIconSvg} />
				</div>
			</div>

			<ModalPortal
				className={css.modal}
				isOpen={isActive}
				onDismiss={() => setActive(false)}
			>
				<SectionTitle className={css.modalTitle}>
					Preferences
				</SectionTitle>

				<div className={css.modalList}>
					<Select
						value={selectedCountry}
						isSearchable
						onChange={(newValue) => setSelectedCountry(newValue)}
						label="Choose your shipping country or start typing"
						options={currencySwitcher?.countriesList}
					/>

					<Flex className={css.langAndCurrencyRow}>
						<Select
							value={selectedLanguage}
							onChange={(newValue) => setSelectedLanguage(newValue)}
							label="Language"
							options={currencySwitcher?.languagesList}
						/>

						<Select
							value={selectedCurrency}
							onChange={(newValue) => setSelectedCurrency(newValue)}
							label="Currency"
							options={currency?.currenciesList}
						/>
					</Flex>
				</div>
			</ModalPortal>
		</button>
	);
};

export { HeaderTopStoreSwitcher };
