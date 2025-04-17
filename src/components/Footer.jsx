import PhoneImage from "../assets/phone.png";
import MailImage from "../assets/mail.png";
import RazorPayImage from "../assets/razorpay.png";
import PhonepeImage from "../assets/phonepe.png";
import GpayImage from "../assets/gpay.png";
import UPIimage from "../assets/upi.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">ABC Traders</h2>
          <div className="flex items-center gap-2 mb-2">
            <span>
              <img className="w-5" src={PhoneImage} alt="" />
            </span>
            <span>9999999999</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span>
              <img className="w-4" src={MailImage} alt="" />
            </span>
            <span>abc@gmail.com</span>
          </div>
          <p className="mb-2 mt-8">100% Secure payments</p>
          <div className="flex gap-2 mt-2">
            <img
              src={RazorPayImage}
              alt="Razorpay"
              className="h-6"
            />
            <img
              src={PhonepeImage}
              alt="PhonePe"
              className="h-6"
            />
            <img
              src={GpayImage}
              alt="GPay"
              className="h-6"
            />
            <img
              src={UPIimage}
              alt="UPI"
              className="h-6"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Tshirt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Section */}
      <div className="text-center md:flex md:justify-between md:items-center max-w-7xl mx-auto">
        <p>
          © 2025 ABC Traders , Inc. All rights reserved. | Powered by{" "}
          <a href="#" className="underline font-medium">
            ABC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
