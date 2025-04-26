const WordPressFeatures = () => {
  const features = [
    {
      title: "One-Click Installation",
      description: "Easily install WordPress with just one click.",
      icon: "🚀",
    },
    {
      title: "Automatic Updates",
      description: "Keep your WordPress site secure with automatic updates.",
      icon: "🔄",
    },
    {
      title: "Optimized Performance",
      description: "Experience blazing-fast performance with our optimized servers for WordPress.",
      icon: "⚡️",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">WordPress Hosting Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-4xl mx-auto text-gray-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose TechPro for WordPress Hosting?</h3>
          <p className="mb-4">
            At TechPro Hosting, we understand that WordPress powers over 40% of all websites on the internet. That's why
            we've optimized our hosting environment specifically for WordPress sites, ensuring lightning-fast loading
            times, enhanced security, and seamless scalability.
          </p>
          <p className="mb-4">
            Our WordPress hosting solutions come with pre-installed WordPress, automatic updates, and daily backups to
            keep your site secure and up-to-date. Whether you're running a personal blog, business website, or
            e-commerce store, our WordPress hosting provides the perfect foundation for your online presence.
          </p>
          <p className="mb-4">
            With our specialized WordPress caching, your visitors will experience faster page loads, which not only
            improves user experience but also boosts your search engine rankings. Our expert support team is available
            24/7 to assist with any WordPress-related questions or issues you might encounter.
          </p>
          <p className="mb-4">
            Choose TechPro Hosting for your WordPress site and join thousands of satisfied customers who enjoy reliable,
            high-performance hosting with unmatched customer support. From bloggers to businesses, our WordPress hosting
            solutions are designed to meet the needs of websites of all sizes and types.
          </p>
          <p>
            Ready to take your WordPress site to the next level? Explore our WordPress hosting plans today and
            experience the TechPro difference for yourself. With our 99.9% uptime guarantee and 7-day money-back policy,
            you can try our services risk-free and see why we're the preferred choice for WordPress hosting in India.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WordPressFeatures
