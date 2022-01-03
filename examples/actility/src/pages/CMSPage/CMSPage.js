import { memo } from 'react';
import { useUrlResolver } from 'hooks';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CmsPageQuery } from 'schemas';
import { Container } from 'elements/Container';
import { Error404 } from 'elements/Error404';
import parser from 'html-react-parser';

const CMSPage = () => {
	const urlResolver = useUrlResolver();
	const params = useParams();
	const id = urlResolver?.data?.relativeUrl || params?.id;

	const { data: { cmsPage = null } = {}, loading } = useQuery(CmsPageQuery, {
		variables: {
			identifier: String(id),
		},
		skip: !id,
	});

	if (loading) {
		return 'Loading...';
	}

	if (!cmsPage) {
		return (
			<Error404 />
		);
	}

	return (
		<Container>
			<h1>{cmsPage?.title}</h1>
			<div>
				{cmsPage?.content?.length > 0 ? parser(cmsPage?.content) : null}
			</div>
		</Container>
	);
};

export default memo(CMSPage);
