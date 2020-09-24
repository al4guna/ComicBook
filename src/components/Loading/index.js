import React from 'react'

import { Container, Figure } from './styled'

export const Loading = () => {
	return(
		<Container>
			<Figure>
				<span>Cargando...</span>
			</Figure>
		</Container>
	)
}