// import { Link } from "react-router-dom";

import { Box, Card, CardContent, Typography } from "@mui/material";

// import { LINKS } from "@/constants";
// import IllustrationConfigure from "@/icons/illustrations/illustration-configure";
// import NiBasket from "@/icons/nexture/ni-basket";
// import NiPalette from "@/icons/nexture/ni-palette";

export default function DashboardDefaultBanner() {
  // const handleConfigureButtonClick = () => {
  //   const themeCustomizationButton =
  //     document.getElementById("themeCustomization");
  //   if (themeCustomizationButton) {
  //     themeCustomizationButton.click();
  //   }
  // };
  return (
    <>
      {/* <Typography variant="h6" component="h6" className="mb-3">
        Configuration
      </Typography> */}

      <Card>
        <CardContent className="flex h-full flex-col items-start justify-between">
          <Box className="flex w-full flex-col md:flex-row">
            <Box className="w-full">
              <Typography variant="h4" component="h4" className="card-title">
                Welcome to Glotti Client Center!
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="text-text-primary text-center md:text-start xl:max-w-md"
              >
                Your all-in-one platform to manage projects, websites, and
                business applications with ease. Stay connected, track progress,
                and collaborate seamlessly with the Glotti team—whether you're a
                client or part of our internal workforce.
              </Typography>
            </Box>
            {/* <Box className="flex w-full justify-center md:w-6/12 md:justify-end xl:w-4/12">
              <IllustrationConfigure className="text-primary h-64 w-full max-w-xs object-contain" />
            </Box> */}
          </Box>
          {/* <Box className="flex flex-row gap-1">
            <Button
              className="mx-auto md:mx-0"
              size="medium"
              color="primary"
              variant="contained"
              startIcon={<NiPalette size={"medium"} />}
              onClick={handleConfigureButtonClick}
            >
              Configure Theme
            </Button>

            <Button
              className="mx-auto md:mx-0"
              size="medium"
              color="primary"
              variant="pastel"
              startIcon={<NiBasket size={"medium"} />}
              to={LINKS.purchase}
              target="_blank"
              component={Link}
            >
              Buy
            </Button>
          </Box> */}
        </CardContent>
      </Card>
    </>
  );
}
