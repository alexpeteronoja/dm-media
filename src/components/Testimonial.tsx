import { FaRegStar } from 'react-icons/fa';

interface TestimonialProp {
  photo: string;
  name: string;
  message: string;
}

function Testimonial({ photo, name, message }: TestimonialProp) {
  return (
    <>
      <div>
        <div>
          <div className="bg-white p-7 flex flex-col md:flex-row gap-7 rounded-3xl my-auto">
            <div>
              <img
                src={photo}
                alt=""
                className="w-25 h-25 rounded-full mx-auto object-cover"
              />

              <div className="text-center">
                <p>{name}</p>
              </div>
            </div>

            {/* Second Section */}
            <div className="self-center">
              <div className="flex">
                <FaRegStar className="text-[#F8D57E]" />
                <FaRegStar className="text-[#F8D57E]" />
                <FaRegStar className="text-[#F8D57E]" />
                <FaRegStar className="text-[#F8D57E]" />
                <FaRegStar className="text-[#F8D57E]" />
              </div>

              <div className="mt-4 text-base">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
