import React, { useState, useEffect } from 'react';
import { BsGrid3X3Gap } from 'react-icons/bs'; 
import { FaList } from 'react-icons/fa';

import { Header } from '../../components/Header';
import { ItemComic } from '../../components/ItemComic';
import { Section, Information, Title, Options, Button } from './styled.js';
import { Loading } from '../../components/Loading';

import { ISSUES_URL } from '../../utils/const.js';

const Home = () => {
	const [mode, setMode] = useState(true)
	const [loading, setLoading] = useState(false);
	const [comics, setComics] = useState([]);

	const handleModeList = () => {
		setMode(true)
	}

	const handleModeGrid = () => {
		setMode(false)
	}

	useEffect(() => {
		try {
			setLoading(true)
			fetch(ISSUES_URL)
				.then(response => response.json())
				.then(json => {
					setComics(json.results)
					setLoading(false)
				})
		}catch(e) {
			console.log(e)
		}
	}, [])

	const colorList = mode ? "#000" : "#7d7d7d" ;
	const colorGrid = !mode ? "#000" : "#7d7d7d";
	return(
		<section>
			<Header>
				<Information>
					<div> <Title>Latest Isuues</Title></div>
					<Options>
						<Button onClick={handleModeList} color={colorList}> <FaList/> List</Button>
						<Button onClick={handleModeGrid} color={colorGrid}> <BsGrid3X3Gap/> Grid</Button>
					</Options>
				</Information>
			</Header>
			<Section>
			{ loading && <Loading />}
			{
				comics.map((item, key)=> {	
					return <ItemComic {...item}  mode={mode} key={key} />
				})
			}
			</Section>
		</section>
	)
}

export default Home; 
