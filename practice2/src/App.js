import './App.css';
import { Mainpage, Detailpage, Wavepage, } from './pages'
import { Routes, Route, Link, useNavigate, } from 'react-router-dom'
import { useEffect } from 'react';

const App = () => {
  let navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem('userlist') ?? localStorage.setItem('userlist', JSON.stringify([]))
  }, [])

  return (
    <div className="App">
      <div className="nav">
        <Link to="/">홈으로</Link>
        <Link to="/detail">상세페이지</Link>
        <span onClick={() => { navigate('/') }}>홈으로</span>
        <span onClick={() => { navigate('/detail/1') }}>상세페이지</span>
        <span onClick={() => { navigate(-1) }}>뒤로빤스런하기</span>
      </div>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/detail/:id" element={<Detailpage/>}/>
        <Route path="/wave" element={<Wavepage/>}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  )
};

export default App;
