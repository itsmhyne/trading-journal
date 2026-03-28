"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  LifeBuoyIcon,
  SendIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
  TerminalIcon,
  ChartCandlestickIcon,
  LayoutDashboardIcon,
  BookAudioIcon,
  ChartLineIcon,
  CalendarDays,
  TargetIcon,
  NotebookPenIcon,
  BellDotIcon,
  BadgeDollarSignIcon,
  BadgeQuestionMark,
  Brain,
} from "lucide-react"
import { NavBasics } from "./nav-basic"

const data = {
  user: {
    name: "M. Hamdan Yusuf",
    email: "m@mhamdanydev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: <LayoutDashboardIcon />,
      isActive: true,
      items: [],
    },
    {
      title: "Journal",
      url: "journal",
      icon: <BookAudioIcon />,
      items: [],
    },
    {
      title: "Analyticts",
      url: "analyticts",
      icon: <ChartLineIcon />,
      items: [],
    },
    {
      title: "Kalender PnL",
      url: "calendar",
      icon: <CalendarDays />,
      items: [],
    },
    {
      title: "Goal & Risk Manajemen",
      url: "goals",
      icon: <TargetIcon />,
      items: [],
    },
    {
      title: "Trading Notes",
      url: "notes",
      icon: <NotebookPenIcon />,
      items: [],
    },
    {
      title: "Settings",
      url: "#",
      icon: <Settings2Icon />,
      items: [
        {
          title: "Profile",
          url: "profile",
        },
        {
          title: "Preference",
          url: "preference",
        },
      ],
    },
    {
      title: "Notification",
      url: "notification",
      icon: <BellDotIcon />,
      items: [],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: <LifeBuoyIcon />,
    },
    {
      title: "Feedback",
      url: "#",
      icon: <SendIcon />,
    },
  ],
  projects: [
    {
      name: "Pair",
      url: "pair",
      icon: <BadgeDollarSignIcon />,
    },
    {
      name: "Strategy",
      url: "strategy",
      icon: <Brain />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <ChartCandlestickIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">Mhy.ne_</span>
                  <span className="truncate text-xs">Journal Trading</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavBasics projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
