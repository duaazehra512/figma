// components/ChairGallery.js

import Image from 'next/image';

const ChairGallery = () => {
  return (
    <div className="flex mt-12 flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src="/chair3.png"
          alt="Main Chair"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 ml-3 grid grid-cols-2 gap-4">
        <Image
          src="/chair2.png"
          alt="Chair 2"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
        <Image
          src="/chair.png"
          alt="Chair 3"
          width={150}
          height={150}
          className="w-full h-full"
        />
        <Image
          src="/chair4.png"
          alt="Chair 4"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
        <Image
          src="/card.png"
          alt="Chair 5"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="absolute rotate-90 left-0 top-1/2 transform -translate-y-1/2">
        <p className="text-sm md:text-lg text-gray-700 font-semibold tracking-wide">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>
    </div>
  );
};

export default ChairGallery;
