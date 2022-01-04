/* eslint-disable jsx-a11y/anchor-has-content,jsx-a11y/control-has-associated-label */
import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';
import { Image } from 'elements/Image';

import styles from './Submenu.scss';

const Submenu = memo(({
	label, onShow, onHide,
}) => {
	const content = useMemo(() => {
		switch (label) {
		default:
			return (
				<div>
					<div className={styles.submenu__categoryWrap}>
						<p>Categories</p>
						<ul>
							<li>Women’s eyeglasses</li>
							<li>Men’s eyeglasses</li>
							<li>Varifocals</li>
							<li>Workplace eyeglasses</li>
							<li>Reading eyeglasses </li>
							<li>Spectacle lenses</li>
						</ul>
						<div>
							<a href="/" className={styles.submenu__categoryLink}>All eyeglasses</a>
							<Icon src={ChevronArrowRightIcon} />
						</div>
					</div>
					<div className={styles.submenu__categoryWrap}>
						<p>Featured shops</p>
						<ul>
							<li>New Arrivals</li>
							<li>Branded eyeglasses</li>
							<li>Eyewear 2020</li>
							<li>Nerd eyeglasses</li>
							<li>Buy a Gift Vouchers</li>
							<li>Eyewear accessories</li>
						</ul>
					</div>
					<div className={styles.submenu__imagesCategory}>
						<a
							href="/"
							style={{
								background: '#F1F6F9',
							}}
						/>
						<a
							href="/"
							style={{
								background: '#F4B3BB',
							}}
						>
							<Image src="/src/assets/images/static/submenuWoman.png" alt="girl" />
						</a>
						<a
							href="/"
							style={{
								background: '#BCB1DB',
							}}
						>
							<Image src="/src/assets/images/static/submenuBoy.png" alt="boy" />
						</a>
					</div>
				</div>
			);
		}
	}, [label]);

	return (
		<div
			className={styles.submenu}
			onMouseEnter={() => onShow(label)}
			onMouseLeave={onHide}
		>
			<div className={styles.submenu__wrap}>
				{content}
			</div>
		</div>
	);
});

Submenu.propTypes = {
	label: PropTypes.string.isRequired,
	onShow: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired,
};

export default Submenu;
