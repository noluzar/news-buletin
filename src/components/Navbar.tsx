import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <nav className="md:flex items-center justify-between p-6 hidden bg-black text-white">
      <p className="font-bold text-3xl">Buletin<span className="text-red-600">.</span></p>
        <div className="space-x-10">
          <a href="#">Home</a>
          <a href="#">Join Us</a>
          <a href="#">Customer Care</a>
          <a href="#">Reach Out</a>
          <a href="#">About Us</a>
        </div>
        <Button
          name="Subscribe"
          buttonFunction={() => console.log("Subscribed!")}
        />
      </nav>
    </div>
  );
};

export default Navbar;
