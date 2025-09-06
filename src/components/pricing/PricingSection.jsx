{/* Pricing Plans Section */}
<div className="mt-24 max-w-6xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
    Pricing made simple
  </h2>
  <p className="mt-2 text-gray-600 text-center">
    DexKor plans are priced per seat
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Starter */}
    <div className="border rounded-2xl p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          $19.99
          <span className="text-sm font-medium text-gray-600">
            {" "}per user/month
          </span>
        </p>
        <p className="mt-4 text-gray-600">
          For startups and small teams with up to 10 users
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✓ AI agents, assistants, and deflection</li>
          <li>✓ Omnichannel ticketing platform</li>
          <li>✓ Data migration and integrations</li>
          <li>✓ Ready-to-go reporting & analytics</li>
        </ul>
      </div>
      <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
        Get started free
      </button>
      <p className="mt-2 text-sm text-gray-500 text-center">
        Trial Pro free for 45 days
      </p>
    </div>

    {/* Pro */}
    <div className="border-2 border-purple-400 rounded-2xl p-8 bg-purple-50 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          Pro <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">Popular</span>
        </h3>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          $59.99
          <span className="text-sm font-medium text-gray-600">
            {" "}per user/month
          </span>
        </p>
        <p className="mt-4 text-gray-600">
          Full-featured support & engagement platform for scaling orgs
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✓ Everything in Starter</li>
          <li>✓ Advanced reporting & analytics</li>
          <li>✓ Custom SLA and routing policies</li>
          <li>✓ Customizable objects and data types</li>
        </ul>
      </div>
      <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
        Get started free
      </button>
      <p className="mt-2 text-sm text-gray-500 text-center">
        Trial Pro free for 45 days
      </p>
    </div>

    {/* Ultimate */}
    <div className="border rounded-2xl p-8 flex flex-col justify-between bg-gray-50">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Ultimate</h3>
        <p className="mt-4 text-gray-600">
          Enterprise scale & flexibility to meet any requirement
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✓ Everything in Pro</li>
          <li>✓ Unlimited integrations</li>
          <li>✓ Full object customization</li>
          <li>✓ Enterprise-grade compliance & security</li>
        </ul>
      </div>
      <button className="mt-6 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
        Get a demo
      </button>
    </div>
  </div>
</div>
 