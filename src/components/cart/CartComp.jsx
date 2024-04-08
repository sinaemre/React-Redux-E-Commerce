import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-10 flex items-center justify-between">
      <img
        src={cart?.image}
        className="w-[150px] h-[150px] object-cover"
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">{cart?.price} TL ({cart?.quantity})</div>
      <button onClick={() => dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center">Ürünü Sil</button>
    </div>
  );
};

export default CartComp;
