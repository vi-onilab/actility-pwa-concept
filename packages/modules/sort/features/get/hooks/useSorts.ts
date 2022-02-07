import { useSortsQuery } from '~modules/sort/graphql/queries/Sorts'

const useSorts = () => {
    const { data: { sorts: data = null } = {}, loading } = useSortsQuery()

    return {
        data,
        loading,
    }
}

export default useSorts
