import { Server, Shield, Clock, Zap, Globe, BarChart, Headphones, ArrowUpCircle } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: Server,
      title: "High-Performance Hosting",
      description: "Lightning-fast servers with SSD storage and optimized configurations for maximum speed.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Free SSL certificates, DDoS protection, and automatic malware scanning to keep your site secure.",
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "We ensure your website stays online with our reliable infrastructure and redundant systems.",
    },
    {
      icon: Zap,
      title: "1-Click Installations",
      description: "Easily install WordPress, Drupal, and other popular applications with a single click.",
    },
    {
      icon: Globe,
      title: "Free Domain Name",
      description: "Get a free domain name for the first year with any annual hosting plan purchase.",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our experienced support team is available around the clock to help you with any issues.",
    },
    {
      icon: BarChart,
      title: "Resource Management",
      description: "Easy-to-use control panel to manage your hosting resources and monitor performance.",
    },
    {
      icon: ArrowUpCircle,
      title: "Auto Updates",
      description: "Keep your applications and CMS up to date with automatic security updates.",
    },
  ]

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Premium Hosting Services?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get everything you need to create and manage your website with our powerful hosting platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 bg-white rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-6 left-6">
                <div className="p-3 bg-blue-600 rounded-lg text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
            <div className="text-lg text-gray-600">Websites Hosted</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-lg text-gray-600">Average Uptime</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-lg text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
