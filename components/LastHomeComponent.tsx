import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function LastHome() {
  const products = [
    { image: "chair.png", name: "Library Stool Chair", price: "$20", text:"New" },
    { image: "chair2.png", name: "Library Stool Chair", price: "$20" ,text:"Sales"},
    { image: "chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair4.png", name: "Library Stool Chair", price: "$20" },
  ];
  const otherProducts = [  
    { image: "sec.png.png", name: "Library Stool Chair", price: "$20",text:"New"},
    { image: " card.png", name: "Library Stool Chair", price: "$20",text:"Sales" },
    { image: " image.png", name: "Library Stool Chair", price: "$20" },
    { image: "chair.png", name: "Library Stool Chair", price: "$20" },
  ]
  return (
    <div className='mt-8'>
      
      <div className='flex mt-5'>
        {products.map((product, index) => (
          <Card key={index} className='border-none shadow-none'>
            <CardContent>
              <img src={product.image} alt={product.name} />
            </CardContent>
            <CardFooter>
            <div className="flex flex-col items-start">
            <div className="text-xl text-white bg-green-600">{product.text}</div>
              <div className="flex flex-col items-start">
                <div className="text-xl text-teal-700">{product.name}</div>

               

                <div className='flex flex-row justify-between w-full'>
                  <div className="text-xl font-bold mt-2">{product.price}</div>
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2  bg-gray-500 rounded-[4px] hover:bg-teal-700" />
                  </button>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
           <div className='flex'>
        {otherProducts.map((otherProduct, index) => (
          <Card key={index} className='border-none shadow-none'>
            <CardContent>
              <img src={otherProduct.image} alt={otherProduct.name} />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start h-8">
  
              <div className="text-xl text-white bg-green-600">{otherProduct.text}</div>
              <div className="flex flex-col items-start">
                <div className="text-xl  text-teal-700">{otherProduct.name}</div>
                <div className='flex flex-row justify-between w-full'>
                  <div className="text-xl font-bold mt-2">{otherProduct.price}</div>
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 bg-gray-500 rounded-[4px] hover:bg-teal-700" />
                  </button>
                </div>
              </div> </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
