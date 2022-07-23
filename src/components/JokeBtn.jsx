import {Button} from 'semantic-ui-react';

export function JokeBtn({handleClick}) {
  return (
    <Button primary inverted color="orange" onClick={() => handleClick()} content="Tell me a joke!" />
  )
}
