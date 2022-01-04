import PropTypes from 'prop-types';
import { ModalPortal } from 'elements/Modal';
import { StarPicker } from 'elements/StarPicker';
import { Input } from 'elements/Input';
import { useReviewCreateForm, WriteReviewSuccess } from 'modules/Review';
import { Error } from 'elements/Error';

import css from './WriteReviewModal.module.scss';

const WriteReviewModal = (
	{
		isOpen,
		onDismiss,
		sku,
	},
) => {
	const {
		ratings,
		form,
		register,
		fields,
		onSubmit,
		isCompleted,
		isLoading,
		reset,
	} = useReviewCreateForm({ sku, isLoadingRatings: isOpen });

	return (
		<ModalPortal
			isOpen={isOpen}
			onDismiss={() => {
				onDismiss?.();
				reset();
			}}
		>
			{ratings?.length > 0 ? (
				<>
					{isCompleted ? (
						<WriteReviewSuccess />
					) : (
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className={css.modalWrapper}
						>
							<h3 className={css.header}>Write a review</h3>

							<p className={css.headerText}>Please share with us your feelings</p>

							<div className={css.ratingWrapper}>
								{ratings?.map(({ ratingId, ratingCode, ratingOptions }, index) => (
									<div
										key={ratingId || index}
										className={css.ratingStarPicker}
									>
										<Error value={form.formState.errors?.[fields.rating()]?.[ratingId]?.message}>
											<StarPicker
												value={form.getValues(fields.rating(ratingId))}
												onChange={(value) => (
													form.setValue(fields.rating(ratingId), value)
												)}
												data={ratingOptions}
												title={ratingCode}
											/>
										</Error>
									</div>
								))}
							</div>

							<p className={css.headerText}>Share your feelings about the product</p>
							<Error value={form.formState.errors?.[fields.name]?.message}>
								<Input
									className={css.input}
									{...register.name}
									label="First Name and Last Name"
								/>
							</Error>
							<Error value={form.formState.errors?.[fields.summary]?.message}>
								<Input
									className={css.input}
									{...register.summary}
									label="Summary"
								/>
							</Error>
							<Error value={form.formState.errors?.[fields.impressions]?.message}>
								<Input
									className={css.input}
									{...register.impressions}
									label="Your impressions"
								/>
							</Error>

							<button type="submit" disabled={isLoading} className={css.button}>
								<span className={css.buttonText}>
									{isLoading ? 'Submitting review...' : 'Submit review'}
								</span>
							</button>

						</form>
					)}
				</>
			) : (
				<>
					Loading...
				</>
			)}
		</ModalPortal>
	);
};

WriteReviewModal.propTypes = {
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	sku: PropTypes.string,
};

WriteReviewModal.defaultProps = {
	isOpen: false,
	onDismiss: null,
	sku: null,
};

export { WriteReviewModal };
