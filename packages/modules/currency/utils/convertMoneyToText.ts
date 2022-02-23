import { $country, $currency } from '@pwa-concept/core/models'
import { Money } from '~modules/graphql'

const convertMoneyToText = (
    money: number | Money,
    {
        digits = 2,
        locale = ($country.current || 'EN'),
        currency = ($currency.current || 'EUR'),
    } = {},
): string => {
    const value: number = +(money as Money)?.value || +(money as number) || 0

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay: 'symbol',
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    }).format(value)
}

export default convertMoneyToText
