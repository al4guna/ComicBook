import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './page/Home';
import Detail from './page/Detail';

import { GlobalStyled } from './styled/GlobalStyled.js'

export const Router = () => {
	return (
		<BrowserRouter>
			<GlobalStyled />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/detail/:id"  component={Detail} />
			</Switch>
		</BrowserRouter>
	)
}
