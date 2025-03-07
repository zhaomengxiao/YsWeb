"use client"

import { Button } from "./button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu"
import { Menu, MoveRight, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header1() {
    const navigationItems = [
        {
            title: "产品",
            description: "探索我们的产品系列",
            items: [
                {
                    title: "手术机器人",
                    href: "/products/robot",
                },
                {
                    title: "导航系统",
                    href: "/products/navigation",
                },
                {
                    title: "手术规划",
                    href: "/products/planning",
                },
                {
                    title: "术中监测",
                    href: "/products/monitoring",
                },
            ],
        },
        {
            title: "关于我们",
            description: "了解央山医疗的故事",
            items: [
                {
                    title: "公司介绍",
                    href: "/about",
                },
                {
                    title: "研发团队",
                    href: "/team",
                },
                {
                    title: "投资者关系",
                    href: "/investors",
                },
                {
                    title: "联系我们",
                    href: "/contact",
                },
            ],
        },
    ]

    const [isOpen, setOpen] = useState(false)
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-[#121212] border-b border-[#333] shadow-lg backdrop-blur-sm bg-opacity-90">
            <div className="container relative mx-auto min-h-16 sm:min-h-20 lg:min-h-24 flex gap-3 sm:gap-4 lg:gap-6 flex-row lg:grid lg:grid-cols-3 items-center px-4 sm:px-6">
                <div className="justify-start items-center gap-6 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-6 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="font-medium text-base lg:text-lg px-4 lg:px-6 py-2 lg:py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#f0f0f0] hover:text-[#e91e63] transition-all data-[state=open]:bg-[#2a2a2a] data-[state=open]:text-[#e91e63] rounded-lg">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[450px] p-6 bg-[#1a1a1a] border border-[#333]">
                                        <div className="flex flex-col lg:grid grid-cols-2 gap-6">
                                            <div className="flex flex-col">
                                                <p className="text-xl font-semibold bg-gradient-to-r from-[#e91e63] to-[#9c27b0] text-transparent bg-clip-text">{item.title}</p>
                                                <p className="text-[#888] text-base mt-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-col text-base justify-end">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink
                                                        href={subItem.href}
                                                        key={subItem.title}
                                                        className="flex flex-row justify-between items-center hover:bg-[#222] py-3 px-4 rounded-lg transition-colors group"
                                                    >
                                                        <span className="text-[#f0f0f0] group-hover:text-[#e91e63] transition-colors">{subItem.title}</span>
                                                        <MoveRight className="w-5 h-5 text-[#666] group-hover:text-[#e91e63] transition-colors" />
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-[#e91e63] to-[#9c27b0] text-transparent bg-clip-text">央山医疗</p>
                </div>
                <div className="flex justify-end w-full gap-2 sm:gap-3 lg:gap-6">
                    <Button className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#f0f0f0] hover:text-[#e91e63] transition-all rounded-lg border border-[#333] hover:border-[#e91e63]">
                        登录
                    </Button>
                    <Button className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#e91e63] to-[#9c27b0] hover:opacity-90 transition-opacity text-[#f0f0f0] rounded-lg">
                        预约演示
                    </Button>
                </div>
                <div className="flex w-10 sm:w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="hover:bg-[#222] transition-colors text-[#f0f0f0]">
                        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-16 sm:top-20 lg:top-24 border-t border-[#333] flex flex-col w-full right-0 bg-[#121212] shadow-lg py-4 sm:py-6 container gap-6 sm:gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title} className="px-4">
                                    <div className="flex flex-col gap-3 sm:gap-4">
                                        <p className="text-lg sm:text-xl font-semibold text-[#e91e63]">{item.title}</p>
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    to={subItem.href}
                                                    className="flex justify-between items-center hover:bg-[#222] p-3 sm:p-4 rounded-lg transition-colors group"
                                                >
                                                    <span className="text-base sm:text-lg text-[#f0f0f0] group-hover:text-[#e91e63] transition-colors">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#666] group-hover:text-[#e91e63] transition-colors" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export { Header1 }
