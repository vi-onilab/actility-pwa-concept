import { Resolvers } from '@pwa-concept/modules/graphql'
import { convertMoneyToText } from '@pwa-concept/modules/currency/utils'

const Money: Resolvers['Money'] = {
    currency: ({ currency } = {}) => currency || null,
    text: async (money) => convertMoneyToText(money),
    value: ({ value } = {}) => value || 0,
}

export default Money
