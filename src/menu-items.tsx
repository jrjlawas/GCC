import { MenuItem } from "@/types/types";

export const leftMenuItems: MenuItem[] = [
  {
    id: "1",
    icon: "NiHome",
    label: "Home",
    description: "menu-dashboards-description",
    color: "text-primary",
    href: "/dashboards",
    children: [
      {
        id: "default",
        icon: "NiPresentation",
        label: "Welcome Page",
        href: "/dashboards/default",
        description: "menu-default-description",
      },
    ],
  },
  {
    id: "WebApps",
    icon: "NiPresentation",
    label: "Web Management",
    description: "menu-ui-description",
    color: "text-primary",
    href: "/webManagement",
    children: [
      {
        id: "inputs",
        icon: "NiInput",
        label: "Smileys Resto",
        href: "/webManagement",
        description: "menu-inputs-description",
        children: [
          {
            id: "homeManage",
            label: "Web Info",
            href: "/webManagement/homeManage",
            description: "menu-autocomplete-description",
            listIcon: "NiSelect",
          },
          {
            id: "homeItems",
            label: "Product Lists",
            href: "/webManagement/homeProducts",
            description: "menu-autocomplete-description",
            listIcon: "NiSelect",
          },
        ],
      },
    ],
  },
];

export const leftMenuBottomItems: MenuItem[] = [
  // {
  //   id: "docs",
  //   label: "menu-documentation",
  //   href: "/docs",
  //   icon: "NiDocumentCode",
  //   color: "text-primary",
  //   children: [
  //     {
  //       id: "docs-welcome",
  //       label: "menu-welcome",
  //       href: "/docs/welcome",
  //       hideInMenu: true,
  //       children: [
  //         {
  //           id: "docs-introduction",
  //           label: "docs-introduction",
  //           href: "/docs/welcome/introduction",
  //         },
  //         {
  //           id: "docs-faq",
  //           label: "docs-faq",
  //           href: "/docs/welcome/faq",
  //         },
  //         {
  //           id: "docs-changelog",
  //           label: "docs-changelog",
  //           href: "/docs/welcome/changelog",
  //         },
  //       ],
  //     },
  //     {
  //       id: "docs-getting-started",
  //       label: "docs-getting-started",
  //       href: "/docs/getting-started",
  //       hideInMenu: true,
  //       children: [
  //         {
  //           id: "docs-installation",
  //           label: "docs-installation",
  //           href: "/docs/getting-started/installation",
  //         },
  //         {
  //           id: "docs-file-structure",
  //           label: "docs-file-structure",
  //           href: "/docs/getting-started/file-structure",
  //         },
  //         {
  //           id: "docs-routing-and-menu",
  //           label: "docs-routing-and-menu",
  //           href: "/docs/getting-started/routing-and-menu",
  //         },
  //         {
  //           id: "docs-multi-language",
  //           label: "docs-multi-language",
  //           href: "/docs/getting-started/multi-language",
  //         },
  //       ],
  //     },
  //     {
  //       id: "docs-theme",
  //       label: "menu-theme",
  //       href: "/docs/theme",
  //       hideInMenu: true,
  //       children: [
  //         {
  //           id: "docs-settings",
  //           label: "docs-settings",
  //           href: "/docs/theme/settings",
  //         },
  //         {
  //           id: "docs-theme-provider",
  //           label: "docs-theme-provider",
  //           href: "/docs/theme/theme-provider",
  //         },
  //         {
  //           id: "docs-styling",
  //           label: "docs-styling",
  //           href: "/docs/theme/styling",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "settings",
  //   label: "menu-settings",
  //   href: "/settings",
  //   icon: "NiSettings",
  // },
];
