import React from 'react';
import { Link } from 'react-router-dom';

// 헤더 컴포넌트
function Header() {
  return (
    <header>
      <h1>OZ카페</h1>
      <nav>
        {/* 페이지 이동 링크 */}
        <Link to="/">메뉴</Link> | <Link to="/cart">장바구니</Link>
      </nav>
    </header>
  );
}

export default Header;

// import { Link } from "react-router-dom"

// function Header () {
//     return (
//         <header>
//             <h1>☕ 오즈 카페</h1>
//             <nav>
//                 <Link to='/'>메인</Link>
//                 <Link to='/cart'>장바구니</Link>
//             </nav>
//         </header>
//     )
// }

// export default Header