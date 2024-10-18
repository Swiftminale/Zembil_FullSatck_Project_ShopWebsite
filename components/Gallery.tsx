"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ProductType = {
  _id: string;
  media: string[];
  title: string;
  category: string;
};

const Gallery = ({ product }: { product: ProductType }) => {
  const [mainImage, setMainImage] = useState(product.media[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {product.media.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={100}
            width={100}
            alt={`Thumbnail of ${product.title}`}
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
      <Link href={`/products/${product._id}`} className="flex flex-col gap-2">
        <div>
          <p className="text-base font-bold">{product.title}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
