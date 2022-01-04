import {
	createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ProductFormStepConfiguratorModal } from 'modules/Product';
import { useForm } from 'react-hook-form';
import { useCurrencyContext } from 'providers';
import { ProductFormDetailsModal } from 'modules/Product/elements/Form/elements/DetailsModal';
import { useCartAddItem } from 'hooks';

const ProductFormContext = createContext({
	onOpenConfigurator: () => null,
	onOpenDetail: () => null,
	onAddToCart: () => null,
	form: null,
	setValueByOption: () => null,
	getDetails: () => null,
	total: null,
	count: null,
});
const useProductFormContext = () => useContext(ProductFormContext);

const ProductFormProvider = (
	{
		children,
		data,
	},
) => {
	const [onAddToCart] = useCartAddItem({ watch: false });
	const [isOpenConfigurator, setOpenConfigurator] = useState(false);
	const [isOpenDetail, setOpenDetail] = useState(false);
	const [count, setCount] = useState(1);
	const [totalOptions, setTotalOptions] = useState(0);
	const { transform } = useCurrencyContext();
	const form = useForm({ mode: 'all' });

	const productPrice = (data?.calculatedPrice?.current?.value || 0);

	const setNewTotal = (seek) => (
		setTotalOptions((prev) => (
			Math.max(0, prev + seek)
		))
	);

	const total = ((totalOptions + productPrice) * count);

	const value = {
		onOpenConfigurator: () => setOpenConfigurator(true),
		onOpenDetail: () => setOpenDetail(true),
		onAddToCart: async () => {
			if (form.formState.isValid) {
				const { subscription, ...options } = form.getValues();

				const selectedOptions = Object.values(options).flat();

				await onAddToCart(data, count, { selectedOptions });
			}
		},
		form,
		getDetails: () => (
			data?.customizeOptions?.reduce?.((result, { label, code, values }) => {
				const formValue = form.getValues(code);

				const activeValues = values?.filter((option) => (
					Array.isArray(formValue) ? (
						formValue.includes(option?.value)
					) : (
						option?.value === formValue
					)
				)) || [];

				if (activeValues.length) {
					result.push({
						label,
						values: activeValues.map(({ label: valueLabel, currentPrice }) => ({
							label: valueLabel,
							currentValue: currentPrice?.label,
							initialPrice: null,
						})),
					});
				}

				return result;
			}, [
				{
					label: 'Product price',
					values: [
						{
							label: data?.name,
							currentValue: data?.calculatedPrice?.current?.label,
							initialPrice: data?.calculatedPrice?.initial?.label,
						},
					],
				},
			])
		),
		setValueByOption: (option, optionValue) => {
			if (option?.type && option?.code) {
				const currentValue = form.getValues(option.code) || [];

				if (option.type === 'checkbox') {
					if (!optionValue?.currentPrice?.value) {
						if (currentValue?.includes(optionValue.value)) {
							form.setValue(option.code, []);
						} else {
							setNewTotal(
								-option
									?.values
									?.filter((find) => find?.currentPrice?.value !== undefined && currentValue?.includes(find?.value))
									?.reduce((result, { currentPrice }) => result + currentPrice.value, 0),
							);
							form.setValue(option.code, [optionValue.value]);
						}
					} else if (currentValue?.includes?.(optionValue.value)) {
						form.setValue(option.code, currentValue.filter((item) => item !== optionValue.value));
						setNewTotal(-optionValue.currentPrice?.value);
					} else {
						form.setValue(option.code, [...(form.getValues(option.code) || []), optionValue.value]);
						setNewTotal(optionValue.currentPrice?.value);
					}
				} else {
					const valueInstance = option?.values?.find((findValue) => findValue?.value === currentValue);

					form.setValue(option.code, optionValue?.value);
					setNewTotal(-(valueInstance?.currentPrice?.value || 0) + (optionValue?.currentPrice?.value || 0));
				}
				form.trigger();
			}
		},
		total: transform(total),
		count: {
			value: count,
			setValue: (newValue) => setCount(Math.max(1, newValue)),
		},
	};

	useEffect(() => {
		if (data?.customizeOptions?.length) {
			data?.customizeOptions.forEach(({ code, required = false }) => {
				form.register(`${code}`, {
					required: !!required,
				});
			});

			form.trigger();
		}
	}, [data, form]);

	return (
		<ProductFormContext.Provider value={value}>
			{children}

			<ProductFormStepConfiguratorModal
				isOpen={isOpenConfigurator}
				data={data}
				onDismiss={() => setOpenConfigurator(false)}
			/>

			<ProductFormDetailsModal
				isOpen={isOpenDetail}
				onDismiss={() => setOpenDetail(false)}
			/>
		</ProductFormContext.Provider>
	);
};

ProductFormProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

ProductFormProvider.defaultProps = {
	children: null,
	data: null,
};

export { ProductFormProvider, useProductFormContext };
