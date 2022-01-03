import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { CloseMenuIcon } from 'icons';
import { useScrollLock } from 'hooks';

import css from './Modal.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	search: css.variantSearch,
	login: css.variantLogin,
	bottom: css.variantBottom,
	configurator: css.variantConfigurator,
};

const Modal = (
	{
		onDismiss,
		isOpen,
		wrapperClassName,
		className,
		children,
		variant,
		header,
		footer,
	},
) => {
	const { scrollableProps } = useScrollLock(isOpen);
	const wrapperRef = useRef();
	const history = useHistory();

	// Close modal by Change route
	useEffect(() => {
		const unregister = history.listen(() => {
			onDismiss?.();
		});

		return () => {
			unregister?.();
		};
	}, [onDismiss, history]);

	// Close modal by Escape keyboard
	useEffect(() => {
		const onKeyup = (e) => {
			if (['escape', 'esc'].includes(e.key?.toLowerCase?.())) {
				onDismiss?.();
			}
		};

		window.addEventListener('keyup', onKeyup);

		return () => {
			window.removeEventListener('keyup', onKeyup);
		};
	}, [onDismiss]);

	if (!isOpen) {
		return null;
	}

	const onMouseDownHandler = (ev) => {
		if (ev?.target?.contains?.(wrapperRef.current)) {
			onDismiss?.();
		}
	};

	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
			<div
				onMouseDown={onMouseDownHandler}
				ref={wrapperRef}
				className={classNames(
					css.wrapper,
					wrapperClassName,
					variant && VARIANTS?.[variant],
				)}
			>
				<div
					className={classNames(
						css.body,
						className,
					)}
				>
					<button
						onMouseDown={onDismiss}
						type="submit"
						className={css.close}
					>
						<Icon src={CloseMenuIcon} className={css.closeIcon} />
					</button>
					{header && (
						<header className={css.header}>
							{header}
						</header>
					)}

					<main {...scrollableProps} className={css.main}>
						{children}
					</main>

					{footer && (
						<footer className={css.footer}>
							{footer}
						</footer>
					)}
				</div>
			</div>
		</>
	);
};

Modal.defaultProps = {
	className: null,
	wrapperClassName: null,
	onDismiss: null,
	variant: 'default',
	header: null,
	footer: null,
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	className: PropTypes.string,
	wrapperClassName: PropTypes.string,
	onDismiss: PropTypes.func,
	variant: PropTypes.oneOf(['default', 'search', 'login', 'bottom', 'configurator']),
	header: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	footer: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export default Modal;
