import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { domToReact } from 'html-react-parser';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';
import { Icon } from 'elements/Icon';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';

import { ContentParserStyle } from '../Style';

import css from './ContentParserTabTable.module.scss';

const VARIANTS = {
	vertical: css.variantVertical,
	horizontal: css.variantHorizontal,
	form: css.variantForm,
};

const ContentParserTabTable = (
	{
		data,
		className,
	},
) => {
	const [value, setValue] = useState(null);
	const tbody = useMemo(() => (
		data?.children?.find(({ type, name }) => type === 'tag' && name === 'tbody')
	), [data?.children]);

	const tabs = useMemo(() => (
		tbody?.children
			?.filter(({ type, name }) => type === 'tag' && name === 'tr')
			?.reduce((result, { children }) => {
				const columns = children?.filter(({ type, name }) => type === 'tag' && name === 'td');

				if (columns?.length >= 2) {
					result.push({
						title: columns?.[0]?.children?.find((item) => item.type === 'text')?.data,
						tab: domToReact(columns?.[0]?.children),
						content: domToReact(columns?.[1]?.children),
						key: result?.length,
					});
				}

				return result;
			}, [])
	), [tbody?.children]);

	const variant = useMemo(() => {
		if (data?.attribs?.style?.includes('auto')) {
			return 'vertical';
		}

		return 'horizontal';
	}, [data]);

	const activeTab = tabs?.[value] || tabs?.[0];

	return (
		<div className={classNames(css.wrapper, variant && VARIANTS?.[variant])}>
			<div className={css.header}>
				{tabs?.map(({ tab, key }) => (
					<button
						key={key}
						type="submit"
						onClick={() => setValue(key)}
						className={classNames(css.tab, (key === value || (key === 0 && !value)) && css.isActive, className)}
					>
						<div className={css.tabContent}>
							{tab}
						</div>
						<Icon
							src={ChevronArrowRightIcon}
							className={css.tabIcon}
						/>
					</button>
				))}
			</div>

			<MediaBreakpointUp name="lg">
				<div className={css.contentWrapper}>
					<div className={css.content}>
						{activeTab?.content}
					</div>
				</div>
			</MediaBreakpointUp>

			<MediaBreakpointDown name="lg">
				<ModalPortal
					isOpen={value !== null}
					onDismiss={() => setValue?.(null)}
					className={css.modal}
					header={(
						<div>
							<ModalHeaderBackArrow onDismiss={() => setValue?.(null)}>
								{activeTab?.title}
							</ModalHeaderBackArrow>
						</div>
					)}
				>
					<ContentParserStyle className={css.content}>
						{[...(tabs || [])]
							?.sort?.((a) => (a.key === value ? -1 : 1))
							?.map?.(({ content, key }) => (
								<div
									key={key}
									className={css.contentLine}
								>
									{content}
								</div>
							))}
					</ContentParserStyle>
				</ModalPortal>
			</MediaBreakpointDown>
		</div>
	);
};

ContentParserTabTable.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	className: PropTypes.string,
};

ContentParserTabTable.defaultProps = {
	data: {},
	className: null,
};

export { ContentParserTabTable };
