import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <p>hey</p>
      <Link href="/sell">
        <a>Sell!!</a>
      </Link>
    </div>
  );
};

export default Home;
