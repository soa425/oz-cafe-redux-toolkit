import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import data from '../assets/data';

// 장바구니 페이지
function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Redux에서 cart items 조회
  const menuList = useSelector((state) => state.menu.menuList); // 메뉴 정보 조회
  const dispatch = useDispatch();

  // 메뉴 정보가 없을 경우
  if (!menuList.length)
    return <div style={{ textAlign: 'center', margin: '80px' }}>메뉴 정보가 없어요!</div>;

  return (
    <div>
      <h2>장바구니</h2>
      <Link to="/">메뉴로 돌아가기</Link>
      <ul className="cart">
        {cartItems.length > 0 ? (
          cartItems.map(el => {
            const item = menuList.find(menu => menu.id === el.id); // 메뉴 정보 찾기
            return (
              <li key={el.id} className="cart-item">
                <div className="cart-item-info">
                  <img src={item.img} alt={item.name} height={100} />
                  <div>{item.name}</div>
                </div>
                <div className="cart-item-option">
                  {/* 옵션 표시 */}
                  {el.options &&
                    Object.keys(el.options).map(optKey => (
                      <div key={optKey}>
                        {optKey} : {data.options[optKey][el.options[optKey]]}
                      </div>
                    ))}
                  <div>개수 : {el.quantity}</div>
                </div>
                {/* 삭제 버튼 */}
                <button
                  className="cart-item-delete"
                  onClick={() => dispatch(removeItem(el.id))}
                >
                  삭제
                </button>
              </li>
            );
          })
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
      {/* 전체 비우기 버튼 */}
      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>전체 비우기</button>
      )}
    </div>
  );
}

export default Cart;


// import data from "../assets/data";

// function Cart({ menu, cart, setCart }) {
//   if (!menu)
//     return (
//       <div style={{ textAlign: "center", margin: "80px" }}>
//         {" "}
//         메뉴 정보가 없어요!
//       </div>
//     );
//   const allMenus = [...menu.커피, ...menu.논커피];
//   return (
//     <>
//       <h2>장바구니</h2>
//       <ul className="cart">
//         {cart?.length ? (
//           cart.map((el) => (
//             <CartItem
//               key={el.id}
//               item={allMenus.find((menu) => menu.id === el.id)}
//               options={el.options}
//               quantity={el.quantity}
//               cart={cart}
//               setCart={setCart}
//             />
//           ))
//         ) : (
//           <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
//         )}
//       </ul>
//     </>
//   );
// }

// function CartItem({ item, options, quantity, cart, setCart }) {
//   return (
//     <li className="cart-item">
//       <div className="cart-item-info">
//         <img height={100} src={item.img} />
//         <div>{item.name}</div>
//       </div>
//       <div className="cart-item-option">
//         {Object.keys(options).map((el) => (
//           <div key={el.id}>
//             {el} : {data.options[el][options[el]]}
//           </div>
//         ))}
//         <div>개수 : {quantity}</div>
//       </div>
//       <button
//         className="cart-item-delete"
//         onClick={() => {
//           setCart(cart.filter((el) => item.id !== el.id));
//         }}
//       >
//         삭제
//       </button>
//     </li>
//   );
// }
// export default Cart;
