import { memo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Breadcrumb, Breadcrumbs } from 'elements/Breadcrumbs';
import { VendorInfoQuery } from 'schemas';
import {
	MicrositeSectionBanner,
	MicrositeSectionBestsellers,
	MicrositeSectionBusinessProfile,
	MicrositeSectionCertification,
	MicrositeSectionInfo,
	MicrositeSectionProblems,
	MicrositeSectionProducts,
	MicrositeSectionReview,
	MicrositeShippingConditions,
} from 'modules/Microsite';
import { NavigationFloat, NavigationProvider, useNavigationFloat } from 'elements/Navigation';
import { MicrositePageSkeleton } from 'pages/MicrositePage/MicrositePage.skeleton';

const MicrositePage = () => {
	const { id = null } = useParams();

	const { registerNavigation, list } = useNavigationFloat();
	const pageNavigationHiddenRef = useRef();

	const { data: { vendorInfo = null } = {}, loading } = useQuery(VendorInfoQuery, {
		variables: {
			id: Number(id),
		},
		skip: !id,
	});

	if (loading) {
		return (
			<MicrositePageSkeleton />
		);
	}

	return (
		<>
			<Breadcrumbs isHome>
				<Breadcrumb>
					{vendorInfo?.storeName}
				</Breadcrumb>
			</Breadcrumbs>

			<NavigationProvider hiddenByRef={pageNavigationHiddenRef}>
				<NavigationFloat data={list} />
			</NavigationProvider>

			<MicrositeSectionInfo
				ref={pageNavigationHiddenRef}
				data={vendorInfo}
			/>

			<MicrositeSectionBusinessProfile
				vendor={vendorInfo}
				ref={registerNavigation('Profile', { position: 0 })}
			/>
			<MicrositeSectionBestsellers
				vendor={vendorInfo}
				ref={registerNavigation('Bestsellers', { position: 1 })}
			/>
			<MicrositeSectionCertification
				vendor={vendorInfo}
				ref={registerNavigation('Certifications', { position: 2 })}
			/>
			<MicrositeSectionBanner vendor={vendorInfo} />
			<MicrositeShippingConditions
				ref={registerNavigation('Shippings', { position: 3 })}
			/>
			<MicrositeSectionReview
				vendor={vendorInfo}
				ref={registerNavigation('Ratings', { position: 4 })}
			/>
			<MicrositeSectionProducts
				vendor={vendorInfo}
				ref={registerNavigation('Brand\'s products', { position: 5 })}
			/>
			<MicrositeSectionProblems
				vendor={vendorInfo}
				ref={registerNavigation('FAQ', { position: 6 })}
			/>
		</>
	);
};

export default memo(MicrositePage);
