import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function FeaturedProductComponent() {
  const products = [
    { image: "chair.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair4.png", name: "Library Stool Chair", price: "$20" },
    { image: "sec1.png.png", name: "Library Stool Chair", price: "$20" },
    { image: "card.png", name: "Library Stool Chair", price: "$20" },
    { image: "image.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair.png", name: "Library Stool Chair", price: "$20" },
    { image: "sec.png.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "sec2.png.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {products.map((product, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent>
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start">
                <div className="text-lg text-green-600 font-medium">{product.name}</div>
                <div className="flex justify-between w-full items-center mt-2">
                  <div className="text-lg font-bold">{product.price}</div>
                  <button className="btn btn-primary flex items-center p-2 rounded-md hover:bg-[#029FAE]">
                    <ShoppingCart className="mr-2" />
                  </button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>


       {/* section 2  */}
       <div className='bg-stone-100 flex flex-col'>
        <h1 className='text-5xl mt-24 w-full text-center'> Or Subscribe ToNewsletter</h1>
        <div className='flex flex-col md:flex-row-'>
            <input type="text" placeholder='Email Address...' className=' lg:w-[643px] border-b-2 outline-none border-gray-300' />
        </div>
       </div>
    </div>
  );
}
