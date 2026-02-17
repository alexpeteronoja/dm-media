import { MdOutlineRocketLaunch } from 'react-icons/md';
import { PhoneHero } from '../assets';

function HeroSection() {
  return (
    <>
      <div className="bg-[#F8D57E] grid grid-cols-1 md:grid-cols-[70%_30%] gap-x-15 px-10 py-20">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-6xl">
            Empower Your Future with Tech Skills That Matter
          </h2>
          <p className="text-xl mt-5">
            Join thousands of learners at digital world tech academy building
            careers in tech, through flexible online and offline classes
            tailored just for you.
          </p>

          <div className="flex flex-col md:flex-row gap-x-3.5">
            <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#009379] text-white mt-10 px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> Get Started
            </button>

            <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#ffffff] border border-[#009379] text-[#009379] mt-10 px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> How it works
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 self-center shrink-0">
          <img src={PhoneHero} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
