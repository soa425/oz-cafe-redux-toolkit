import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

// 메뉴 페이지
function Menu() {
  // Redux store에서 menuList 조회
  const menuList = useSelector((state) => state.menu.menuList);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>메뉴</h2>
      <Link to="/cart">장바구니 보기</Link>
      <ul>
        {menuList.map(item => (
          <li key={item.id}>
            {/* 메뉴 이미지 */}
            <img src={item.img} alt={item.name} height={80} />
            {item.name} - {item.price}원
            {/* 장바구니에 추가 버튼 */}
            <button onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}>
              장바구니에 추가
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

// import { useState } from "react";
// import Item from "./Item";
// import OrderModal from "./OrderModal";

// function Menu({ menu, cart, setCart }) {
//   const [modalOn, setModalOn] = useState(false);
//   const [modalMenu, setModalMenu] = useState(null);
//   if (!menu)
//     return (
//       <div style={{ textAlign: "center", margin: "80px" }}>
//         {" "}
//         메뉴 정보가 없어요!
//       </div>
//     );

//   const categorys = Object.keys(menu);
//   return (
//     <>
//       {categorys.map((category) => {
//         return (
//           <section key={category}>
//             <h2>{category}</h2>
//             <ul className="menu">
//               {menu[category].map((item) => (
//                 <Item
//                   key={item.name}
//                   item={item}
//                   clickHandler={() => {
//                     setModalMenu(item);
//                     setModalOn(true);
//                   }}
//                 />
//               ))}
//             </ul>
//           </section>
//         );
//       })}
//       {modalOn ? (
//         <OrderModal
//           modalMenu={modalMenu}
//           setModalOn={setModalOn}
//           cart={cart}
//           setCart={setCart}
//         />
//       ) : null}
//     </>
//   );
// }

// export default Menu;
