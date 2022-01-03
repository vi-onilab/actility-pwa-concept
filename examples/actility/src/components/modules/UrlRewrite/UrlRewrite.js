// import React, { useEffect } from 'react';
// import { Query } from 'react-apollo';
// import Placeholder from 'src/components/Placeholder';
// import { Redirect } from 'react-router';
// import { TEMPORARY_REDIRECT, PERMANENT_REDIRECT } from 'src/Constants/app';
// import SearchPage from '../SearchPage';
// import CmsPage from '../CmsPage';
// import ProductPage from '../ProductPage';
// import CustomerCarePage from '../CustomerCarePage';
// import { resolveUrlQuery } from '../../Queries/App';
// import { getInformationAboutUrl } from '../../Utils/resolveUrlKey';
// import Error from '../../components/Error';

// const UrlRewrite = () => {
// 	const urlInfo = getInformationAboutUrl(window.location);
// 	let info = {};

// 	const localStorageItem = localStorage.getItem(`URL_RESOLVER_${urlInfo.urlKey}`);

// 	useEffect(() => {
// 		window.scrollTo({
// 			top: 0,
// 		});
// 	}, [urlInfo.urlKey]);

// 	if (localStorageItem) {
// 		try {
// 			info = JSON.parse(localStorageItem);
// 		} catch (e) {}

// 		switch (info.type) {
// 		case 'product':
// 			return <ProductPage id={info.id} key={urlInfo.urlKey} />;
// 		default:
// 		}
// 	}

// 	const variables = {
// 		urlKey: urlInfo.urlKey,
// 	};

// 	return (
// 		<Query
// 			query={resolveUrlQuery}
// 			variables={variables}
// 		>
// 			{({ loading, error, data }) => {
// 				if (loading) return <Placeholder />;

// 				if (error || !data.urlResolver) return <Error />;
// 				const url = data.urlResolver.relative_url === '/' ? '' : data.urlResolver.relative_url;

// 				if ([TEMPORARY_REDIRECT, PERMANENT_REDIRECT].includes(data.urlResolver.redirectCode)) {
// 					return <Redirect status={data.urlResolver.redirectCode} to={`/${url}`} />;
// 				}

// 				switch (data.urlResolver.type) {
// 				case 'CMS_PAGE':
// 					return <CmsPage id={data.urlResolver.id} />;
// 				case 'PRODUCT':
// 					return <ProductPage id={data.urlResolver.id} key={urlInfo.urlKey} />;
// 				case 'CATEGORY':
// 					return <SearchPage id={data.urlResolver.id} />;
// 				case 'CUSTOMER_CARE':
// 					return <CustomerCarePage />;
// 				case 'HOMEPAGE':
// 					return <Redirect to={url} />;
// 				default:
// 					return null;
// 				}
// 			}}
// 		</Query>
// 	);
// };

// export default UrlRewrite;
