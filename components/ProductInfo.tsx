import React from "react";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{productInfo.title}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
