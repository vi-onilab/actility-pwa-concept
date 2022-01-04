import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	Spec, SpecGroup, SpecLabel, SpecRow, SpecValue,
} from 'elements/Spec';

import css from './ProductSpecs.module.scss';

const ProductSpecs = (
	{
		className,
		variant,
		data,
	},
) => {
	const list = data?.specifications || [];

	if (list?.length < 1) {
		return null;
	}

	return (
		<Spec
			className={classNames(css.wrapper, className)}
		>
			{(list?.slice?.(0, (variant === 'quickView' ? 1 : 2)))?.map?.(({ options }, index) => (
				<SpecGroup
					key={index}
				>
					{options?.map?.(({ label, value }, optionIndex) => (
						<SpecRow
							key={optionIndex}
						>
							<SpecLabel>
								{label}
							</SpecLabel>
							<SpecValue>
								{value}
								{/* <Rating variant="single" value="5" className={css.rating} /> */}
							</SpecValue>
						</SpecRow>
					))}
				</SpecGroup>
			))}
		</Spec>
	);
};

ProductSpecs.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'quickView', false]),
	data: PropTypes.oneOfType([PropTypes.object]),
};

ProductSpecs.defaultProps = {
	className: null,
	variant: 'default',
	data: null,
};

export { ProductSpecs };
