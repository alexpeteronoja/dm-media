import { CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci';
import { GrFacebook } from 'react-icons/gr';

function Footer() {
  return (
    <>
      <div className="bg-[#2D2D2D]  px-10 py-8 flex flex-col md:flex-row gap-y-2 items-center md:justify-between">
        <div className="text-[#FFFFFF] text-sm">
          © 2023 Anima’s Landing Page Ui Kit.
        </div>

        <div className="text-white flex gap-x-4">
          <CiYoutube />
          <CiInstagram />
          <CiLinkedin />
          <GrFacebook />
        </div>
      </div>
    </>
  );
}

export default Footer;
