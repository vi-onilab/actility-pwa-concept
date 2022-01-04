import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { FormProvider, useFormContext } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { SectionTitle } from 'elements/Section';
import Button from 'elements/Button';
import { ProductsQuery } from 'schemas';
import { filterObjectToSearchString } from 'modules/Filters';
import { useRouter } from 'hooks';

import {
	SearchAdvancedModalAggregationListMemo,
	SearchAdvancedModalFields,
	SearchAdvancedModalPrices,
} from './elements';

import css from './SearchAdvancedModal.module.scss';

const SearchAdvancedModal = (
	{
		isOpen,
		onDismiss,
	},
) => {
	const history = useHistory();
	const { getSearchUrl } = useRouter();
	const form = useFormContext();

	const { data: { products = null } = {}, loading } = useQuery(ProductsQuery, {
		variables: {
			withAggregations: true,
			withItems: false,
		},
		skip: !isOpen,
	});

	const onSubmitHandler = () => {
		const values = form.getValues();
		form.reset();
		history.push(getSearchUrl(null, filterObjectToSearchString(values)));
	};

	return (
		<ModalPortal
			isOpen={isOpen}
			className={css.modal}
			onDismiss={onDismiss}
			header={(
				<div className={css.modalHeader}>
					<ModalHeaderBackArrow onDismiss={onDismiss}>
						Advanced search
					</ModalHeaderBackArrow>
				</div>
			)}
		>
			<FormProvider {...form}>
				<div className={css.wrapper}>
					<SectionTitle className={css.title}>
						Advanced search
					</SectionTitle>

					{loading ? (
						'Loading...'
					) : (
						<>
							<div className={css.main}>
								<SearchAdvancedModalFields />

								<SearchAdvancedModalPrices
									min={products?.minPrice}
									max={products?.maxPrice}
								/>
							</div>

							<SearchAdvancedModalAggregationListMemo
								data={products?.aggregations}
							/>

							{ /* <button type="submit" className={css.button}>Search</button> */}
							<div className={css.categoriesRow}>
								<Button
									type="button"
									text="Search"
									onClick={onSubmitHandler}
									additionalClass={css.categoriesButton}
								/>
							</div>
						</>
					)}
				</div>

			</FormProvider>
		</ModalPortal>
	);
};

SearchAdvancedModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onDismiss: PropTypes.func.isRequired,
};

SearchAdvancedModal.defaultProps = {};

export { SearchAdvancedModal };
