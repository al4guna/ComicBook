import React from 'react';

import { Item, Visual, Information, Image, Title, Date } from './styled.js';

export const ItemComic = (props) => {
	const URL_IMG = "https://www.ecured.cu/images/thumb/1/1e/Deadpool-2.jpg/1200px-Deadpool-2.jpg"
	const mode = props.mode.toString();
	return(
		<Item display={mode}>
			<Visual display={mode}>
				<Image src={URL_IMG} alt="imagen"/>
			</Visual>
			<Information display={mode}>
				<Title>Deadpool: Secret Agent Deadpool #3 </Title>
				<Date>Octubre 03, 2018</Date>
			</Information>
		</Item>
	)
}
