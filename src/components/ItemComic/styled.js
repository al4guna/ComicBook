import styled from 'styled-components';

export const Item = styled.div`
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
`

export const Visual = styled.div`
	height: ${props => props.display === "true" ? '100%' : '80%'};
	width: ${props => props.display === "true" ? '40%': '100%'};
`

export const Information = styled.div`
	height: ${props => props.display === "true" ? '100%' : '20%'};
	width: ${props => props.display === "true" ? '80%' : '100%'};
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
`

export const Date = styled.p`
	font-size: 0.8em;
	color: #7d7d7d;
	text-align: center;
	margin-top: 4px;
	height: 50%;
    overflow: hidden;
`
