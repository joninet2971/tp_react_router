import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import AlbumsContainer from './components/Album/AlbumsContainer'
import PostsContainer from './components/Post/PostsContainer'
import { Menubar } from 'primereact/menubar'
import Home from './components/Home'
import './App.css'
import 'primereact/resources/themes/md-dark-indigo/theme.css'

function App() {
  const items = [
    { label: 'Inicio', icon: 'pi pi-home', url: '/' },
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { label: 'Posts', icon: 'pi pi-book', url: '/posts' },
    { label: 'Álbumes', icon: 'pi pi-images', url: '/albums' },
  ]

  return (
    <BrowserRouter>
      <Menubar model={items} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usuarios' element={<UsersContainer />} />
        <Route path='/posts' element={<PostsContainer />} />
        <Route path='/albums' element={<AlbumsContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
