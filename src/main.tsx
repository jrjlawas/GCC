import "@/i18n/i18n";
import "@/style/global.css";
import "@fontsource/mulish/latin.css";
import "@fontsource/urbanist/latin.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LicenseInfo } from "@mui/x-license";

import App from "@/App";
import { client } from "@/lib/apolloClient";
// import { ApolloProvider  } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

LicenseInfo.setLicenseKey(import.meta.env.VITE_MUIX_LICENSE_KEY || "");

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>,
);
