import { Resolvers } from '@pwa-concept/modules/graphql'
import { convertMoneyToText } from '@pwa-concept/modules/currency/utils'

const Money: Resolvers['Money'] = {
    text: async (money) => convertMoneyToText(money),
}

export default Money
