import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { BottomSheet } from 'elements/BottomSheet';
import { StarPicker } from 'elements/StarPicker';
import { Input } from 'elements/Input';
import { useReviewCreateForm, WriteReviewSuccess } from 'modules/Review';
import { Error } from 'elements/Error';

import css from './WriteReviewSheet.module.scss';

const WriteReviewSheet = (
	{
		onDismiss,
		isOpen,
		className,
		sku,
	},
) => {
	const {
		isLoading,
		isCompleted,
		register,
		fields,
		form,
		ratings,
		onSubmit,
		reset,
	} = useReviewCreateForm({ sku, isLoadingRatings: isOpen });

	return (
		<BottomSheet
			className={classNames(css.wrapper, className)}
			onDismiss={() => {
				onDismiss?.();
				reset();
			}}
			isOpen={isOpen}
		>
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
							<Error
								className={css.ratingStarPicker}
								value={form.formState.errors?.[fields.rating()]?.[ratingId]?.message}
							>
								<StarPicker
									key={ratingId || index}
									value={form.getValues(fields.rating(ratingId))}
									onChange={(value) => (
										form.setValue(fields.rating(ratingId), value)
									)}
									data={ratingOptions}
									title={ratingCode}
								/>
							</Error>
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

					<button type="submit" className={css.button}>
						<span className={css.buttonText}>
							{isLoading ? 'Submit review...' : 'Submit review'}
						</span>
					</button>
				</form>
			)}
		</BottomSheet>
	);
};

WriteReviewSheet.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	sku: PropTypes.string,
};

WriteReviewSheet.defaultProps = {
	className: null,
	isOpen: null,
	onDismiss: null,
	sku: null,
};

export { WriteReviewSheet };
