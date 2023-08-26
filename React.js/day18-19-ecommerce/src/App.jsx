import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './components/products/products/Products'
import { ProductDetails } from "./components/products/ProductDetails";
import NotFound from './pages/NotFound';
import About from './pages/About';
import LoginForm from './pages/Auth/LoginForm'
import RegisterForm from './pages/Auth/RegisterForm'
import UserSettings from './pages/UserSettings';
import { useContext, useEffect } from 'react';
import { login } from './services/auth.service';
import { gState } from './context/Context';
import { Helmet } from 'react-helmet';

const App = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()
  const {setData } = useContext(gState)
  const loginUser = async (userData) => {
    const user = await login(userData)
    setData((prevState) => {
      return {
        ...prevState , 
        isLoggedIn : true , 
        userData : user
      }
    })
    navigate('/Products')
  }
  useEffect(()=>{
    if(isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem('userData'))
      loginUser(userData)
    }
  } , [isLoggedIn])


  return <Layout>
          <Helmet>
        <title>STORE</title>
      </Helmet>
  <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/settings' element={<UserSettings/>}/>
      <Route path='/Products'>
        <Route index element={<Products/>}/>  
        <Route path="details/:id" element={<ProductDetails/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/> 
    </Routes>
  </Layout> 
  
}

export default App;
