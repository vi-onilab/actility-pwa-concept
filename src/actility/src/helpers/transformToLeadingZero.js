const transformToLeadingZero = (value) => (
	value > 10 ? value : `0${value}`
);

export { transformToLeadingZero };
