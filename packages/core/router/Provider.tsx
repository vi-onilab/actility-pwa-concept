import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from './RouterConfig'

const RouterProvider: FC = ({ children }) => (
	<Router>
		<RouterConfig>
			{children}
		</RouterConfig>
	</Router>
)

export default RouterProvider
