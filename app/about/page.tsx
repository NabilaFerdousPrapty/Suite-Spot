import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <main className="text-black">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center flex flex-col items-center justify-center h-72"
        style={{ backgroundImage: "url('/image/about_us_banner.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
          Suite Spot: a comprehensive guide to your memorable stay
        </h1>
        <div>
          <p className="text-lg">
            Welcome to Suite Spot, your all-in-one hotel management solution.
            From bookings to analytics, we have got you covered.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg">
            Our hotel management system revolutionizes the way hotels operate,
            enabling businesses to provide exceptional guest experiences while
            optimizing operations. From luxurious resorts to boutique hotels,
            our system adapts to every hospitality need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Content */}
          <div className="space-y-4 my-auto">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p>
              To empower the hospitality industry with modern, efficient, and
              user-friendly tools that simplify operations, maximize revenue,
              and elevate guest satisfaction.
            </p>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p>
              To be the leading hotel management platform trusted by businesses
              worldwide for our innovation, reliability, and customer-centric
              solutions.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/image/hotel_top_view.jpg"
              alt="Mission and Vision"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Features That Set Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/image/booking_home.png"
                  alt="Booking"
                  className="mx-auto"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Effortless Bookings
              </h3>
              <p>
                Streamline the booking process with our intuitive and fast
                reservation system.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/image/analytics_graph.png"
                  alt="Analytics"
                  className="mx-auto"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Data-Driven Insights
              </h3>
              <p>
                Gain actionable insights through comprehensive reporting and
                analytics.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image
                  src="/image/customer_support.png"
                  alt="Customer Support"
                  className="mx-auto"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Customer Support
              </h3>
              <p>Our dedicated team is here to help you, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 border border-gray-100 rounded-lg shadow-lg">
            <p className="italic mb-4">
              &quot;This system has transformed the way we manage our hotel.
              From bookings to analytics, everything is seamless and
              efficient.&quot;
            </p>
            <h4 className="font-semibold">- Jane Doe, Resort Owner</h4>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 border border-gray-100 rounded-lg shadow-lg">
            <p className="italic mb-4">
              &quot;Our guest satisfaction has skyrocketed since we implemented
              this platform. It&apos;s a game-changer for our business.&quot;
            </p>
            <h4 className="font-semibold">- John Smith, Hotel Manager</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Hotel Management?
          </h2>
          <p className="text-lg mb-8">
            Join the thousands of hotels worldwide using our platform to
            revolutionize their operations.
          </p>
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
