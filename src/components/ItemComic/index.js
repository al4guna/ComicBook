import React, { useState } from 'react';

import { Item, Visual, Information, Image, Title, Date } from './styled.js';

export const ItemComic = (props) => {
	const mode = props.mode.toString();
	const { name, image, date_added, issue_number } = props

	let id = props.api_detail_url.split("/")[5]
	return(
		<Item display={mode} to={`/detail/${id}`}>
			<Visual display={mode}>
				<Image src={image.original_url} alt="imagen"/>
			</Visual>
			<Information display={mode}>
				<Title>{name} #{issue_number}</Title>
				<Date>{date_added}</Date>
			</Information>
		</Item>
	)
}
