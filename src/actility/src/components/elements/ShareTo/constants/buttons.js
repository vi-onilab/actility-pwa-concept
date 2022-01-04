import {
	CopyIcon, FacebookIcon, LinkedinIcon, TwitterIcon,
} from 'icons';
import { objectToGetParams } from 'helpers';

const SHARE_BUTTONS = [
	{
		label: 'Twitter',
		icon: TwitterIcon,
		color: '#00ACEE',
		type: 'window',
		payload: {
			make: ({ url, title }) => (
				`https://twitter.com/share?${objectToGetParams({ url, text: title })}`
			),
		},
	},
	{
		label: 'Linkedin',
		icon: LinkedinIcon,
		color: '#0E76A8',
		type: 'window',
		payload: {
			make: ({ url, title }) => (
				`https://linkedin.com/shareArticle?${objectToGetParams({ url, mini: 'true', title })}`
			),
		},
	},
	{
		label: 'Facebook',
		icon: FacebookIcon,
		color: '#3B5998',
		type: 'window',
		payload: {
			make: ({ url }) => (
				`https://www.facebook.com/sharer.php?${objectToGetParams({ u: url })}`
			),
		},
	},
	...('clipboard' in window.navigator ? [
		{},
		{
			label: 'Copy link',
			icon: CopyIcon,
			color: '#263238',
			type: 'copy',
		},
	] : []),
];

export { SHARE_BUTTONS };
