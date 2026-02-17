import { PiBoundingBoxBold, PiFlyingSaucerBold } from 'react-icons/pi';
import { PhoneHero } from '../assets';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMagic } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';
import Testimonial from '../components/Testimonial';
import TestiData from '../data/TestiData';
import { MdOutlineRocketLaunch } from 'react-icons/md';

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-5 bg-[#F8F9FF] px-10 py-12">
        <div className="order-2 md:order-1 self-start shrink-0">
          <img src={PhoneHero} alt="" className="mx-auto lg:mx-0" />
        </div>

        <div className="order 1 md:order-2">
          <h2 className="text-3xl text-center">Core features</h2>

          <p className="mt-5 mb-8 text-xl">
            Why should I choose this bootcamp instead of another one?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <PiFlyingSaucerBold className="text-[#009379]" />
              </div>
              <div>Career Support</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <FaMagic className="text-[#009379]" />
              </div>
              <div>Expert Mentors</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <FiPackage className="text-[#009379]" />
              </div>
              <div>Mentorship</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <PiBoundingBoxBold className="text-[#009379]" />
              </div>
              <div>Industry-Based Curriculum</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}

      <div className="bg-[#F8D57E] px-10 py-12 ">
        <h2 className="text-3xl text-center">
          Real Stories from Satisfied Customers
        </h2>

        <p className="mt-5 text-center text-base">
          See how our design bootcamp is shaping the next generation of creative
          professionals.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {TestiData.map(item => (
            <div>
              <Testimonial
                photo={item.photo}
                name={item.name}
                message={item.message}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#E5F4F2] px-10 py-12 ">
        <h2 className="text-3xl md:text-4xl text-center">
          Empower Your Future with Design Skills That Shine
        </h2>

        <p className="mt-5 text-center">
          Break creative limits and bring your ideas to life with hands-on
          projects and expert mentorship.
        </p>

        <button className="flex gap-x-2 justify-center md:justify-start items-center bg-[#009379] text-white mt-10 px-8 py-4 rounded-[20px] font-semibold cursor-pointer mx-auto">
          <MdOutlineRocketLaunch /> Get Started
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
