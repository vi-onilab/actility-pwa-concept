import PropTypes from 'prop-types';
import { useWishListData } from 'hooks';

const WishListProvider = ({ children }) => {
	useWishListData();

	return (
		<>
			{children}
		</>
	);
};

WishListProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

WishListProvider.defaultProps = {
	children: null,
};

export { WishListProvider };
