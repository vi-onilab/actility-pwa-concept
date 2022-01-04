import { createElement } from 'react';
import widgetsList from './widgetsList';

const WidgetsRenderer = ({
	widgetType = 'widget_empty',
	widgetContent = {},
}) =>
	// eslint-disable-next-line max-len,implicit-arrow-linebreak,no-mixed-spaces-and-tabs
	 (widgetContent && Object.entries(widgetContent).length !== 0 ? createElement(widgetsList[widgetType] || null, widgetContent) : null);
export default WidgetsRenderer;
