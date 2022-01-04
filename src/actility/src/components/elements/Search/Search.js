import { SearchIcon } from 'icons';

import css from './Search.module.scss';
import { Icon } from '../Icon';

const Search = () => (
	<div className={css.searchTrigger}>
		<input type="text" className={css.search__input} placeholder="Search" />
		<button type="button" className={css.search__btn}>
			<Icon src={SearchIcon} className={css.search__icon} />
		</button>
	</div>
);

export default Search;
