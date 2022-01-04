import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { ArrowSubscribeIcon } from 'icons';
import { LinkArrow } from 'elements/LinkArrow';
import { useFormContext } from 'react-hook-form';

import css from './SubscribeForm.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	microsite: css.variantMicrosite,
};

const SubscribeForm = (
	{
		onSubmit,
		success,
		variant,
	},
) => {
	const [isLoading, setLoading] = useState(false);
	const form = useFormContext();

	return (
		<div
			className={classNames(
				css.subscribe,
				isLoading && css.isLoading,
				variant && VARIANTS?.[variant],
			)}
		>
			<div className={css.title}>Subscribe to all updates</div>
			<form
				onSubmit={form?.handleSubmit(async (...args) => {
					setLoading(true);
					await onSubmit?.(...args);
					setLoading(false);
				})}
				className={css.input}
			>
				{success?.length > 0 && (
					<div className={css.inputSuccess}>
						{success}
					</div>
				)}
				{form?.formState?.isDirty && form?.formState?.errors?.email && (
					<div className={css.inputError}>
						<p>{form?.formState?.errors?.email?.message}</p>
						<LinkArrow
							variant="smallBold"
							onClick={() => {
								form?.reset();
							}}
						>
							Try with new email
						</LinkArrow>
					</div>
				)}
				<input
					type="email"
					name="email"
					required
					disabled={isLoading || success?.length > 0}
					placeholder="Enter your e-mail"
					className={css.inputEmail}
					{...form?.register('email')}
				/>
				<button type="submit" className={css.btn}>
					<Icon src={ArrowSubscribeIcon} className={css.icon} />
				</button>
			</form>
		</div>
	);
};

SubscribeForm.propTypes = {
	variant: PropTypes.oneOf(['default', 'microsite']),
	onSubmit: PropTypes.func.isRequired,
	success: PropTypes.string,
};

SubscribeForm.defaultProps = {
	variant: 'default',
	success: null,
};

export { SubscribeForm };
