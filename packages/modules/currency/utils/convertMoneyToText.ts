import { $currency, $language } from '@pwa-concept/core/models'
import { Money } from '@pwa-concept/modules/graphql'

const convertMoneyToText = (
    money: number | Money,
    {
        digits = 2,
        locale = ($language.current || 'en-US'),
        currency = ($currency.current || 'EUR'),
    } = {},
): string => {
    const value: number = +(money as Money)?.value || +(money as number) || 0
    const formatLocale = locale?.replace?.('_', '-')

    try {
        return new Intl.NumberFormat(formatLocale, {
            style: 'currency',
            currency,
            currencyDisplay: 'symbol',
            minimumFractionDigits: digits,
            maximumFractionDigits: digits,
        }).format(value)
    } catch {
        try {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency,
                currencyDisplay: 'symbol',
                minimumFractionDigits: digits,
                maximumFractionDigits: digits,
            }).format(value)
        } catch {
            return '0.00'
        }
    }
}

export default convertMoneyToText
