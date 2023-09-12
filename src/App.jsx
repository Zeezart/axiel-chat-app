import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AllChat from './Components/AllChats/AllChat'
import ChatBox from './Components/ChatBox/chatbox'
import LoadingPage from './Components/LoadingPage/loadingPage'
import SignIn from './Components/SignIn/SignIn'
import Profile from './Components/Profile/profile';
import SignUp from './Components/SignUp/SignUp'
import  AuthProvider  from "../src/context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<SignUp/>} />
            <Route path='/signin' exact element={<SignIn/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/chatbox' element={<ChatBox/>} />
            <Route path='/allchat' element={<AllChat/>} />
          </Routes>
            
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
