import { MdOutlineRocketLaunch } from 'react-icons/md';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { BiPalette, BiVideo } from 'react-icons/bi';
import { GiSparkles } from 'react-icons/gi';

function Courses() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* <section className="bg-[#F8D57E] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl mb-6">Our Courses</h1>
            <p className="text-xl text-primary-foreground/90">
              Three comprehensive programs designed to transform your smartphone
              into a profit-generating machine
            </p>
          </div>
        </div>
      </section> */}

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-[#E5F4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Our Core Courses</h2>
            <p className="text-lg text-muted-foreground">
              Three powerful skills to transform your smartphone into a profit
              engine
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Graphic Design Course */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-pink-500 to-purple-600 p-8 text-white">
                <BiPalette className="w-16 h-16 mb-4" />
                <h3 className="text-2xl mb-2">Graphic Design</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Master mobile graphic design tools and techniques to create
                  stunning visuals for social media, marketing materials, and
                  client projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Logo design & branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Social media graphics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Digital illustrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Color theory & composition</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2 bg-[#009379] text-[#ffffff] cursor-pointer rounded-lg hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>

            {/* Video Editing Course */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-blue-500 to-cyan-600 p-8 text-white">
                <BiVideo className="w-16 h-16 mb-4" />
                <h3 className="text-2xl mb-2">Video Editing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Learn professional video editing techniques on mobile
                  platforms to create engaging content for YouTube, TikTok, and
                  client projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Short-form video mastery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Transitions & effects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Audio editing & mixing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Content monetization</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2 bg-[#009379] text-[#ffffff] cursor-pointer rounded-lg hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>

            {/* AI Optimization Course */}
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="bg-linear-to-br from-orange-500 to-red-600 p-8 text-white">
                <GiSparkles className="w-16 h-16 mb-4" />
                <h3 className="text-2xl mb-2">AI Optimization</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Harness the power of AI tools on your smartphone to automate
                  workflows, enhance creativity, and maximize your earning
                  potential.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">AI-powered content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Image enhancement tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Productivity optimization</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-2 bg-[#009379] text-[#ffffff] cursor-pointer rounded-lg hover:opacity-90 transition-opacity">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8D57E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Ready to Transform Your Smartphone?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose a course and start your journey to mobile profitability today
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

export default Courses;
