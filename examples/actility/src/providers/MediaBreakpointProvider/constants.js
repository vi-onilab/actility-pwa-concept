import { makeVar } from '@apollo/client';

import css from '../../styles/_vars.scss';

const BREAKPOINTS = (
	css.gridBreakpoints
		.replace(/(px|rem)/igm, '')
		.split(',')
		.map((value) => (
			value
				.trim()
				.split(' ')
		))
		.reverse()
);

const currentBreakpointIndex = makeVar(null);

export { currentBreakpointIndex, BREAKPOINTS };
