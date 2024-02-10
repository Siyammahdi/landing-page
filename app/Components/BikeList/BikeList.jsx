import React from 'react';
import bike1 from '../../../public/cycle.png'
import bike2 from '../../../public/cycle1.png'
import bike3 from '../../../public/cycle2.png'
import Image from 'next/image';

const BikeList = () => {

    const data = [
        {
            id: 1,
            brand_name: "Firefox",
            model: "Combat",
            img: bike1,
            price: 200
        },
        {
            id: 2,
            brand_name: "Firefox",
            model: "Viper",
            img: bike2,
            price: 200
        },
        {
            id: 3,
            brand_name: "Firefox",
            model: "Tornado",
            img: bike3,
            price: 200
        }
    ];



    return (
        <div>
            <div className='flex justify-between items-center my-5'>
                <h2 className='text-2xl'>Explore Bikes</h2>
                <a className='underline text-sm'>View All</a>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            <div className='border rounded-xl p-3 space-y-3'>
                                <div className=' flex justify-between'>
                                    <h4 className='font-semibold'>{item.brand_name}</h4>
                                    <div>
                                        <h4 className='font-light'>{item.model}</h4>
                                        <p className='text-xs font-thin text-end'>MTB</p>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        className='mx-auto'
                                        src={item.img}
                                        alt='bike'
                                        width={140}
                                        height={70}
                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xs font-thin'>Available at <br /> Bike Station</p>
                                    <div className='flex flex-col'>
                                        <span className='text-3xl'>{item.price}INR</span>
                                        <span className='text-xs font-thin text-end'>Per hour</span>
                                    </div>
                                </div>
                                <button className='w-full bg-[#059E3C] py-2 rounded-lg'>Book your Cycle</button>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BikeList;