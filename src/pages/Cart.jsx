import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';
// import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // @ts-ignore
  const {carts, totalAmount, itemCount} = useSelector(state => state.carts);
  console.log(carts,totalAmount, itemCount, "carts")


  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>

      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i) => (
              // @ts-ignore
              <CartComp key={i} cart={cart} /> 
            ))
          }
          <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR:  <span className='font-bold text-3xl ml-2'>{totalAmount} TL</span></div>
        </div> : 
        <div>
          Sepetiniz Boş...
        </div>
      }
    </div>
  )
}

export default Cart