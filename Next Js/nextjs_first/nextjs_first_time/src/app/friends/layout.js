import Footer from "@/components/navbar/footer/page";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-80">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
