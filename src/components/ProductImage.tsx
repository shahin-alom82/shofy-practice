"use client";
import { ProductType } from "@/constants/type";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product }: { product: ProductType }) => {

      const [currentImage, setCurrentImage] = useState(product?.images[0]);

      return (

            <div className="w-full flex items-center justify-between ">
                  <div className="w-1/3">
                        {/* small images */}
                        <div className="flex flex-col lg:ml-8">
                              {product?.images?.map((item, index) => (
                                    <button
                                          key={index}
                                          onClick={() => setCurrentImage(item)}
                                          className={`border mb-2 rounded h-28 w-24 ${item === currentImage && "border-sky-600"
                                                }`}
                                    >
                                          <div className="border rounded border-gray-400 h-28 w-24">
                                                <Image
                                                      src={item}
                                                      alt="product-image"
                                                      width={200}
                                                      height={200}
                                                      className="w-full h-full object-contain"
                                                />
                                          </div>
                                    </button>
                              ))}
                        </div>
                  </div>
                  <Image
                        src={currentImage}
                        alt="product-image"
                        width={500}
                        height={500}
                        className="w-full h-80 object-contain"
                  />
            </div>
      );
};

export default ProductImage;