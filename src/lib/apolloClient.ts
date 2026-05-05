import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://tj2rfcdbfrcx3emxk5plwny35u.appsync-api.ap-southeast-2.amazonaws.com/graphql",
    headers: {
      "x-api-key": "da2-c2x5ccvmcnat3ckfn74dzuuofu",
    },
  }),
  cache: new InMemoryCache(),
});
