import Image from 'next/image'
import React from 'react'

const page = () => {
  const countries = [
    { name: 'المملكة المتحدة', flag: '/Country=united-states-of-america.svg' },
    { name: 'المانيا', flag: '/Country=germany.svg' },
    { name: 'فرنسا ', flag: '/Country=france.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
    { name: ' الصين', flag: '/Country=china.svg' },
  ]

  return (
    <section className="relative bg-[#f9f9f9] pt">
      {/* Buttons Section */}
      <div className="absolute top-[-60px] h-[74px] left-1/2 transform -translate-x-1/2 flex justify-center  z-10">
        <button className="bg-[#f9f9f9] text-lg text-tajwal font-medium lg:w-[212px] px-6 py-2 rounded-lg">
          دولية
        </button>
        <button className="bg-inherit text-lg text-white font-medium hover:text-tajwal hover:bg-[#f9f9f9] lg:w-[212px] px-6 py-2 rounded-lg">
          قارية
        </button>
        <button className="bg-inherit text-lg text-white font-medium hover:text-tajwal hover:bg-[#f9f9f9] lg:w-[212px] px-6 py-2 rounded-lg">
          عالمية
        </button>
      </div>

      <div className="flex flex-col items-center space-y-8 bg-[#f9f9f9] px-6 sm:px-12 md:px-20 lg:px-44">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 sm:gap-x-16 sm:space-y-0 items-end w-full">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative flex items-center bg-white rounded-lg shadow-md w-full h-[80px]"
            >
              <Image
                className="absolute left-3"
                src="/arrow.png"
                alt="Arrow"
                width={10}
                height={10}
              />
              <Image
                className="ml-6 mr-6"
                src={country.flag}
                alt={`${country.name} Flag`}
                width={60}
                height={60}
              />
              <p className="text-gray-500 text-[16px] sm:text-[20px] font-light ml-6">
                {country.name}
              </p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="pb-10 pt-4">
          <button className="bg-[#575050] opacity-85 text-lg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-light text-opacity-80 shadow-lg h-[55px] w-full sm:w-96">
            عرض جميع الدول
          </button>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-10"
        style={{ backgroundImage: "url('/Rectangle 875.png')" }}
      >
        {/* Section Title */}
        <h1 className="font-bold text-xl sm:text-2xl text-[#626E7B] text-center sm:text-right sm:mr-32 sm:mb-12">
          كيف تستخدم &quot;تجوال&quot;؟
        </h1>

        {/* iPhone Models Section */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center mt-3">
          {/* First iPhone */}
          <div className="flex flex-col items-center">
            <Image
              src="/group 64.png"
              width={200}
              height={200}
              alt="iPhone Model 1"
              className="w-[150px] sm:w-[200px] h-auto"
            />
            <p className="text-[#626E7B] mt-3 font-bold text-sm sm:text-lg">
              حمل التطبيق
            </p>
          </div>

          {/* Second iPhone */}
          <div className="flex flex-col items-center">
            <Image
              src="/group 65.png"
              width={200}
              height={200}
              alt="iPhone Model 2"
              className="w-[150px] sm:w-[200px] h-auto"
            />
            <p className="text-[#626E7B] mt-3 font-bold text-sm sm:text-lg">
              إختر الوجهة والباقة
            </p>
          </div>

          {/* Third iPhone */}
          <div className="flex flex-col items-center">
            <Image
              src="/group 66.png"
              width={200}
              height={200}
              alt="iPhone Model 3"
              className="w-[150px] sm:w-[200px] h-auto"
            />
            <p className="text-[#626E7B] mt-3 font-bold text-sm sm:text-lg">
              ثبت الشريحة
            </p>
          </div>

          {/* Fourth iPhone */}
          <div className="flex flex-col items-center">
            <Image
              src="/group 67.png"
              width={200}
              height={200}
              alt="iPhone Model 4"
              className="w-[150px] sm:w-[200px] h-auto"
            />
            <p className="text-[#626E7B] mt-3 font-bold text-sm sm:text-lg">
              إستمتع بالباقة
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page

