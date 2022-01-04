import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { classNames } from 'helpers';
import { Input } from 'elements/Input';
import { Error } from 'elements/Error';
import { Select } from 'elements/Select';
import { Checkbox } from 'elements/Checkbox';
import { useAuthContext } from 'modules/Auth';

import css from './AuthAdditionalInfo.module.scss';

const PROFILE_OPTIONS = [
	{
		label: 'System integrator',
		value: 1,
	},
	{
		label: 'Developer',
		value: 2,
	},
	{
		label: 'Academician',
		value: 3,
	},
	{
		label: 'Solution provider',
		value: 4,
	},
	{
		label: 'Reseller',
		value: 5,
	},
	{
		label: 'Application provider',
		value: 6,
	},
	{
		label: 'Other',
		value: 7,
	},
];

const INTERESTED_LIST = [
	{
		label: 'devices',
		value: 1,
	},
	{
		label: 'gateways',
		value: 2,
	},
	{
		label: 'modules',
		value: 3,
	},
	{
		label: 'certifications',
		value: 4,
	},
	{
		label: 'solutions',
		value: 5,
	},
	{
		label: 'applications',
		value: 6,
	},
	{
		label: 'technical info',
		value: 7,
	},
	{
		label: 'connectivity',
		value: 8,
	},
];

const DISCOVERED_US_OPTIONS = [
	{
		label: 'Through Actility services',
		value: 1,
	},
];

const AuthAdditionalInfo = (
	{
		className,
	},
) => {
	const { onDismiss } = useAuthContext();
	const {
		register,
	} = useForm();

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<p className={css.title}>
				Please complete your&nbsp;
				profile with the next information
			</p>
			<Error>
				<Input
					{...register('companyName')}
					className={css.input}
					label="Company name"
				/>
			</Error>
			<Error>
				<Select
					{...register('profile')}
					className={css.input}
					label="Profile"
					options={PROFILE_OPTIONS}
				/>
			</Error>
			<Error>
				<Input
					{...register('vatNumber')}
					className={css.input}
					label="VAT number"
				/>
			</Error>
			<Error>
				<Input
					{...register('position')}
					className={css.input}
					label="Your position"
				/>
			</Error>
			<div className={css.options}>
				<p className={css.optionsTitle}>You are interested in:</p>
				<div className={css.optionsList}>
					{INTERESTED_LIST.map(({ label, value }) => (
						<Checkbox
							key={value}
							value={value}
							{...register(`interested.${value}`)}
						>
							{label}
						</Checkbox>
					))}
				</div>
			</div>

			<Select
				{...register('discovered')}
				label="How you discovered us?"
				className={css.discoveredUsSelect}
				options={DISCOVERED_US_OPTIONS}
			/>
			<button type="submit" className={css.button}>Save</button>
			<button
				onClick={onDismiss}
				type="button"
				className={classNames(css.button, css.buttonSimple)}
			>
				Skip for now
			</button>
		</div>
	);
};

AuthAdditionalInfo.propTypes = {
	className: PropTypes.string,
};

AuthAdditionalInfo.defaultProps = {
	className: null,
};

export { AuthAdditionalInfo };
