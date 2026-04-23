import { MdOutlineRocketLaunch } from 'react-icons/md';

function HeroSection() {
  return (
    <>
      <div className="bg-[#F8D57E] px-10 py-24 sm:py-32 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-6xl">
            Empower Your Future with Tech Skills That Matter
          </h2>
          <p className="text-xl mt-5">
            Join thousands of learners at digital world tech academy building
            careers in tech, through flexible online and offline classes
            tailored just for you.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-x-3.5">
            <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#009379] text-white mt-10 px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> Start Learning Today
            </button>

            <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#ffffff] border border-[#009379] text-[#009379] mt-10 px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> View Courses
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
