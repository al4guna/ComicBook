import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Item = styled(Link)`
	text-decoration: none;
	background: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	cursor: pointer;
	overflow: hidden;
	margin: 10px;
	padding: 10px;
	height: 340px;
	display: ${props => props.display === "true" ? 'flex': 'inline-block'};
	width: ${props => props.display === "true" ? '100%' : '30%'};

	@media (max-width: 670px) {
		width: ${props => props.display === "true" ? '100%' : '42%'};
	}

	@media (max-width: 500px) {
		width: ${props => props.display === "true" ? '100%' : '42%'};
		height: 250px;
	}

`

export const Visual = styled.div`
	height: ${props => props.display === "true" ? '100%' : '80%'};
	width: ${props => props.display === "true" ? '40%': '100%'};

	@media (max-width: 500px) {
		width: ${props => props.display === "true" ? '45%': '100%'};
		height: ${props => props.display === "true" ? '100%' : '60%'};
	}
`

export const Information = styled.div`
	height: ${props => props.display === "true" ? '100%' : '20%'};
	width: ${props => props.display === "true" ? '80%' : '100%'};

	@media (max-width: 500px) {
		width: ${props => props.display === "true" ? '65%': '100%'};
		height: ${props => props.display === "true" ? '100%' : '40%'};
	}
`

export const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`
	
export const Title = styled.p`
	margin-top:10px;
	font-size: 0.9em;
	text-align: center;
	max-height: 50%;
	text-overflow: ellipsis;
    overflow: hidden;
	color: #000;
`

export const Date = styled.p`
	font-size: 0.8em;
	color: #7d7d7d;
	text-align: center;
	margin-top: 4px;
	height: 50%;
    overflow: hidden;
`
