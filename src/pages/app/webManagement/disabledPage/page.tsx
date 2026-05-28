import { Box, Paper, Typography } from "@mui/material";

import Logo from "@/components/logo/logo";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/theme/theme-provider";

export default function Page() {
  const { isDarkMode } = useThemeContext();

  return (
    <Paper
      elevation={3}
      className={cn(
        isDarkMode
          ? "bg-[url(/images/misc/error-background-dark.svg)]"
          : "bg-[url(/images/misc/error-background-light.svg)]",
        "bg-background-paper shadow-darker-xs min-h-100 w-full items-center justify-center rounded-4xl bg-center py-14 md:min-w-200",
      )}
    >
      <Box className="flex flex-col gap-4 px-8 sm:px-14">
        <Box className="flex flex-col">
          <Box className="mb-14 flex justify-center">
            <Logo classNameMobile="hidden" />
          </Box>

          <Box className="flex flex-col items-center gap-4">
            <Typography variant="h1" component="h1">
              Building in Progress...
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This page is currently under development.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {" "}
              We're working to bring you new features and content soon.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
