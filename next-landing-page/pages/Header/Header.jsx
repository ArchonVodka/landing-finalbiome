import React from "react";
import Image from "next/image";
import mountain from "../../assets/mountain 1.png";

function Header() {
  return (
    <div className="header_container">
      <div className="header_container__title">
      <div>
        <span className="head">finalbiome</span>
        <span className="hyphen">—</span>
      </div>
        <span className="body">
          First decentralized game deployment platform
        </span>
        <span className="desc">
          Deploying a game on the blockchain has never been so easy
        </span>
      </div>
      <Image
        className="header_container__image"
        src={mountain}
        alt="Vercel Logo"
        width={1920}
        height={1152}
        style={{ left: "400px" }}
      />
    </div>
  );
}

export default Header;
