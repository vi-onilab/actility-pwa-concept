import { useReactiveVar } from '@apollo/client';
import { Flex } from 'elements/Flex';
import { ModalPortal } from 'elements/Modal';
import { BottomSheet, BottomSheetMain } from 'elements/BottomSheet';
import { useMediaBreakpoint } from 'providers';

import { $storeInternalError } from '../../models';

import css from './StoreProviderInternalError.module.scss';

const StoreProviderInternalError = () => {
	const internalError = useReactiveVar($storeInternalError);
	const { isBreakpointUp } = useMediaBreakpoint();

	const jsxContent = (
		<Flex
			alignItems="center"
			direction="column"
		>
			<h2>
				Oops.
			</h2>
			<p>
				{internalError?.length > 0 ? internalError : 'An error occurred, please contact us.'}
			</p>
		</Flex>
	);

	return (
		isBreakpointUp('lg') ? (
			<ModalPortal
				className={css.wrapper}
				isOpen={!!internalError}
				onDismiss={() => $storeInternalError(null)}
			>
				{jsxContent}
			</ModalPortal>
		) : (
			<BottomSheet
				className={css.wrapper}
				isOpen={!!internalError}
				onDismiss={() => $storeInternalError(null)}
			>
				<BottomSheetMain>
					{jsxContent}
				</BottomSheetMain>
			</BottomSheet>
		)

	);
};

StoreProviderInternalError.propTypes = {};

StoreProviderInternalError.defaultProps = {};

export { StoreProviderInternalError };
