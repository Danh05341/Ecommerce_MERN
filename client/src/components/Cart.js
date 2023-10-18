import { useSelector } from "react-redux"
import productImage from '../assets/images/product-1.webp'
import { BsTrash3Fill } from 'react-icons/bs'
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
const Cart = () => {
    const products = Object.keys(useSelector(state => state.product.data))
    return (
        <div className="absolute top-[50px] right-[-8px] bg-white shadow-lg ">
            <ul className="w-[315px]">
                {
                    products.map((product, index) => {
                        return (
                            <CartItem key={index} product={product} />
                        )
                    })
                }
            </ul>
            <div className="h-[110px] px-[20px] text-[14px] flex flex-col">
                <div className=" py-[12px] flex justify-between cursor-text">
                    <span className="font-bold text-[#282828] ">Tổng tiền:</span>
                    <span className="font-bold text-[#ff2d37] text-[18px]">970.000₫</span>
                </div>
                <div className="bg-[#ff2d37] flex justify-center items-center ">
                    <Link to='/checkout' className="inline-block p-[7px]">
                        <span className="text-white">Tiến hành thanh toán</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart