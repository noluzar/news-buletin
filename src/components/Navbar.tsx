import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-8 bg-black text-white">
        <div>Logo</div>
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
