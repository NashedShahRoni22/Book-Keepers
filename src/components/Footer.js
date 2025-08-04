export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
              Bookkeepers At Work
            </h3>
            <p className="mb-4 text-gray-400">
              Professional bookkeeping services specializing in women-owned
              businesses. 30+ years of experience helping businesses stay
              organized and compliant.
            </p>
            <div className="flex space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <span className="text-sm font-bold">QB</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                <span className="text-sm font-bold">IP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bookkeeping</li>
              <li>Tax Preparation</li>
              <li>Payroll Processing</li>
              <li>Financial Reporting</li>
              <li>QuickBooks Support</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(555) 123-4567</li>
              <li>maria@bookkeepersatwork.com</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bookkeepers At Work. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
