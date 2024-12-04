import Image from "next/image"; 
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#d9dee4] bg-opacity-30 text-[#575050]">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 gap-8 pb-2 pt-5 text-center md:grid-cols-3 md:justify-between md:text-right">
        {/* Site Map */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:w-[310px]">
          <Image src="/image 7.png" width={75} height={75} alt="tajwal logo" className="mb-4 md:mb-9" />
          <div className="px-4 text-center md:text-right">
            <h3 className="text-sm font-semibold mb-2 md:mb-4">شركة تجوال العالم للتجارة</h3>
            <p className="text-[10px] mb-2 md:mb-4 leading-relaxed">
              هي أول شركة سعودية متخصصة في بيع شرائح التجوال الالكترونية في السعودية، ومرخصة
              بالسجل التجاري رقم 7041398541
            </p>
            <div className="flex justify-center gap-3 items-center text-lg md:justify-start">
              <a href="#">
                <FaSquareXTwitter />
              </a>
              <a href="#">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Download the App */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm font-semibold mb-2 md:mb-4">حمل التطبيق</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center items-center gap-4">
              <a href="#">
                <Image
                  src="/G Play.png"
                  alt="Google Play"
                  width={75}
                  height={75}
                />
              </a>
              <a href="#">
                <Image
                  src="/APP Store.png"
                  alt="App Store"
                  width={75}
                  height={75}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="w-full md:w-56">
          <h3 className="text-sm font-semibold mb-2 md:mb-4 text-center md:text-right">خريطة الموقع</h3>
          <ul className="grid grid-cols-2 gap-2 text-center md:gap-1">
            <li>
              <a href="#" className="hover:underline text-[10px]">
                البداية
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[10px]">
                دخول
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[10px]">
                الدول
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[10px]">
                تسجيل
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[10px]">
                العروض
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-[10px]">
                خدمة العملاء
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#626E7B] text-white text-center py-4 flex flex-col items-center space-y-3 md:flex-row md:justify-between md:px-10 lg:px-40">
        <p className="text-[10px] font-light">
          جميع الحقوق محفوظة لـ <span className="underline">تجوال</span>
        </p>
        <div className="flex gap-3 text-[10px] font-light">
          <a href="#" className="underline">
            سياسة الخصوصية
          </a>
          <a href="#" className="underline">
            سياسة الاستخدام
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
