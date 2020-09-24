import React, { useEffect, useState } from 'react';

import { Item, Image, Name } from './styled.js';
import { PROXY_URL, VALUE_KEY } from '../../utils/const.js';

export const Avatar = ({ api }) => {
	const [image, setImage] = useState('');
	const [name, setName] = useState('')

	useEffect(() => {
		try {
			fetch(PROXY_URL + api + VALUE_KEY + "&format=json&field_list=name,image")
				.then(response => response.json())
				.then(json => {
					setName(json.results.name)
					setImage(json.results.image.icon_url)
				})
		}catch(e){
			console.log(e)
		}
	})

	return(
		<Item>
			<Image src={image} />
			<Name>{name}</Name>
		</Item>
	)
}
