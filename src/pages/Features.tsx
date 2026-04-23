import {
  BiAward,
  BiBookOpen,
  BiCheckCircle,
  BiDownload,
  BiRepeat,
  BiShield,
  BiTrendingUp,
  BiVideo,
} from 'react-icons/bi';
import { BsHeadphones } from 'react-icons/bs';
import { CgLock, CgSmartphone } from 'react-icons/cg';
import { FiFileText, FiZap } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import Footer from '../components/Footer';

export function Features() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#E5F4F2] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl mb-6">Platform Features</h1>
            <p className="text-xl text-primary-foreground/90">
              Everything you need to succeed in mobile content creation, all in
              one place
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-[#F8D57E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Comprehensive Learning Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SPA provides a complete ecosystem designed for mobile-first
              learning and earning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BiVideo className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">HD Video Lessons</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Over 50 professionally produced video lessons optimized for
                mobile viewing. Stream or download for offline learning.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Step-by-step tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Real-world examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BiDownload className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Downloadable Resources</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Access hundreds of templates, presets, and project files to
                jumpstart your creative work and client projects.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Design templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Video editing presets</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Client contract templates</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BiAward className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Certificates & Badges</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Earn certificates upon course completion to showcase your skills
                to clients and employers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Shareable certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Skill badges</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BiTrendingUp className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Business Training</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn how to find clients, price your services, and build a
                sustainable freelance business.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Client acquisition strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Pricing calculators</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Marketing templates</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CgSmartphone className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Mobile-First Platform</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our entire platform is designed for smartphone use. Learn,
                practice, and earn - all from your phone.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Optimized for mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Touch-friendly interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Low data mode</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CgLock className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Lifetime Access</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pay once, learn forever. All courses include lifetime access
                with free updates as we add new content.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>No recurring fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Free content updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Learn at your pace</span>
                </li>
              </ul>
            </div>

            {/* Feature 7 */}
            <div className="bg-[#ffffff] rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BiBookOpen className="w-6 h-6 text-[#009379]" />
              </div>
              <h3 className="mb-3">Project-Based Learning</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Build real portfolio pieces while you learn. Each module
                includes hands-on projects you can show clients.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Portfolio-ready projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Step-by-step guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <BiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Instructor feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-[#E5F4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Additional Benefits</h2>
            <p className="text-lg text-muted-foreground">
              More reasons to choose SPA for your mobile learning journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#ffff] rounded-lg p-6 text-center">
              <BsHeadphones className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">Priority Support</h4>
              <p className="text-sm text-muted-foreground">
                Get help when you need it with our dedicated support team
              </p>
            </div>

            <div className="bg-[#ffff] rounded-lg p-6 text-center">
              <FiFileText className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">Course Materials</h4>
              <p className="text-sm text-muted-foreground">
                PDFs, checklists, and worksheets for every lesson
              </p>
            </div>

            <div className="bg-[#ffff] rounded-lg p-6 text-center">
              <FiZap className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">Regular Updates</h4>
              <p className="text-sm text-muted-foreground">
                Stay current with new techniques and platform changes
              </p>
            </div>

            <div className="bg-[#fff] rounded-lg p-6 text-center">
              <BiShield className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">30-Day Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Get a full refund within 30 days
              </p>
            </div>

            <div className="bg-[#ffff] rounded-lg p-6 text-center">
              <BiRepeat className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">Unlimited Replays</h4>
              <p className="text-sm text-muted-foreground">
                Review lessons as many times as you need
              </p>
            </div>

            <div className="bg-[#ffff] rounded-lg p-6 text-center">
              <BiAward className="w-10 h-10 text-[#009379] mx-auto mb-4" />
              <h4 className="mb-2">Skill Assessments</h4>
              <p className="text-sm text-muted-foreground">
                Track your progress with regular quizzes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#F8D57E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">How We Compare</h2>
            <p className="text-lg text-muted-foreground">
              See why SPA is the best choice for mobile creators
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">SPA</th>
                    <th className="text-center p-4">Traditional Courses</th>
                    <th className="text-center p-4">YouTube Tutorials</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4">Mobile-Optimized</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4 text-muted-foreground">✗</td>
                    <td className="text-center p-4 text-muted-foreground">
                      Partial
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4">Structured Curriculum</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4 text-muted-foreground">✗</td>
                  </tr>

                  <tr className="bg-muted/30">
                    <td className="p-4">Community Support</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4 text-muted-foreground">
                      Limited
                    </td>
                    <td className="text-center p-4 text-muted-foreground">✗</td>
                  </tr>
                  <tr>
                    <td className="p-4">Affordable Pricing</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4 text-muted-foreground">✗</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-4">Lifetime Access</td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center p-4 text-muted-foreground">
                      Varies
                    </td>
                    <td className="text-center p-4">
                      <BiCheckCircle className="w-5 h-5 text-primary mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E5F4F2] text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Experience All Features Today
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join SPA and get access to everything you need to succeed
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/2349063201115?text=Hi%20I%20want%20to%20enrol%20in%20the%20Smartphone%20Profitability%20Academy"
          >
            <button className="flex gap-x-2 justify-center items-center bg-[#009379] text-white mx-auto  px-8 py-4 rounded-[20px] font-semibold cursor-pointer">
              <MdOutlineRocketLaunch /> Start Learning Now
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
