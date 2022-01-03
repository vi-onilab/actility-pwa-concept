import Badge from './Badge';

const Template = (args) => <Badge {...args} />;

export default {
	title: 'UI/Elements/Badge',
	component: Badge,
	decorators: [
		(Story) => (
			<div style={{ position: 'relative', display: 'flex'}}>
				<Story />
			</div>
		),
	],
	args: {
		children: '9',
	},
};

export const DefaultBadge = Template.bind({});
