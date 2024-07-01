import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaHeartBroken } from "react-icons/fa";
import "../Category/Category.css";
import { ProductsData } from "../../data/data";


const Category = () => {
  const products = ProductsData.slice(0, 8);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const handleToggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
      <section className="mx-auto my-12 w-full max-w-[1300px] px-5 md:my-[100px]">
        <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10">
          <h2 className="text-[18px] font-medium text-[#202020] sm:text-[20px] md:text-[30px]">
            Популярные категории
          </h2>
          <button className="hidden rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:block sm:text-[14px] md:px-7 md:py-3 md:text-[16px]">
            Все категории
          </button>
        </div>
        <div className="grid grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.document_id}
              className="relative flex flex-col rounded-[10px] border-[1px] border-[#E5E2EE] overflow-hidden product-item"
            >
              <img
                src={product.img}
                alt={product.commercial_name}
                className="w-full h-48 object-cover"
                height={192}
              />
              <div className="flex-grow px-4 py-3">
                <h5
                  className="text-[#202020] text-[16px] font-semibold mb-1"
                  title={product.commercial_name}
                >
                  {product.commercial_name}
                </h5>
                <p className="text-[#7A7687] text-[12px] font-normal">
                  Артикул: {product.document_id}
                </p>
                <p className="text-[#7A7687] text-[12px] font-normal mb-3">
                  В наличии
                </p>
                <span className="block font-semibold text-[16px]">
                  {product.document_id.toLocaleString()} руб.
                </span>
              </div>
              <div className="absolute top-2 right-2 flex flex-col items-center">
                <button
                  className="text-[#088269] hover:text-[#065f48] mb-2 cart-icon"
                  onClick={() => handleAddToCart(product.document_id)}
                >
                  <FaShoppingCart size={20} />
                </button>
                <button
                  className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
                  onClick={() => handleToggleWishlist(product.document_id)}
                >
                  {wishlist.includes(product.document_id) ? (
                    <FaHeartBroken size={20} />
                  ) : (
                    <FaHeart size={20} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;