import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';

// App.jsx에서는 Redux Provider로 전체 앱 감싸기
// React Router를 통해 페이지 라우팅
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header /> {/* 공통 헤더 */}
        <main>
          <Routes>
            <Route path="/" element={<Menu />} /> {/* 메뉴 페이지 */}
            <Route path="/cart" element={<Cart />} /> {/* 장바구니 페이지 */}
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;





// import { useState } from 'react'
// import './App.scss'
// import data from './assets/data'
// import Header from './components/Header'
// import Menu from './components/Menu'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './components/Cart'

// function App() {
//   const [ menu, setMenu ] = useState(data.menu)
//   const [ cart, setCart ] = useState([])
//   console.log(cart)

//   return (
//     <div>
//       <Header />
//       <main>
//         <Routes>
//           <Route path='/' element={<Menu menu={menu} cart={cart} setCart={setCart} />}/>
//           <Route path='/cart' element={<Cart menu={menu} cart={cart} setCart={setCart} />}/>
//         </Routes>
//       </main>
//     </div>
//   )
// }

// export default App
