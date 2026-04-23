import { CgSmartphone } from 'react-icons/cg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <>
      {/* <div className="bg-[#2D2D2D]  px-10 py-8 flex flex-col md:flex-row gap-y-2 items-center md:justify-between">
        <div className="text-[#FFFFFF] text-sm">© 2026 DM Media.</div>

        <div className="text-white flex gap-x-4">
          <CiYoutube />
          <CiInstagram />
          <CiLinkedin />
          <GrFacebook />
        </div>
      </div> */}

      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CgSmartphone className="w-6 h-6 text-primary" />
                <span className="text-lg text-primary">SPA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering creators to profit from their smartphones
              </p>
            </div>
            <div>
              <h4 className="mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Video Editing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AI Optimization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 DM Media. All rights reserved.</p>
          </div> */}
        </div>

        <div className="bg-[#2D2D2D] border-t border-border mt-15  px-10 pt-8 flex flex-col md:flex-row gap-y-2 items-center md:justify-between">
          <div className="text-[#FFFFFF] text-sm">
            &copy; 2026 DM Media. All rights reserved.
          </div>

          <div className="text-white flex gap-x-4">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
