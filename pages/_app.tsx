import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { WagmiConfig, createClient, configureChains, defaultChains } from "wagmi"
import { connectors } from "../utils/connectors"
import { infuraProvider } from "wagmi/providers/infura"
import Layout from "../components/layout"
import { LoadingProgressProvider } from "../components/loadingProgress"


const infuraId = process.env.REACT_APP_INFURA_ID
const { provider } = configureChains(
  defaultChains,
  [infuraProvider({ apiKey: infuraId })]
)

const client = createClient({
  connectors,
  provider,
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
      <LoadingProgressProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </LoadingProgressProvider>
      </WagmiConfig>
   
    </ChakraProvider>
  )
}

export default MyApp
