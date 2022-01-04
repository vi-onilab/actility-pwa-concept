import { Component } from 'react';
import PropTypes from 'prop-types';

class SliderErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return null;
		}

		return children;
	}
}

SliderErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export { SliderErrorBoundary };
