import Navbar from './components/Navbar'
import axios from 'axios'
import Cookies from "js-cookie"
import Profile from './components/Profile'
import Channel from './components/Channel'


function App() {
  // axios.post("/api/users/login",{
  //     username: "bobo",
  //     email: "bob@gmail.com",
  //     password: "12345678"
  //   }
  //   )
  // .then((res) => {
  //   let userDetails = res.data.data.user
  //   Cookies.set("user", JSON.stringify(userDetails))
  // })
  // .catch(error => console.log(error))

  return (
    <div className='flex justify-center'>
      <Navbar />
      {/* <Sidebar /> */}
      {/* <div className=' ml-64 p-8'> */}
      <div className='mt-36'>
        <Channel/>
      </div>
    </div>
  )
}

export default App
