"use client"

import { addToCart, decreaseQuantity, increaseQuantity } from "@/constants/shofySlice";
import { ProductType } from "@/constants/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";


interface Props {
      product: ProductType;
}

const AddToCartButton = ({ product }: Props) => {


      const dispatch = useDispatch()
      const handleAddToCart = () => {
            dispatch(addToCart(product))
      }


      //  increment decrement Section
      const [existingProduct, setExistingProduct] = useState(null)
      // @ts-ignore
      const { cart } = useSelector((state) => state.shofy);
      useEffect(() => {
            // @ts-ignore
            const availableProduct = cart?.find((item) => item?.id === product?.id);
            // @ts-ignore
            setExistingProduct(availableProduct);
      }, [product, cart]);


      const handlePlus = () => {
            dispatch(increaseQuantity(product?.id));
            toast.success("Quantity increased successfully!")
      };

      const handleMinus = () => {
            // @ts-ignore
            if (existingProduct?.quantity! > 1) {
                  dispatch(decreaseQuantity(product?.id));
                  toast.success("Quantity decreased successfully!");
            }
      };


      return (
            <div>
                  {
                        existingProduct ?
                              <div className="flex justify-between items-center mt-4">
                                    <span
                                          onClick={handleMinus} className="text-gray-600 bg-slate-200 py-3 px-3 rounded-full hover:border hover:border-themeColor duration-300 cursor-pointer">
                                          <HiMinusSmall size={20} />
                                    </span>
                                    <p className="text-lg">{existingProduct?.quantity}</p>
                                    <span onClick={handlePlus} className="text-gray-600 bg-slate-200 py-3 px-3 rounded-full hover:border hover:border-themeColor duration-300 cursor-pointer"><GoPlus size={20} />
                                    </span>
                              </div>
                              :
                              <button onClick={handleAddToCart} className="w-full h-10 mt-4 hover:bg-themeColor cursor-pointer duration-300 border border-themeColor hover:text-white rounded-full">Add To Cart</button>
                  }
            </div>
      );
};

export default AddToCartButton;