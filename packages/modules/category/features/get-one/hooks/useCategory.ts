import { useCategoryQuery } from '@pwa-concept/modules/category/graphql/queries/Category'

const useCategory = ({ id = null }: { id?: string }) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id: id?.toString?.(),
            },
        },
        returnPartialData: true,
        skip: !id,
    })

    return {
        data: data?.category,
        loading: !id || loading,
    }
}

export default useCategory
