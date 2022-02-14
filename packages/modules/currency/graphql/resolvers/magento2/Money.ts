import { Resolvers } from '~modules/graphql'

const Money: Resolvers['Money'] = {
    name: async (...args) => {
        console.log(args)
        return 'sad'
    },
}

export default Money
