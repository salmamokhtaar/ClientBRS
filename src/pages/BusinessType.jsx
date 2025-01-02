import React from 'react';

function BusinessType() {
  return (
    <div id="business-types" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-blue-600">Business Registration Types</h2>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style={{ margin: '0 auto', height: '35px' }} xmlSpace="preserve">
            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}></circle>
            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto">Choose the right structure for your business.</p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {[
            {
              title: "Sole Proprietorship",
              description: "The simplest form of business ownership, where one individual owns and operates the business.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm-.5 10a2.5 2.5 0 1 1 1 0v-1a2.5 2.5 0 0 1-1 0v1zm1-2.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/>
                </svg>
              )
            },
            {
              title: "Partnership",
              description: "A business owned by two or more individuals sharing responsibilities and profits.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                  <path d="M9.5 8a2.5 2.5 0 1 0-5 0A2.5 2.5 0 0 0 9.5 8zM8 0a4 4 0 1 0 .001 8A4 4 0 0 0 8 0zm4.5 8a2.5 2.5 0 1 0-5 0A2.5 2.5 0 0 0 12.5 8zM12 0a4 4 0 1 0 .001 8A4 4 0 0 0 12 0z"/>
                </svg>
              )
            },
            {
              title: "Limited Liability Company (LLC)",
              description: "Combines the liability protection of a corporation with the tax benefits of a partnership.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
                  <path d="M8 0s3 0 3 3v2.5a4.5 4.5 0 1 1-6 0V3s0-3 3-3zM4 6h8v3.5a5.5 5.5 0 1 1-8 0V6z"/>
                </svg>
              )
            },
            {
              title: "Corporation",
              description: "A separate legal entity from its owners, providing liability protection but requiring more compliance.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                  <path d="M1.5 0h13a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 15.5v-13A1.5 1.5 0 0 1 1.5 0zM1 2h14v12H1V2zm3 1h2v2H4V3zm0 3h2v2H4V6zm0 3h2v2H4V9zm3-6h2v2H7V3zm0 3h2v2H7V6zm0 3h2v2H7V9zm3-6h2v2h-2V3zm0 3h2v2h-2V6zm0 3h2v2h-2V9z"/>
                </svg>
              )
            },
            {
              title: "Nonprofit Organization",
              description: "Operates for charitable purposes and can obtain tax-exempt status.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="M8 2.748-.717 4.505a4.5 4.5 0 0 0 .697 8.845l.066.013 7.037 3.516 7.037-3.516.066-.013a4.5 4.5 0 0 0 .697-8.845L8 2.748zM8 0a3.5 3.5 0 0 1 2.497 5.939l-.139.134-1.348 1.348L8 9.184l-1.01-1.014-1.348-1.348-.139-.134A3.5 3.5 0 0 1 8 0z"/>
                </svg>
              )
            },
            {
              title: "Cooperative",
              description: "Owned and operated for the benefit of its members, focusing on shared goals.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M3 9a3 3 0 1 1 4 0v3h2V9a3 3 0 1 1 4 0v3h2V9a5 5 0 0 0-10 0v3H3V9zm0 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
                </svg>
              )
            }
          ].map((service, index) => (
            <div key={index} className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ animationDuration: '1s', animationName: 'fadeInUp' }}>
              <div className="py-6 px-8 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                <div className="inline-block text-gray-900 mb-4">{service.icon}</div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-blue-600">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessType;