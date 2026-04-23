import {
  BiAward,
  BiCheckCircle,
  BiHeart,
  BiTargetLock,
  BiTrendingUp,
} from 'react-icons/bi';
import { FaGraduationCap, FaUserSecret } from 'react-icons/fa6';
import { FiZap } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdOutlineRocketLaunch } from 'react-icons/md';

export function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#E5F4F2] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl mb-6">About SPA</h1>
            <p className="text-xl text-primary-foreground/90">
              Empowering the next generation of mobile content creators to turn
              their passion into profit
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F8D57E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Smartphone Profitability Academy (SPA) was founded on a
                simple belief: everyone deserves access to the skills and
                knowledge needed to create income in the digital age.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We've built a comprehensive learning platform that removes
                traditional barriers to creative education. No expensive
                equipment, no studio space, no complex software - just your
                smartphone and the determination to learn.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to democratize creative education and empower
                individuals worldwide to monetize their skills using the device
                they already own.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#ffff] border border-transparent rounded-lg p-6 text-center">
                <BiTargetLock className="w-12 h-12 text-[#009379] mx-auto mb-4" />
                <h3 className="mb-2">Vision</h3>
                <p className="text-sm text-muted-foreground">
                  A world where anyone can earn from their smartphone
                </p>
              </div>
              <div className="bg-[#ffff] border border-transparent rounded-lg p-6 text-center">
                <BiHeart className="w-12 h-12 text-[#009379] mx-auto mb-4" />
                <h3 className="mb-2">Values</h3>
                <p className="text-sm text-muted-foreground">
                  Accessibility, quality, and community first
                </p>
              </div>
              <div className="bg-[#ffff] border border-transparent rounded-lg p-6 text-center">
                <FiZap className="w-12 h-12 text-[#009379] mx-auto mb-4" />
                <h3 className="mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge mobile learning techniques
                </p>
              </div>
              <div className="bg-[#ffff] border border-transparent rounded-lg p-6 text-center">
                <BiTrendingUp className="w-12 h-12 text-[#009379] mx-auto mb-4" />
                <h3 className="mb-2">Results</h3>
                <p className="text-sm text-muted-foreground">
                  Practical skills that generate real income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SPA */}
      <section className="py-20 bg-[#E5F4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Why Choose SPA?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just another online course platform. We're a complete
              ecosystem designed for mobile-first learning and earning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#ffff] rounded-lg p-8">
              <FaGraduationCap className="w-12 h-12 text-[#009379] mb-4" />
              <h3 className="mb-4">Expert-Led Training</h3>
              <p className="text-muted-foreground mb-4">
                Learn from industry professionals who have built successful
                careers creating content on mobile devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Instructors with 10+ years experience</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Real-world case studies and projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Regular live Q&A sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffff] rounded-lg p-8">
              <FaUserSecret className="w-12 h-12 text-[#009379] mb-4" />
              <h3 className="mb-4">Thriving Community</h3>
              <p className="text-muted-foreground mb-4">
                Join a global network of creators sharing tips, opportunities,
                and support on your journey to profitability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Private Discord community</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Peer review and feedback</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Collaboration opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#ffff] rounded-lg p-8">
              <BiAward className="w-12 h-12 text-[#009379] mb-4" />
              <h3 className="mb-4">Proven Results</h3>
              <p className="text-muted-foreground mb-4">
                Our curriculum is designed around practical skills that students
                can immediately apply to start earning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Portfolio-building projects</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Client acquisition strategies</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <BiCheckCircle className="w-5 h-5 text-[#009379] shrink-0 mt-0.5" />
                  <span>Income tracking and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#F8D57E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Our Story</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              SPA was born from a simple observation: while everyone talks about
              the "creator economy," most training programs assume you have
              access to expensive computers, professional software, and studio
              equipment.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our founders, a team of mobile content creators who built
              six-figure businesses using nothing but smartphones, realized
              there was a massive gap in the market. Millions of people
              worldwide own powerful smartphones but lack the knowledge to turn
              them into income-generating tools.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We launched SPA in 2024 with three core courses and a vision to
              make creative entrepreneurship accessible to everyone. Today,
              we've helped thousands of students launch freelance careers, grow
              social media followings, and build profitable creative businesses
              - all from their smartphones.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a student looking for side income, a parent working
              from home, or an aspiring creator anywhere in the world, SPA gives
              you the tools and knowledge to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E5F4F2] text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Start your journey with thousands of students worldwide
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/2349063201115?text=Hi%20I%20want%20to%20enrol%20in%20the%20Smartphone%20Profitability%20Academy"
          >
            <button className="flex gap-x-2 justify-center items-center bg-[#009379] text-white mx-auto  px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> Get Started Today
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
