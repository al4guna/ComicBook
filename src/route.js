import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './page/Home';
import { GlobalStyled } from './styled/GlobalStyled.js'

export const Router = () => {
	return (
		<BrowserRouter>
			<GlobalStyled />
			<Switch>
				<Route path="/" > <Home/> </Route>
			</Switch>
		</BrowserRouter>
	)
}
