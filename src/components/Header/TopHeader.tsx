import { CiDeliveryTruck } from "react-icons/ci";
import Container from "../Container/Container";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
      return (
            <div className='bg-black sticky z-50 overflow-hidden'>
                  <Container className='flex justify-between items-center py-2'>
                        <h1 className='flex text-white gap-2 items-center'>
                              <CiDeliveryTruck className='text-[#ffb342] cursor-pointer' size={30} />
                              FREE Express Shipping On Orders $570+
                        </h1>
                        <ul className='flex items-center gap-4 text-white'>
                              <li className='menu-icon-style'>
                                    English
                                    <IoIosArrowDown />
                              </li>
                              <li className='menu-icon-style'>
                                    USD
                                    <IoIosArrowDown />
                              </li>
                              <li className='menu-icon-style'>
                                    Settig
                                    <IoIosArrowDown />
                              </li>

                        </ul>
                  </Container>
            </div>
      );
};

export default TopHeader;