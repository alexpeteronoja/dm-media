import { MdOutlineRocketLaunch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { boyPhone } from '../assets';

function HeroSection() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#E5F4F2] px-10 pt-10 sm:pt-10 pb-10 md:pb-0 text-center">
        <div className="border-b md:border-b-0 border-b-[#009379] self-end">
          <img
            src={boyPhone}
            alt=""
            className="w-full max-w-62.5 md:md:max-w-100 mx-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto self-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Empower Your Future with Tech Skills That Matter
          </h2>
          <p className="text-xl mt-5">
            Join thousands of learners at digital world tech academy building
            careers in tech, through flexible online and offline classes
            tailored just for you.
          </p>

          <div className="flex flex-row flex-wrap justify-center mt-10 gap-3.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/2349063201115?text=Hi%20I%20want%20to%20enrol%20in%20the%20Smartphone%20Profitability%20Academy"
            >
              <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#009379] text-white w-full px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
                <MdOutlineRocketLaunch /> Start Learning Today
              </button>
            </a>

            <Link to={'/courses'}>
              <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#ffffff] border border-[#009379] w-full text-[#009379] px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
                <MdOutlineRocketLaunch /> View Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
