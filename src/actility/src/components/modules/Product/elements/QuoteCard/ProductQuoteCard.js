import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { InputNumber } from 'elements/InputNumber';

import css from './ProductQuoteCard.module.scss';

const ProductQuoteCard = (
	{
		className,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		<div className={css.image}>
			<img src="" alt="" />
		</div>
		<div className={css.content}>
			<div className={css.header}>
				<p className={css.headerTitle}>Abeeway Low-Power Asset Tracking Evaluation Kit - Private Network</p>
			</div>
			<div className={css.bottomContent}>
				<ul className={css.params}>
					<li className={css.param}>
						<p className={css.paramTitle}>SKU:</p>
						<p className={css.paramValue}>SOL-ACT-COLD-CHAIN</p>
					</li>
					<li className={css.param}>
						<p className={css.paramTitle}>RF Region:</p>
						<p className={css.paramValue}>EU868</p>
					</li>
				</ul>
				<div className={css.control}>
					<InputNumber variant="small" min="0" max="99" value="1" className={css.controlCounter} />
					<div className={css.controlPrice}>€675.00</div>
				</div>
			</div>
		</div>
	</div>
);

ProductQuoteCard.propTypes = {
	className: PropTypes.string,
};

ProductQuoteCard.defaultProps = {
	className: null,
};

export { ProductQuoteCard };
