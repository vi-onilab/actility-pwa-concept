import { memo, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { CmsPageQuery } from 'schemas';
import CmsWidget from 'components/widgets';
import Parser from 'helpers/parser';
import { HomePageSkeleton } from './HomePage.skeleton';

import './HomePage.scss';

const HomePage = () => {
	const { data, loading } = useQuery(CmsPageQuery, {
		variables: {
			identifier: 'home',
		},
	});

	const widgets = useMemo(() => {
		if (!data) return;

		if (loading && data) {
			// eslint-disable-next-line consistent-return
			return data?.cmsPage?.cms_widgets_config?.entries.map(({ id, widget_content }) => <Parser key={id} content={widget_content} />);
		}

		// eslint-disable-next-line consistent-return
		return <Parser content={data.cmsPage.content} />;
	}, [data, loading]);

	return (
		<>
			{widgets || <HomePageSkeleton />}

			{/* Temporary solution to display static block styles */}
			<CmsWidget />
		</>
	);
};

export default memo(HomePage);
