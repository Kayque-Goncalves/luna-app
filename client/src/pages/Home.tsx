import { useAuthContext } from '../contexts/AuthContext'

import illustrationImg from '../assets/images/illustration.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'
import { useHistory } from 'react-router-dom'

export function Home(): JSX.Element {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuthContext()

  async function handleCreateRoom() {
    if (!user) await signInWithGoogle()

    history.push('/rooms/new')
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google logo" />
            Create your room with Google
          </button>
          <div className="separator"> or get in an existing room </div>
          <form>
            <input
              type="text"
              placeholder="Type the room code"
            />
            <Button type="submit"> Get started </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
