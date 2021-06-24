import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom(): JSX.Element {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="chat illustration" />
        <strong> Create live Q&amp;A rooms </strong>
        <p> Take your students questions in real-time </p>
      </aside>
      <main>
        <div className="main-content">
          <h1> Luna App </h1>
          <h2> Create a new room </h2>
          <form>
            <input
              type="text"
              placeholder="Type the room code"
            />
            <Button type="submit"> Create Room </Button>
          </form>
          <p> Do you want to enter in a existing room? <Link to="/"> Click Here! </Link> </p>
        </div>
      </main>
    </div>
  )
}