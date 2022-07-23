import {useState, useEffect} from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import {JokeBtn} from './components/JokeBtn';
import {Grid, Card, Image, Header} from 'semantic-ui-react'

function App() {
  const [joke, setJoke] = useState('Press button to load joke');
  const [jokeId, setJokeId] = useState(null);
  const {speak} = useSpeechSynthesis();

  const url = "https://v2.jokeapi.dev/joke/Any";

  async function fetchJoke(){
    try {
      const res = await fetch(`${url}/${jokeId}`);
      const data = await res.json();
      if(data.type === "twopart"){
        speak({text: `${data.setup} ${data.delivery}`});
        setJoke(`${data.setup} ${data.delivery}`);
      }else{
        speak({text: data.joke});
        setJoke(data.joke);
      }
    } catch (error) {
      console.log(error);
    } 
  }
  
  return (
    <Grid centered >
      <Grid.Column width={6} className='gridPosition'>
        <Header as={'h3'} textAlign="center">{joke}</Header>
        <Card centered>
          <Image src="https://c.tenor.com/EibW8F4VJUkAAAAC/joke-jk.gif" wrapped ui={false} />
        
          <JokeBtn handleClick={fetchJoke}/>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default App
