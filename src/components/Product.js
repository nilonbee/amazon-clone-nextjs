import React, { useState } from "react";
import Currency from "react-currency-formatter";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
//import dispatch hook from react-redux
import { useDispatch } from "react-redux";
//import reducer function from the store slice
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function Product({ id, title, category, image, price, description }) {
  const Max = 5;
  const Min = 1;
  const [rating] = useState(Math.floor(Math.random() * (Max - Min + 1)) + Min);

  const [hasPrime] = useState(Math.random(Math.random() < 0.5));

  //dispatch
  const dispatch = useDispatch();

  //variables for cart
  const items = [];

  //handler functions
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    //sending the product as an action to the REDUX store
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white p-10 z-50">
      <p className="absolute top-2 right-2 text-grey-400 italic text-xs">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain"/>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center spaxe-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-grey-500">Free Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
