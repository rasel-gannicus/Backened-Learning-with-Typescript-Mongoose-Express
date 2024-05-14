import Footer from "@/components/footer/page";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-96">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
