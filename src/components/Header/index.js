import React from 'react';

import { Head, Title } from './styled.js'

export const Header = (props) => {
	return(
		<Head>
			<Title> ComicBook </Title>
			<div>
				{props.children}
			</div>
		</Head>
	)
}
