import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaBreakpoint } from 'providers';
import { SeoBox } from 'modules/Seo/Box';
import { Breadcrumb, Breadcrumbs } from 'elements/Breadcrumbs';
import { Container } from 'elements/Container';
import { CategoryBanner } from '../Banner';

import css from './CategoryLayout.module.scss';

const CategoryLayout = (
	{
		children,
		data,
	},
) => {
	const seoBlockRef = useRef(null);
	const [isReadMore, setReadMore] = useState(false);
	const { isBreakpointUp } = useMediaBreakpoint();

	return (
		<section className={css.wrapper}>
			<Breadcrumbs isHome>
				{data?.breadcrumbs?.map((breadcrumb) => (
					<Breadcrumb key={breadcrumb?.id} to={`/category/${breadcrumb?.id}`}>
						{breadcrumb?.name}
					</Breadcrumb>
				))}

				{data?.name?.length > 0 && (
					<Breadcrumb>
						{data?.name}
					</Breadcrumb>
				)}
			</Breadcrumbs>
			{data && (
				<Container variant={isBreakpointUp('lg') ? 'wide' : 'none'}>
					<CategoryBanner
						onClick={() => {
							seoBlockRef.current?.scrollIntoView?.({
								behavior: 'smooth',
								inline: 'center',
								block: 'center',
							});
							setReadMore(true);
						}}
						data={data}
					/>
				</Container>
			)}
			<main className={css.main}>
				{children}
			</main>

			<Container variant="wide">
				<div ref={seoBlockRef} />
				{data && (
					<SeoBox
						data={data}
						isReadMore={isReadMore}
						onDismiss={() => setReadMore(false)}
						onAccept={() => setReadMore(true)}
					/>
				)}
			</Container>
		</section>
	);
};

CategoryLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	data: PropTypes.oneOfType([PropTypes.object]),
};

CategoryLayout.defaultProps = {
	data: null,
};

export { CategoryLayout };
