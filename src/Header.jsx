import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-2 p-2 border-2 border-white rounded">
      <div className="text-2xl font-semibold text-green-800">FoodApp</div>
      <ul className="flex text-xl font-bold text-blue-500">
        <li className="mx-2 hover:text-blue-700 ">Search</li>
        <li className="mx-2 hover:text-blue-700 ">Offers</li>
        <li className="mx-2 hover:text-blue-700 ">Help</li>
        <li className="mx-2 hover:text-blue-700 ">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
