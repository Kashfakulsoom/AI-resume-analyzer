import './App.css'
import { useState } from 'react';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import type { User } from "@supabase/supabase-js"

function App() {
  const [user, setUser] = useState<User | null>(null)
  return (
    <div className='px-4'>
      <Navbar user={user}/>
      <Home user={user} setUser={setUser}/>
    </div>
  )
}

export default App
