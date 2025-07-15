import { Listbox, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const company = [
    {
        name: 'Overview',
        href: '#',
        icon: ChartPieIcon,
        children: [
            { name: 'About Us', href: '#', icon: ChartPieIcon },
            { name: 'Our Team', href: '#', icon: ChartPieIcon },
            { name: 'Newsroom', href: '#', icon: ChartPieIcon }
        ]
    },
    {
        name: 'Carrers',
        href: '#',
        icon: CursorArrowRaysIcon,
        children: [
            { name: 'Open Positions', href: '#', icon: CursorArrowRaysIcon },
            { name: 'Life at Company', href: '#', icon: CursorArrowRaysIcon },
            { name: 'Internships', href: '#', icon: CursorArrowRaysIcon }
        ]
    },
    {
        name: 'Gallery',
        href: '#',
        icon: CursorArrowRaysIcon,
        children: [
            { name: 'Photos', href: '#', icon: CursorArrowRaysIcon },
            { name: 'Videos', href: '#', icon: CursorArrowRaysIcon }
        ]
    }
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

interface CompanyProps {
    item: NavigationItem;
}

export default function Company({ item }: CompanyProps) {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                >
                    {item.name}
                </a>
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute z-10 mt-5 flex w-screen max-w-max -translate-x-8 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
                <div className="w-screen max-w-fit flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                    <div className={`p-4 flex gap-x-6 gap-y-8`}>
                        {company.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <a href={item.href} className="font-semibold text-gray-900">
                                        {item.name}
                                        <ul>
                                            {item.children.map((child, index) => (
                                                <li key={index} className="mt-2 flex items-center gap-x-2">
                                                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                    </div>
                                                    <a href={child.href} className="text-gray-600 hover:text-indigo-600">
                                                        {child.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </PopoverPanel>
        </Popover>
    )
}
