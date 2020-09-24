import React from 'react'

import {  Avatar } from '../Avatar'
import { Title, Items, Text } from './styled.js';


export const ListComic = ({title, data}) => {
    return(
        <>
        <Title>{title}</Title>
        <Items>
        {
            data.length < 1 && <Text>Sin {title}</Text>
        }
        {
        data.map((item, key) => {
            return <Avatar api={item.api_detail_url} key={key} />
        })
        }
        </Items>
        </>
    )
}