import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 0 auto;
	padding: 10px 0px;

	@media (max-width: 730px) {
		flex-direction: column;
	}
`

export const Information = styled.div`
	width: 60%;
	@media (max-width: 730px) {
		width: 100%;
		order: 2;
	}
`

export const Cover = styled.div`
	width: 30%;
	height: 70vh;
	@media (max-width: 730px) {
		width: 100%;
		order: 1;
	}
	
`


export const Image = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 5px;
	@media (max-width: 730px) {
		height: 100%;
	}

`

export const Back = styled(Link)`
	position: absolute;
	left: 10px;
	text-decoration: none;
	color: #000;
	top: 14px;
`