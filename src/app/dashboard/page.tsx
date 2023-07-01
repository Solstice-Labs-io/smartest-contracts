"use client";
//TODO: ABSTRACT ALL THIS CODE INTO A SINGLE COMPONENT - SIDEBAR
import {
  BeakerIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Generate Contracts', href: '/dashboard', icon: BeakerIcon, current: true },
  { name: 'Review Contracts', href: '/review', icon: CodeBracketIcon, current: false },
]
const community = [
  { name: 'Community Reviews', href: '#', icon: UsersIcon, current: false },
  { name: 'Leaderboard', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Settings', href: '#', icon: CpuChipIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-2xl font-bold text-[#b9b6ff]">Smartest Contracts</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <div className="text-xs font-semibold leading-6 text-gray-400">AI Tools</div>
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">Community</div>
                <ul role="list" className="-mx-2 space-y-1">
                  {community.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                  <CurrencyDollarIcon className="h-8 w-8 rounded-full" />
                  <span aria-hidden="true">0x7e60df042a9c0868</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div >

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>

    </>
  )
}
