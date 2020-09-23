import styled from 'styled-components';

export const Section = styled.div`
	width: 90%;
	margin: 0 auto;
	text-align: center;
`

export const Information = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 10px;
`

export const Title = styled.p``

export const Options = styled.div`
	display: flex;
`

export const Button = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	padding 1px 2px;
	margin: 0px 5px;
	color: ${props => props.color}; 
`
