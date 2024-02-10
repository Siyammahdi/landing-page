import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";

const Navigation = () => {
    return (
        <div className='relative max-h-screen'>
            <div className='bg-[#059E3C] w-[800px] h-[800px] rounded-[1256px] absolute -top-44 -left-[300px] z-0'></div>
            <div className='text-3xl flex gap-5 bottom-20 text-white relative'>
                <span><FaInstagram /></span>
                <span><FaFacebookSquare /></span>
                <span><IoPaperPlaneOutline /></span>
            </div>

            <div className='relative flex items-center top-36'>
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="57" viewBox="0 0 78 57" fill="none">
                    <path d="M61.5781 27.4079C60.164 27.4079 58.8039 27.6296 57.5216 28.0353C57.2696 27.7494 57.0103 27.4698 56.7439 27.1968C61.662 25.3947 67.5112 26.1601 72.0003 30.4636C73.0537 31.4719 74.6451 29.8633 73.5894 28.8502C68.0733 23.5679 60.78 22.9075 54.902 25.5315C53.6788 24.5501 52.346 23.7089 50.9294 23.0242C50.8695 22.9959 50.812 22.9983 50.7544 22.9806L51.4099 21.0052L53.0325 16.131C53.7599 16.3362 54.3412 16.7018 54.9284 17.0402C55.9661 17.6382 57.0926 16.986 57.8404 16.0272C58.4192 15.2877 59.5732 13.442 59.288 12.5434C59.004 11.6435 57.6714 10.5114 56.7846 10.5114C53.0733 10.5114 53.0805 12.8559 48.8131 12.8559C46.9772 12.8559 45.8735 12.9361 45.8531 13.731C45.7908 16.3515 47.2252 17.4176 48.1108 17.0001C49.1163 16.5249 49.9551 16.2418 50.6741 16.0944L49.2792 20.2917L46.2929 29.2783C39.5928 19.3966 28.3941 16.9034 24.3723 16.3161C24.7786 15.2311 25.1848 14.1473 25.5887 13.0623C25.7253 12.6955 25.5635 12.2297 25.2999 11.9667L22.9786 9.63983C24.9499 8.71758 27.2784 8.43572 29.3731 8.39798C29.4438 8.3968 29.4966 8.36731 29.5601 8.35552V8.85556C29.5601 9.16573 29.8117 9.41929 30.1221 9.41929C30.4325 9.41929 30.6841 9.16573 30.6841 8.85556V8.39798H34.616C34.7663 8.39611 34.9098 8.33578 35.0151 8.23016C35.1204 8.12454 35.179 7.98221 35.178 7.83425V6.70679C35.1793 6.55873 35.1208 6.41622 35.0155 6.31054C34.9101 6.20485 34.7664 6.14462 34.616 6.14306H30.6841V5.47437C30.6841 5.16421 30.4325 4.91064 30.1221 4.91064C29.8117 4.91064 29.5601 5.16303 29.5601 5.47437V6.17727C29.4966 6.16783 29.4438 6.14188 29.3731 6.14306C26.4299 6.19613 23.0541 6.67613 20.5663 8.40859C19.9791 8.81783 19.797 9.63393 20.3386 10.1776L23.2015 13.0481L22.0655 16.0861L22.0067 16.0826L21.7347 16.9683L19.4758 24.3204C14.4678 23.3804 8.99126 24.6694 4.62799 28.8479C3.57343 29.8609 5.16366 31.4707 6.21703 30.4612C9.91879 26.9149 14.5445 25.7733 18.8095 26.4892L18.5459 27.3466L18.601 27.5671C17.9587 27.4727 17.3067 27.4067 16.6381 27.4067C9.20457 27.4079 3.15759 33.4721 3.15759 40.9267C3.15759 48.3814 9.20457 54.4456 16.6393 54.4456C24.0739 54.4456 30.1209 48.3814 30.1209 40.9267C30.1209 35.01 26.3065 29.9836 21.0193 28.1544C20.9769 27.9078 20.9294 27.662 20.8767 27.4173L20.9965 27.0258C26.5594 28.8549 31.0461 33.9344 31.2474 40.9515C31.2893 42.421 33.5339 42.4245 33.4919 40.9515C33.4811 40.5522 33.4567 40.1534 33.4188 39.7557H33.257C32.9565 39.7522 32.6695 39.6318 32.4589 39.4208C32.2482 39.2097 32.1311 38.9252 32.133 38.6294C32.133 38.0727 32.5452 37.6305 33.0737 37.5397C32.9943 37.1786 32.904 36.8199 32.8029 36.4641C33.0629 36.825 33.3325 37.1693 33.6094 37.5019H36.1199C36.6988 37.5019 37.1601 37.9501 37.2201 38.5138L40.5299 39.8417C41.8565 40.3736 41.2777 42.5531 39.9332 42.0129L35.7844 40.3477C35.7542 40.5393 35.7386 40.7328 35.7377 40.9267C35.7377 43.4163 37.7497 45.433 40.2316 45.433C41.515 45.433 42.6642 44.8882 43.4839 44.0225C43.5211 44.0261 43.5546 44.0461 43.5918 44.0461H46.4571C46.7576 44.0424 47.0444 43.9219 47.2549 43.7109C47.4655 43.4999 47.5828 43.2156 47.5812 42.9198C47.5812 42.6949 47.5125 42.4751 47.3841 42.289C47.2557 42.1029 47.0734 41.9591 46.8609 41.8761H48.1444C48.2211 42.9823 48.4224 44.0532 48.7508 45.0698L40.1728 45.9708C39.9907 45.9944 39.8229 46.0038 39.6587 46.0038C37.2716 46.0038 35.1756 43.631 35.1756 40.9267C35.1756 40.6567 35.202 40.3925 35.2475 40.133L34.3164 39.7604L34.3104 39.7557H34.1678C34.0939 40.1418 34.0558 40.5338 34.054 40.9267C34.054 44.2855 36.6221 47.1219 39.6599 47.1219C39.8732 47.1219 40.0877 47.1089 40.3083 47.0818L49.1486 46.1536C51.1894 51.0208 55.9913 54.4456 61.5781 54.4456C69.0116 54.4456 75.0598 48.3814 75.0598 40.9267C75.0598 33.4721 69.0116 27.4079 61.5781 27.4079ZM21.2877 33.228C22.6177 34.041 23.7145 35.175 24.4739 36.5224C25.2334 37.8699 25.6303 39.3859 25.627 40.9267C25.627 45.8953 21.5945 49.9393 16.6393 49.9393C11.684 49.9393 7.65148 45.8953 7.65148 40.9267C7.65148 35.957 11.684 31.9142 16.6393 31.9142C17.4841 31.9142 18.2978 32.0404 19.0731 32.2597C19.0132 34.8791 18.3529 38.0303 15.9214 40.0611L15.931 40.0729C15.7502 40.2181 15.6193 40.4146 15.5562 40.6358C15.4931 40.8569 15.5009 41.0918 15.5785 41.3084C15.6561 41.525 15.7997 41.7127 15.9898 41.846C16.1799 41.9793 16.4071 42.0516 16.6404 42.053C16.9022 42.0487 17.1538 41.9525 17.3499 41.7818L17.3583 41.7936C17.3822 41.7735 17.4014 41.7511 17.4254 41.7311L17.4398 41.7169C20.1601 39.3936 21.0816 36.1044 21.2877 33.228ZM21.6544 24.8864L22.6647 21.5972C25.0063 23.3545 26.7331 26.0717 28.3569 28.9564C26.4717 27.109 24.1777 25.716 21.6544 24.8864ZM43.4576 37.7979C43.0438 37.3643 42.5442 37.0186 41.9897 36.7819C41.4351 36.5452 40.8372 36.4226 40.2327 36.4216C39.0679 36.4216 38.0158 36.878 37.2177 37.6069C37.0463 37.4736 36.8737 37.3427 36.7107 37.1988C37.5137 36.378 38.5502 35.8508 39.6599 35.8508C39.8241 35.8508 39.9919 35.8614 40.1596 35.8827L43.9633 36.2813L43.4576 37.7979ZM44.3252 35.1963L40.2915 34.7717C40.082 34.7452 39.8711 34.7318 39.6599 34.7316C38.2195 34.7316 36.8881 35.3744 35.8839 36.4039C33.1348 33.5299 31.3876 29.342 29.3468 26.2073C27.6595 23.6175 25.7145 21.1939 23.3034 19.5216L23.6186 18.4967C26.9848 18.9614 39.1674 21.3684 45.369 32.0581L44.3252 35.1963ZM58.0585 32.6371C58.8103 33.9596 59.4015 35.3644 59.8201 36.8226L53.9397 36.2035C54.9065 34.6254 56.345 33.3799 58.0585 32.6371ZM60.1137 37.976C60.194 38.3334 60.2659 38.6942 60.3258 39.0563C60.0945 39.2143 59.8944 39.4148 59.735 39.6448L52.6934 39.6342C52.8098 38.8194 53.038 38.024 53.3717 37.2696L60.1137 37.976ZM50.0474 25.107C50.9857 25.5752 51.8749 26.1118 52.7066 26.7062C50.9122 27.8397 49.3474 29.2913 48.0917 30.9872L50.0474 25.107ZM48.1624 39.6283L47.0682 39.6259C47.1797 38.5928 47.393 37.6092 47.6854 36.6728L48.752 36.7861C48.4572 37.6942 48.257 38.6459 48.1624 39.6283ZM49.1474 35.7011L48.0689 35.5867C49.3081 32.4704 51.5944 29.8658 54.5473 28.2063C54.8121 28.4528 55.0674 28.7063 55.3166 28.9658C52.5328 30.4439 50.3534 32.8232 49.1474 35.7011ZM52.6431 41.8797C54.9523 41.882 57.2748 41.8844 59.5529 41.8844C59.9124 42.6474 60.6805 43.1805 61.5781 43.1805C62.8196 43.1805 63.8251 42.1733 63.8251 40.9279C63.8251 40.0328 63.3002 39.265 62.544 38.9018C62.5152 38.7237 62.4865 38.5433 62.4541 38.3676C63.5123 38.7721 64.3871 39.6236 64.3871 40.9279C64.3871 42.6038 62.9407 43.5461 61.5062 43.7324L53.3729 44.5863C52.9879 43.7269 52.7417 42.8137 52.6431 41.8797ZM61.5781 49.9393C58.3521 49.9393 55.5239 48.2187 53.9397 45.6512L61.638 44.8434C63.9233 44.5438 65.51 42.9352 65.51 40.9267C65.51 39.0834 64.1654 37.5892 62.1857 37.1245C61.7544 35.3536 61.1061 33.6409 60.2551 32.0238C60.6925 31.9533 61.1349 31.9167 61.5781 31.9142C66.5358 31.9142 70.5659 35.957 70.5659 40.9267C70.5659 45.8953 66.5358 49.9393 61.5781 49.9393Z" fill="white" />
                </svg>
                <h2 className='text-5xl'>RentByk</h2>
            </div>

            <div className='relative flex flex-col gap-10 left-80 top-10'>
                <Link href="/"><span className='flex items-center font-medium gap-5'><IoHomeOutline className='text-xl' /> Home</span></Link>
                <Link href="/"><span className='flex items-center font-medium gap-5'><MdOutlineCategory className='text-xl' /> Category</span></Link>
                <Link href="/"><span className='flex items-center font-medium gap-5'><MdOutlineDirectionsBike className='text-xl' /> Bikes</span></Link>
            </div>

            <span className='absolute top-[400px] left-0 transform -rotate-90 mr-4 mb-4  text-white flex items-center'><GoArrowLeft className='text-xl' /> Scroll down</span>
        </div>
    );
};

export default Navigation;
