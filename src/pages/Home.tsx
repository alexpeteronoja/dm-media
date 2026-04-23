import { PhoneHero } from '../assets';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import TestiData from '../data/TestiData';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { FaGraduationCap, FaUserSecret, FaUserShield } from 'react-icons/fa6';
import { BiAward, BiTrendingUp, BiVideo } from 'react-icons/bi';
import { CgSmartphone } from 'react-icons/cg';

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
            Everything you need to succeed in the mobile content creation
            economy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <CgSmartphone className="text-[#009379]" />
              </div>
              <div>Mobile-First</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <BiTrendingUp className="text-[#009379]" />
              </div>
              <div>Profit-Focused</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full ">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <BiVideo className="text-[#009379]" />
              </div>
              <div>Video Lessons</div>
            </div>

            <div className="flex items-center gap-x-5 bg-[#ffff] p-3 rounded-2xl w-full">
              <div className="bg-[#E5F4F2] p-3 rounded-3">
                <FaUserShield className="text-[#009379]" />
              </div>
              <div>Live Support</div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-20 bg-[#F8D57E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">About SPA</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Smartphone Profitability Academy (SPA) is a comprehensive
              online learning platform designed to help you monetize your
              creative skills using just your smartphone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-[#ffff]">
              <FaGraduationCap className="w-12 h-12 text-[#009379] mx-auto mb-4" />
              <h3 className="mb-2">Expert-Led Training</h3>
              <p className="text-muted-foreground">
                Learn from industry professionals with years of experience in
                mobile content creation
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#ffff]">
              <FaUserSecret className="w-12 h-12 text-[#009379] mx-auto mb-4" />
              <h3 className="mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Join a thriving community of learners and creators sharing
                knowledge and opportunities
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-[#ffff]">
              <BiAward className="w-12 h-12 text-[#009379] mx-auto mb-4" />
              <h3 className="mb-2">Practical Skills</h3>
              <p className="text-muted-foreground">
                Gain real-world skills that you can immediately apply to start
                earning income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      <div className="bg-[#E5F4F2] px-10 py-20 ">
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

      <div className="bg-[#F8D57E] px-10 py-20 ">
        <h2 className="text-3xl md:text-4xl text-center">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-5 text-center">
          Join thousands of students who are already earning income using their
          smartphones
        </p>

        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-10 mt-10">
          <button className="flex gap-x-2 justify-center items-center bg-[#009379] text-white  px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
            <MdOutlineRocketLaunch /> Enroll Now
          </button>

          <button className="flex gap-x-2 justify-center items-center bg-[#009379] text-white px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
            <MdOutlineRocketLaunch /> Contact us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
