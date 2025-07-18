import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    NewspaperIcon,
    DocumentMagnifyingGlassIcon,
    HashtagIcon,
    LifebuoyIcon,
    BuildingOfficeIcon,
    PhotoIcon,
    VideoCameraIcon
} from '@heroicons/react/24/outline'

const company = [
    {
        name: 'Overview',
        href: '#',
        icon: ChartPieIcon,
        children: [
            { name: 'About Us', href: '#', icon: DocumentMagnifyingGlassIcon },
            { name: 'Our Team', href: '#', icon: ChartPieIcon },
            { name: 'Newsroom', href: '#', icon: NewspaperIcon }
        ]
    },
    {
        name: 'Carrers',
        href: '#',
        icon: CursorArrowRaysIcon,
        children: [
            { name: 'Open Positions', href: '#', icon: HashtagIcon },
            { name: 'Life at Company', href: '#', icon: LifebuoyIcon },
            { name: 'Internships', href: '#', icon: BuildingOfficeIcon }
        ]
    },
    {
        name: 'Gallery',
        href: '#',
        icon: CursorArrowRaysIcon,
        children: [
            { name: 'Photos', href: '#', icon: PhotoIcon },
            { name: 'Videos', href: '#', icon: VideoCameraIcon }
        ]
    }
]

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

export default function Company() {
    return (
        <div className="w-screen max-w-fit flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                    <div className={`p-4 flex gap-x-6 gap-y-8`}>
                        {company.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                    <div href={item.href} className="font-semibold text-gray-900">
                                        {item.name}
                                        <ul>
                                            {item.children.map((child, index) => (
                                                <li key={index} className="mt-2 flex items-center gap-x-2">
                                                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <child.icon aria-hidden="true" className="size-4 text-gray-600 group-hover:text-indigo-600" />
                                                    </div>
                                                    <a href={child.href} className="text-gray-600 hover:text-indigo-600">
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
