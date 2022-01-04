import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AddProductReviewMutation, RatingsQuery } from 'schemas';
import { useForm } from 'react-hook-form';

const fields = {
	name: 'name',
	summary: 'summary',
	impressions: 'impressions',
	rating: (id = null) => `rating${id ? `.${id}` : ''}`,
};

const useReviewCreateForm = ({ sku, isLoadingRatings = false }) => {
	const [addProductReview] = useMutation(AddProductReviewMutation);
	const [isCompleted, setCompleted] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const form = useForm({
		defaultValues: {
			[fields.name]: '',
			[fields.summary]: '',
			[fields.impressions]: '',
		},
	});

	const { data: { ratings = null } = {} } = useQuery(RatingsQuery, {
		skip: !isLoadingRatings,
		onCompleted(data) {
			data?.ratings?.forEach?.(({ ratingId }) => {
				form.register(fields.rating(ratingId), {
					required: {
						message: 'Required!',
						value: true,
					},
				});
				form.watch(fields.rating(ratingId));
			});
		},
	});

	const onSubmit = async (values) => {
		setLoading(true);

		try {
			await addProductReview({
				errorPolicy: 'all',
				variables: {
					input: {
						nickname: values[fields.name],
						title: values[fields.summary],
						detail: values[fields.impressions],
						product_sku: sku,
						is_recommends: '',
						rating_data: (
							values[fields.rating()]
								.map((option_id, rating_id) => (rating_id && {
									option_id,
									rating_id,
								}))
								.filter(Boolean)
						),
					},
				},
			});

			setCompleted(true);
		} catch {
			// TODO: Handle error...
		}

		setLoading(false);
	};

	const register = {
		name: form.register(fields.name, {
			required: {
				message: 'Required!',
				value: true,
			},
		}),
		summary: form.register(fields.summary, {
			required: {
				message: 'Required!',
				value: true,
			},
		}),
		impressions: form.register(fields.impressions, {
			required: {
				message: 'Required!',
				value: true,
			},
		}),
	};

	return {
		fields,
		form,
		register,
		ratings,
		isCompleted,
		isLoading,
		onSubmit,
		reset: () => {
			form.reset();
			setCompleted(false);
		},
	};
};

export { useReviewCreateForm };
