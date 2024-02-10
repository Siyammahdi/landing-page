import React from 'react';
import bike from '../../../public/cycle.png'
import brand from '../../../public/brand.png'
import color from '../../../public/colorInd.svg'
import Image from "next/image";

const Display = () => {
    return (
        <div>
            <div className='relative mx-40 flex flex-col items-center'>
                <Image
                    src={brand}
                    alt="bike"
                    width={150}
                    height={10}
                />
                <div className='flex justify-between'>
                    <Image
                        src={bike}
                        alt="bike"
                        width={300}
                        height={200}
                    />
                    <Image
                        className='ml-20'
                        src={color}
                        alt="bike"
                        width={20}
                        height={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Display;