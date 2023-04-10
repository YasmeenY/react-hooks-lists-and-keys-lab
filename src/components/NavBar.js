import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const display = links.map((link) => (
    <a key={link} href={"#"+link}>{link}</a>
  ));

  return (
    <nav>
      {display}
    </nav>
  )
}

export default NavBar;
