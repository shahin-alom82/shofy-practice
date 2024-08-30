
"use client"
import Container from "@/components/Container/Container";
import { getData } from "@/components/helper/Helper";
import ProductImage from "@/components/ProductImage";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { ProductType } from "@/constants/type";
interface Props {
      params: {
            id: string;
      };
}


const ProductsPage = async ({ params }: Props) => {
      const { id } = params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      const product: ProductType = await getData(endpoint);


      return (
            <div className="py-10 ">
                  <Container className="flex items-center justify-between gap-10 border-2 border-gray-300 py-4">
                        <ProductImage product={product} />

                        <div className="w-full h-80">
                              <p className="mt-2">{product?.category}</p>
                              <h1 className="text-3xl mb-4 mt-3">{product?.title}</h1>
                              <div>
                                    {product?.availabilityStatus && (
                                          <span className="bg-blue-50 text-blue-600 text-[14px] px-2 mt-4 py-[6px] rounded">
                                                In Stock
                                          </span>
                                    )}
                              </div>
                              <p className="text-[16px] tracking-wide max-w-lg mt-6">{product?.description}</p>
                              <div className="w-52 mt-4">
                                    <AddToCartButton />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductsPage;