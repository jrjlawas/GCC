// import Notifications from "../notifications/notifications";
import User from "../user/user";
// import { useState } from "react";
import { Link } from "react-router-dom";

// import { Box, Button, Fade, useMediaQuery, useTheme } from "@mui/material";
import { Box, Button } from "@mui/material";

import { useLayoutContext } from "@/components/layout/layout-context";
import Logo from "@/components/logo/logo";
import { DEFAULTS } from "@/config";
// import NiListSquare from "@/icons/nexture/ni-list-square";
import NiMenuSplit from "@/icons/nexture/ni-menu-split";
import { cn } from "@/lib/utils";
import { MenuShowState } from "@/types/types";

export default function Header() {
  const {
    showLeftInMobile,
    showLeftMobileButton,
    leftPrimaryCurrent,
    leftShowBackdrop,
  } = useLayoutContext();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [rightButtonsVisibleMobile, setRightButtonsVisibleMobile] = useState(false);

  // const handleRightButtonsMobileToggle = () => {
  //   setRightButtonsVisibleMobile((prevValue) => !prevValue);
  // };

  return (
    <Box className="mui-fixed fixed z-20 h-20 w-full" component="header">
      <Box
        className={cn(
          "bg-background-paper shadow-darker-xs flex h-full w-full flex-none flex-row items-center rounded-b-3xl sm:h-20",
          leftShowBackdrop && "pointer-events-none",
        )}
        style={{ padding: `0 var(--main-padding)` }}
      >
        <Box
          className={cn(
            "bg-background-paper absolute inset-0 -z-10 rounded-b-3xl",
            leftPrimaryCurrent !== MenuShowState.Hide &&
              "rounded-bl-none! rtl:rounded-br-none!",
          )}
        ></Box>
        <Button
          variant="text"
          size="large"
          color="text-primary"
          className={cn(
            "icon-only hover-icon-shrink [&.active]:text-primary [&.active]:bg-grey-25 hover:bg-grey-25",
            showLeftMobileButton ? "flex" : "hidden",
            leftPrimaryCurrent !== MenuShowState.Hide && "active",
          )}
          onClick={() => showLeftInMobile()}
          startIcon={<NiMenuSplit size={24} />}
        />

        <Box className="flex h-full flex-1 flex-row items-center gap-4 md:gap-6">
          <Link to={DEFAULTS.appRoot}>
            <Logo
              classNameFull="ms-2 hidden md:block"
              classNameMobile="ms-2 md:hidden"
            />
          </Link>
        </Box>
        {/* <Box className="flex flex-row sm:gap-1">
          <Fade in={rightButtonsVisibleMobile || !isMobile}>
            <Box
              className={cn(
                "hidden flex-row sm:flex! sm:gap-1",
                rightButtonsVisibleMobile ? "flex" : "hidden"
              )}
            >
              <Notifications />
            </Box>
          </Fade>
          <Button
            variant="text"
            size="large"
            color="text-primary"
            className={cn(
              "icon-only hover-icon-shrink [&.active]:text-primary hover:bg-grey-25 ms-1 sm:hidden",
              rightButtonsVisibleMobile && "active"
            )}
            onClick={handleRightButtonsMobileToggle}
            startIcon={<NiListSquare size={"large"} />}
          />
        </Box> */}
        <User />
      </Box>
    </Box>
  );
}
