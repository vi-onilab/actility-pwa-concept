import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { domToReact } from 'html-react-parser';

import css from './ContentParserCaptionTableInTable.module.scss';

const ContentParserCaptionTableInTable = (
	{
		data,
	},
) => {
	const columns = data?.children?.reduce?.((result, { name, children }) => {
		if (children && name === 'tbody') {
			children
				?.filter((item) => item.name === 'tr')
				?.forEach((item) => {
					item?.children?.forEach((column) => {
						if (column.name === 'td') {
							result.push(
								domToReact([column.children?.find((table) => table.name === 'table')]),
							);
						}
					});
				});
		}

		return result;
	}, []);

	return (
		<div className={classNames(css.wrapper)}>
			{columns?.map((item, index) => (
				<div
					key={index}
					className={css.column}
				>
					{item}
				</div>
			))}
		</div>
	);
};

ContentParserCaptionTableInTable.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

ContentParserCaptionTableInTable.defaultProps = {
	data: {},
};

export { ContentParserCaptionTableInTable };
