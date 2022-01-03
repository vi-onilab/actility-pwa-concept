import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Input } from 'elements/Input';
import { ModalPortal } from 'elements/Modal';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { BottomSheet } from 'elements/BottomSheet';
import { ClipIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { blobToBase64, classNames } from 'helpers';
import { FaqAskModalSuccess, FaqAskModalUploadFile } from 'modules/Faq';
import { Error } from 'elements/Error';
import { REGEX_FULL_NAME_VALIDATION } from 'constants';
import { useFormState } from 'hooks';
import { SendMessageToVendorMutation } from 'schemas';
import { $notifications } from 'models';
import { Select } from 'elements/Select';

import css from './FaqAskModal.module.scss';

const MAX_UPLOAD_FILES = 3;

const FaqAskModal = (
	{
		vendorId,
		isOpen,
		onDismiss,
	},
) => {
	const [sendMessageToVendorMutation] = useMutation(SendMessageToVendorMutation, {
		ignoreResults: true,
		variables: {
			vendorId: String(vendorId),
		},
	});
	const {
		isSubmitting,
		setErrorMessage,
		setSubmitting,
	} = useFormState();
	const [isSended, setIsSended] = useState(false);
	const {
		register,
		formState: { errors },
		watch,
		getValues,
		handleSubmit,
		setValue,
		reset,
	} = useForm({
		defaultValues: {
			files: [],
		},
		mode: 'all',
	});

	const filesValue = getValues('files') || [];

	const isUploadDisabled = filesValue?.length >= MAX_UPLOAD_FILES;

	register('files');
	watch('files');

	const onFileChangeHandler = (ev) => {
		const files = getValues('files');

		if (ev.target.files?.length > 0 && files?.length < MAX_UPLOAD_FILES) {
			const newFiles = Array.from(ev.target.files)
				.slice(0, (MAX_UPLOAD_FILES - files.length))
				.filter((el) => {
					const isImageBigger = ((el.size / 1024 / 1024) > 20);
					if (isImageBigger) {
						$notifications.addErrorNotify({
							body: 'Sorry, the file can’t be <span>larger than 20 MB</span>! Compress the file or attach another one!',
						});
					}
					return !isImageBigger;
				});
			setValue('files', [...files, ...newFiles]);
		}

		ev.target.value = '';
	};

	const onRemoveFile = (file) => {
		const files = getValues('files');

		setValue('files', files.filter((item) => item !== file));
	};

	const onSubmitHandler = async (values) => {
		if (vendorId) {
			setSubmitting(true);

			const {
				content,
				subject,
				files,
			} = values;

			try {
				const attachments = await Promise.all(files.map((file) => blobToBase64(file)));

				await sendMessageToVendorMutation({
					variables: {
						attachments: JSON.stringify(attachments),
						content,
						subject,
						// TODO: Where "name" field???????????????????????????????????????????????????
					},
				});

				reset({
					name: '',
					subject: '',
					content: '',
					files: [],
				});
				setIsSended(true);
				setSubmitting(false);
			} catch (err) {
				setErrorMessage(err?.message);
			}
		}
	};

	const jsxContent = (
		!isSended ? (
			<form
				onSubmit={handleSubmit(onSubmitHandler)}
				className={css.form}
			>
				<h3 className={css.title}>Ask a Question</h3>
				<Error className={css.group} value={errors?.name}>
					<Input
						name="name"
						label="First Name and Last Name*"
						className={css.input}
						{...register('name', {
							required: {
								value: true,
								message: 'Name is required!',
							},
							pattern: {
								value: REGEX_FULL_NAME_VALIDATION,
								message: 'Enter your first and last name!',
							},
						})}
					/>
				</Error>
				<Error className={css.group} value={errors?.subject}>
					<Select
						name="subject"
						{...register('subject', {
							required: {
								value: true,
								message: 'Subject is required!',
							},
						})}
						label="Subject*"
						className={css.input}
					/>
				</Error>
				<Error className={css.group} value={errors?.text}>
					<Input
						name="content"
						{...register('content', {
							required: {
								value: true,
								message: 'Text is required!',
							},
						})}
						label="Text*"
						multiple
						className={css.input}
					/>
				</Error>
				<div className={css.fileList}>
					{filesValue?.map((item, index) => (
						<FaqAskModalUploadFile
							key={index}
							onClick={() => onRemoveFile(item)}
							index={index}
							data={item}
						/>
					))}
				</div>
				<label
					htmlFor="file"
					className={classNames(css.fileAdd, isUploadDisabled && css.fileAddDisabled)}
				>
					<input
						disabled={isUploadDisabled}
						type="file"
						multiple
						id="file"
						onChange={onFileChangeHandler}
						className={css.inputFile}
						accept=".png,.jpg"
					/>
					<Icon src={ClipIcon} className={css.fileIcon} />
					<p className={css.fileText}>Attach a files (no more than 3, jpg/png up to 20 MB)</p>
				</label>
				<button
					type="submit"
					disabled={isSubmitting}
					className={css.button}
				>
					<span className={css.buttonText}>
						{isSubmitting ? 'Submitting Question...' : 'Submit Question'}
					</span>
				</button>
			</form>
		) : (
			<FaqAskModalSuccess />
		)
	);

	const onDismissHandler = () => {
		onDismiss?.();
		setIsSended(false);
	};

	return (
		<>
			<MediaBreakpointUp name="lg">
				<ModalPortal
					isOpen={isOpen}
					onDismiss={onDismissHandler}
					className={classNames(css.modal, isSended && css.modalSuccess)}
				>
					{jsxContent}
				</ModalPortal>
			</MediaBreakpointUp>
			<MediaBreakpointDown name="lg">
				<BottomSheet
					onDismiss={onDismissHandler}
					isOpen={isOpen}
				>
					{jsxContent}
				</BottomSheet>
			</MediaBreakpointDown>
		</>
	);
};

FaqAskModal.propTypes = {
	vendorId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onDismiss: PropTypes.func,
	isOpen: PropTypes.bool,
};

FaqAskModal.defaultProps = {
	vendorId: null,
	onDismiss: null,
	isOpen: false,
};

export { FaqAskModal };
