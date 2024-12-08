import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function FeaturedProductComponent() {
  return (
    <div className='mt-8'>
      <div>
        <h1 className='text-4xl font-semibold'>Featured Products</h1>
      </div>
      <div className='flex mt-5'>
        <Card className='border-none shadow-none'>
          <CardContent>
            {/* Product image goes here */}
            <img src="chair.png" alt="Library Stool Chair" />
              <div className="badge  text-sm rounded-[8px]  -top-72 left-4 text-white p-1 bg-[#01AD5A] w-10   relative">New</div>
          </CardContent>
        <CardFooter>    <div className="flex flex-col items-start">
              <div className="text-xl  text-green-500">Library Stool Chair</div>
              <div className='flex flex-row justify-between w-full  '><div className="text-xl font-bold mt-2">$20</div>
              <button className="btn btn-primary mt-2">
                <ShoppingCart className="mr-2  rounded-[4px]  hover:bg-[#029FAE]" />
               
              </button>
            </div></div>
            </CardFooter>
        </Card>
                <Card className='border-none shadow-none'>
          <CardContent>
            {/* Product image goes here */}
            <img src="chair2.png" alt="Library Stool Chair" />
              <div className="badge  text-sm rounded-[8px]  -top-72 left-4 text-white p-1 bg-[#01AD5A] w-10   relative">New</div>
          </CardContent>
        <CardFooter>    <div className="flex flex-col items-start">
              <div className="text-xl  text-green-500">Library Stool Chair</div>
              <div className='flex flex-row justify-between w-full  '><div className="text-xl font-bold mt-2">$20</div>
              <button className="btn btn-primary mt-2">
                <ShoppingCart className="mr-2  rounded-[4px]  hover:bg-[#029FAE]" />
                
              </button>
            </div></div>
            </CardFooter>
        </Card> 
        <Card className='border-none shadow-none'>
          <CardContent>
            {/* Product image goes here */}
            <img src="chair3.png" alt="Library Stool Chair" />
              <div className="badge  text-sm rounded-[8px]  -top-72 left-4 text-white p-1 bg-[#01AD5A] w-10   relative">New</div>
          </CardContent>
        <CardFooter>    <div className="flex flex-col items-start">
              <div className="text-xl  text-green-500">Library Stool Chair</div>
              <div className='flex flex-row justify-between w-full  '><div className="text-xl font-bold mt-2">$20</div>
              <button className="btn btn-primary mt-2">
                <ShoppingCart className="mr-2  rounded-[4px]  hover:bg-[#029FAE]" />
                
              </button>
            </div></div>
            </CardFooter>
        </Card> 
        <Card className='border-none shadow-none'>
          <CardContent>
            {/* Product image goes here */}
            <img src="chair4.png" alt="Library Stool Chair" />
              <div className="badge  text-sm rounded-[8px]  -top-72 left-4 text-white p-1 bg-[#01AD5A] w-10   relative">New</div>
          </CardContent>
        <CardFooter>    <div className="flex flex-col items-start">
              <div className="text-xl  text-green-500">Library Stool Chair</div>
              <div className='flex flex-row justify-between w-full  '><div className="text-xl font-bold mt-2">$20</div>
              <button className="btn btn-primary mt-2">
                <ShoppingCart className="mr-2   rounded-[4px]  hover:bg-[#029FAE]" />
                
              </button>
            </div></div>
            </CardFooter>
        </Card> 
 
      </div>
    </div>
  )
}
