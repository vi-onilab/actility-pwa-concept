import { Input } from 'elements/Input';
import { Select } from 'elements/Select';
import { useFormContext } from 'react-hook-form';

import css from '../SearchAdvancedModal.module.scss';

const SearchAdvancedModalFields = () => {
	const { register } = useFormContext();

	return (
		<div className={css.form}>
			<Input
				label="Name"
				{...register('q')}
				className={css.formItem}
			/>
			<Input
				label="SKU"
				{...register('sku')}
				className={css.formItem}
			/>
			<Input
				label="Manufacturer Part number"
				{...register('manufacturer')}
				className={css.formItem}
			/>
			<Select
				label="Choose brand name or Start typing"
				{...register('brand')}
				options={[
					{
						label: 'test',
						value: 1,
					},
					{
						label: 'test 2',
						value: 2,
					},
				]}
				className={css.formItem}
			/>
		</div>
	);
};

SearchAdvancedModalFields.propTypes = {};

SearchAdvancedModalFields.defaultProps = {};

export { SearchAdvancedModalFields };
