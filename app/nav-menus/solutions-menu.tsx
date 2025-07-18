import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
    BookOpenIcon,
    ChartPieIcon,
    CircleStackIcon,
    CogIcon,
    CursorArrowRaysIcon,
    CurrencyDollarIcon,
    LockClosedIcon,
    PlusIcon,
    PresentationChartLineIcon,
    UsersIcon
} from '@heroicons/react/24/outline'

const solutions = [
    {
        name: 'By Industry',
        href: '#',
        icon: ChartPieIcon,
        children: [
            { name: 'Healthcare', href: '#', icon: PlusIcon },
            { name: 'Finance', href: '#', icon: CurrencyDollarIcon },
            { name: 'Retail', href: '#', icon: PresentationChartLineIcon },
            { name: 'Education', href: '#', icon: BookOpenIcon }
        ]
    },
    {
        name: 'By Use Case',
        href: '#',
        icon: CursorArrowRaysIcon,
        children: [
            { name: 'Data Analysis', href: '#', icon: CircleStackIcon },
            { name: 'Automation', href: '#', icon: CogIcon },
            { name: 'Customer Engagement', href: '#', icon: UsersIcon },
            { name: 'Security', href: '#', icon: LockClosedIcon }
        ]
    }
]

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

interface SolutionsProps {
    item: NavigationItem;
}

export default function Solutions() {
    return (
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-300 text-sm/6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 grid grid-cols-2 gap-x-6 gap-y-8">
                {solutions.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4">
                        <div>
                            <div href={item.href} className="font-semibold text-gray-800">
                                {item.name}
                                <ul>
                                    {item.children.map((child, index) => (
                                        <li key={index} className="mt-4 flex items-center gap-x-4">
                                            <div className="mt-1 flex size-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <child.icon aria-hidden="true" className="size-4 text-gray-600" />
                                            </div>
                                            <a href={child.href} className="text-gray-800 hover:text-orange-400">
                                                {child.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
