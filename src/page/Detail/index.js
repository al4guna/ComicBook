import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

import { Header } from '../../components/Header';
import { ListComic } from '../../components/ListComic';
import { Loading } from '../../components/Loading';
import { Content, Information, Cover, Image, Back  } from './styled.js';
import { PROXY_URL, API_URL, VALUE_KEY } from '../../utils/const.js';

const Detail = (props) => {
	const [characters, setCharacters] = useState([]);
	const [locations, setLocations]  = useState([]);
	const [teams, setTeams] = useState([]);
	const [image, setImage] = useState([]);
	const [loading, setLoading] = useState(false); 
		
	useEffect(() => {
		try {
			setLoading(true)
			const ID = props.match.params.id
			const url = PROXY_URL+API_URL+"issue/"+ID+"/"+VALUE_KEY+"&format=json&field_list=image,character_credits,team_credits,location_credits";

			fetch(url)
				.then(response => response.json())
				.then(json => {
					setTeams(json.results.team_credits);
					setImage(json.results.image.original_url)
					setLocations(json.results.location_credits);
					setCharacters(json.results.character_credits);
					setLoading(false);
				})
		}catch(e){
			console.log(e)
		}
	},[])
	
	return(
		<section>
			<Header >
				<Back to="/">
					<BiArrowBack size={"20px"}/>
				</Back>
			</Header>
			<Content>
				{ loading && <Loading />}
				{ !loading && 
				<>
					<Information>	
						<div>
							<ListComic title="Characters" data={characters}/>
						</div>
						<div>
							<ListComic title="Teams" data={teams}/>
						</div>
						<div>
							<ListComic title="Locations" data={locations}/>
						</div>
					</Information>
					<Cover>
						<Image src={image} alt="imagen w" />
					</Cover>
				</>
				}
			</Content>
		</section>
	)
}

export default Detail;
