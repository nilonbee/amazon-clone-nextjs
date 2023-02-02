import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import { removeFromBasket, addToBasket } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

function CheckoutProduct({ item, handleRemoveFromCart }) {
  const dispatch = useDispatch();
  const handleAddToBasket = () => {
    const product = {
      title,
      category,
      image,
      rating,
      price,
      description,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const { title, category, image, rating, price, description, hasPrime } = item;

  if (item) {
    return (
      <div className="grid grid-cols-5">
        <Image
          height={120}
          width={300}
          objectFit="contain"
          src={item ? image : null}
        />
        <div className="col-span-3 mx-5">
          <p>{title}</p>
          <div className="flex w-full">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>

          <p className="my-2 text-xs line-clamp-3">{description}</p>

          <Currency quantity={price} currency="GBP" />
          {hasPrime && (
            <div className="flex items-center space-x 2">
              <img
                loading="lazy"
                className="w-12"
                src="https.links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">FREE Next-day delivery</p>
            </div>
          )}
        </div>
        {/* right add or remove buttons */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={handleAddToBasket}>
            Add again
          </button>
          <button className="button" onClick={handleRemoveFromCart}>
            Remove
          </button>
        </div>
      </div>
    );
  }

  return <div className="grid grid-cols-5">item removed</div>;
}

export default CheckoutProduct;
