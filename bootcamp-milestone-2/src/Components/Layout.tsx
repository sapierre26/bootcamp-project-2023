import React from "react";
import Navbar from "@/bootcamp-milestone-2/src/Components/navbar.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

// somewhere above {children}
<html lang="en">
  <head>
    <title>Turkish Delight</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body className={inter.className}>
    {" "}
    //remember Inter is simply the font I chose.
    <Navbar />
    <div id="blogbody"></div>
    <script src="src/script.js"></script>
    <footer>© 2023 Turkish Delight | All Rights Reserved</footer>
  </body>
</html>;
