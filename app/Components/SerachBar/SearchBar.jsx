import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoPaperPlaneOutline } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className='flex justify-end mx-10 '>
            <div>
                <input className='py-2 rounded-full bg-transparent border placeholder:text-sm pl-3' placeholder='Search Here...' type="text" name="" id="" />
                <span className='absolute right-[50px] top-[10px]'><IoIosSearch className='bg-white text-black rounded-full text-xl' /></span>
            </div>
        </div>
    );
};

export default SearchBar;