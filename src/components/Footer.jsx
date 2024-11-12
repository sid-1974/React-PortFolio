import React from 'react';
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    let curYear = new Date().getFullYear();
    return (
        <div className='bg-black-100 h-[7em] flex justify-evenly flex-col align-middle'>
            <div className="copyright">
                <p className="text-white text-center mt-4">&copy; {curYear} Sidgithub. All rights reserved</p>
            </div>
            <div className="flex gap-6 justify-center">
                <FiInstagram fontSize={27} className='cursor-pointer' onClick={() => {
                    window.open("https://www.instagram.com/__rough__guy.__/", "_blank");
                }} />
                <FiGithub fontSize={27} className='cursor-pointer' onClick={() => {
                    window.open("https://github.com/sid-1974", "_blank");
                }} />
                <FiLinkedin fontSize={27} className='cursor-pointer' onClick={() => {
                    window.open("https://www.linkedin.com/in/siddartha-r-22b98b23a/", "_blank");
                }} />
            </div>
        </div>
    )
}

export default Footer
