const HostingCard = ({
  icon,
  title,
  description,
  features,
  price,
  pricePeriod,
  highlightedFeatures = [],
  managedLink = null,
  getStartedLink,
}) => {
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="flex flex-col gap-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg
              className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {highlightedFeatures.includes(index) ? (
              <span className="text-orange-500 font-medium">{feature}</span>
            ) : (
              <span className="text-gray-700">{feature}</span>
            )}
          </div>
        ))}

        {managedLink && (
          <div className="mt-2">
            <a href="#" className="text-orange-500 hover:underline font-medium">
              {managedLink} <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>

      <div className="text-center mb-6">
        <p className="text-blue-600 font-medium">Starting at</p>
        <div className="flex items-center justify-center mt-1">
          <span className="text-blue-600 text-3xl font-bold">₹{price}</span>
          <span className="text-blue-600 font-medium">/{pricePeriod}</span>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
        <a href={getStartedLink}>Get Started!</a>
      </button>
    </div>
  )
}

const DomainIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="10" y="15" width="40" height="30" stroke="#2563EB" strokeWidth="2" fill="none" />
    <path d="M15 25 H25 M15 30 H20" stroke="#2563EB" strokeWidth="2" />
    <text x="15" y="40" fill="#2563EB" fontSize="8">
      licences
    </text>
  </svg>
)

const SharedHostingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="15" y="15" width="30" height="10" stroke="#F97316" strokeWidth="2" rx="2" />
    <rect x="15" y="27" width="30" height="10" stroke="#F97316" strokeWidth="2" rx="2" />
    <rect x="15" y="39" width="30" height="10" stroke="#F97316" strokeWidth="2" rx="2" />
    <path d="M25 15 H35 M25 27 H35 M25 39 H35" stroke="#F97316" strokeDasharray="2 2" />
  </svg>
)

const VPSHostingIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="15" y="10" width="30" height="8" stroke="#2563EB" strokeWidth="2" rx="1" />
    <rect x="15" y="20" width="30" height="8" stroke="#2563EB" strokeWidth="2" rx="1" />
    <rect x="15" y="30" width="30" height="8" stroke="#2563EB" strokeWidth="2" rx="1" />
    <path d="M30 38 L30 45 M20 45 H40" stroke="#2563EB" strokeWidth="2" />
    <circle cx="45" cy="14" r="2" fill="#2563EB" />
    <circle cx="45" cy="24" r="2" fill="#2563EB" />
    <circle cx="45" cy="34" r="2" fill="#2563EB" />
  </svg>
)

const DedicatedServerIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="10" y="12" width="40" height="10" stroke="#2563EB" strokeWidth="2" rx="1" />
    <rect x="10" y="24" width="40" height="10" stroke="#2563EB" strokeWidth="2" rx="1" />
    <rect x="10" y="36" width="40" height="10" stroke="#2563EB" strokeWidth="2" rx="1" />
    <path d="M42 17 L46 17 M42 29 L46 29 M42 41 L46 41" stroke="#2563EB" strokeWidth="2" />
    <path d="M14 17 L34 17 M14 29 L34 29 M14 41 L34 41" stroke="#2563EB" strokeDasharray="3 2" />
  </svg>
)

const WebHostingServices = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Get the Best Web Hosting Services in India</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <HostingCard
          icon={<DomainIcon />}
          title="Licences"
          description="Affordable Shared License Solutions"
          features={[
            "cPanel VPS",
            "cPanel Metal",
            "Plesk VPS",
            "Plesk Metal",
            "CloudLinux",
            "WHM Reseller",
            "SoftaCoulus",
            "Managed Services Available",
            "Renew At Same Price",
          ]}
          price="167"
          pricePeriod="mo"
          getStartedLink="https://billing.swaget.in/index.php/store/shared-licenses"
        />

        <HostingCard
          icon={<SharedHostingIcon />}
          title="SHARED HOSTING"
          description="Recommended For Basic Websites, Blogs"
          features={[
            "Unlimited cPanel Accounts",
            "Unlimited Free SSL",
            "Host Unlimited Domains",
            "Unlimited Bandwidth",
            "cPanel + WHM",
            "Renew At Same Price",
            "07 Days Money-Back Guarantee",
            "Managed Services Available",
          ]}
          highlightedFeatures={[0, 2]}
          price="788"
          pricePeriod="yr"
          getStartedLink="https://billing.swaget.in/index.php/store/web-hostings-usa"
        />

        <HostingCard
          icon={<VPSHostingIcon />}
          title="VPS HOSTING"
          description="Recommended For High-traffic Websites"
          features={[
            "Full Root Access",
            "High-Speed SSD Storage",
            "NVMe SSD storage",
            "24/7 Support",
            "Dedicated IP",
            "All Linux OS",
            "1 Gbps Port",
            "Managed Services Available",
            "Renew At Same Price",
          ]}
          price="6120"
          pricePeriod="yr"
          getStartedLink="https://billing.swaget.in/index.php/store/linux-vps-usa"
        />

        <HostingCard
          icon={<DedicatedServerIcon />}
          title="DEDICATED SERVERS"
          description="Recommended For High-traffic Websites and Custom Applications"
          features={[
            "High-Performance CPUs (Intel/AMD)",
            "SSD/NVMe Storage for Ultra-Fast Speed",
            "Full Root Access & Custom Configurations",
            "Unlimited Bandwidth & DDoS Protection",
            "Renew At Same Price",
            "30 Days Money-Back Guarantee",
          ]}
          price="3149"
          pricePeriod="mo"
          getStartedLink="https://billing.swaget.in/index.php/store/poweredge-dedicated-servers"
        />
      </div>
    </div>
  )
}

export default WebHostingServices
