import { MountainIcon } from "lucide-react"

const Footer = () => {
  return <>
    <footer className="py-8 ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-2xl font-bold">
            Logo
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="flex flex-col space-y-1">
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                About
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Careers
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Blog
              </a>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Products</h4>
            <nav className="flex flex-col space-y-1">
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Integrations
              </a>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-1">
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Documentation
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Support
              </a>
              <a
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Community
              </a>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="text-sm text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</div>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
