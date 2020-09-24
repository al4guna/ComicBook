import styled, { keyframes } from 'styled-components'


const animation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: inherit;
	position: absolute;
	top: 50%;
	transform: translateY(-50%)
`

export const Figure = styled.div`
	width: 100px; 
	height: 100px; 
	border: 1px solid #555; 
	background: #62819c;
    -webkit-animation: 2s ${animation} linear infinite;
    animation: 2s ${animation} linear infinite;
    -webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
`