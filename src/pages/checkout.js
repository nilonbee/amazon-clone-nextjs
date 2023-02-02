import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { removeFromBasket } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

const checkout = () => {
  const [session] = useSession();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromBasket(id));
  };

  const total = 0;
  const totalPrice = items
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, total);

  console.log("total", totalPrice);

  return (
    <>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left hand section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            objectFit="contain"
            width={1020}
            height={250}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl pb-4 border-b">
              {items.length === 0
                ? "Your Basket is empty"
                : "Your shopping basket"}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct
                handleRemoveFromCart={() => handleRemoveFromCart(item.id)}
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
        {/* right hand section */}
        <div className="flex flex-col bg-white p-10 shadow-md mx-auto">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) items :
                <span className="font-bold">
                 {" "} <Currency quantity={totalPrice} currency="GBP" />
                </span>
                <button
                  className={`button mx-5 mt-2 ${
                    !session &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {!session ? "Sign in to checkout" : "Proceed to checkout"}
                </button>
              </h2>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default checkout;
