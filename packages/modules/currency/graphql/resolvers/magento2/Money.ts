import { Resolvers } from '~modules/graphql'
import { convertMoneyToText } from '~modules/currency/utils'

const Money: Resolvers['Money'] = {
    text: async (money) => convertMoneyToText(money),
}

export default Money
