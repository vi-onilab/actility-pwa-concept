import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { InputSearch } from 'elements/InputSearch/InputSearch';
import { Icon } from 'elements/Icon';
import { SearchIcon } from 'icons';

import { SearchModal } from './Modal';

import css from './Search.module.scss';
import { SearchAdvancedModal } from './AdvancedModal';

const Search = () => {
	const [isOpened, setOpened] = useState(false);
	const [isAdvancedOpened, setAdvancedOpened] = useState(false);
	const form = useForm();

	return (
		<FormProvider {...form}>
			<div className={css.searchTrigger}>
				<MediaBreakpointDown name="lg">
					<button
						type="submit"
						onClick={() => setOpened(true)}
						className={css.searchButton}
					>
						<Icon src={SearchIcon} />
					</button>
				</MediaBreakpointDown>

				<MediaBreakpointUp name="lg">
					<InputSearch
						onFocus={() => setOpened(true)}
						onSubmit={() => setOpened(true)}
					/>
				</MediaBreakpointUp>

				<SearchModal
					isOpen={isOpened}
					onOpenAdvanced={() => {
						setOpened(false);
						setAdvancedOpened(true);
					}}
					onDismiss={() => setOpened(false)}
				/>

				<SearchAdvancedModal
					isOpen={isAdvancedOpened}
					onDismiss={() => {
						setAdvancedOpened(false);
					}}
				/>
			</div>
		</FormProvider>
	);
};

export default Search;
