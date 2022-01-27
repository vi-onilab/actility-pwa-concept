import { gql } from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom'

const UrlResolverQuery = gql`
	query CmsPage($id: String!) {
		cmsPage(identifier: $id) {
			cms_widgets_config {
				entries {
					class_name
					id
					position
					widget_content
					widget_type
				}
				id
				widgets_mode_enabled
			}
			content
			content_heading
			identifier
			meta_description
			meta_keywords
			meta_title
			page_layout
			title
			url_key
		}
	}
`

const useCmsGetPage = () => {
	const { pathname } = useLocation()
	const { data: { urlResolver = null } = {}, loading } = useQuery(UrlResolverQuery, {
		variables: {
			url: pathname,
		},
	})

	return {
		data: loading && !urlResolver ? null : {
			id: urlResolver?.id,
			type: urlResolver?.type?.toLowerCase?.(),
			redirectCode: urlResolver?.redirectCode,
			url: urlResolver?.relative_url,
		},
		loading,
	}
}

export default useCmsGetPage
