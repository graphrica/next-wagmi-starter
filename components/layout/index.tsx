import { ReactElement, useEffect } from 'react'
import { Container, Flex, Grid, GridItem, Spacer } from '@chakra-ui/react'
import { useLoadingProgress } from '../loadingProgress'
import { Router } from 'next/router'
import { useAccount } from 'wagmi'
import WalletConnectButton from '../walletConnectButton'
import Head from 'next/head'

type Props = {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children, ...props }: Props) => {
  // 1. useLoadingProgress hook
  const { start, done } = useLoadingProgress()

  // 2. onRouterChangeStart
  const onRouteChangeStart = () => {
    start()
  }

  // 3. onRouterChangeComplete
  const onRouteChangeComplete = () => {
    setTimeout(() => {
      done()
    }, 1)
  }

  const {  isConnected} = useAccount();

  const onWalletConnection = () => {
    start()
  }

  const onWalletConnectionComplete = () => {
    setTimeout(() => {
      done()
    }, 1)
  }

  // 4. Subscribe to router events
  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart)
    Router.events.on('routeChangeComplete', onRouteChangeComplete)
    Router.events.on('routeChangeError', onRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart)
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
      Router.events.off('routeChangeError', onRouteChangeComplete)
    }
  }, [])

  useEffect(() => {
      onWalletConnection()
      onWalletConnectionComplete()
  }, [isConnected])

  return (
    <Flex direction="column" maxW={'full'}  {...props}>
       <Head>
        <title>Next WAGMI Starter</title>
        <meta
          name="next-wagmi-starter"
          content="Next Web3 Starter Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxHeight="99vh" maxWidth="full">
        <Grid
          templateAreas={`"header header"
                  "${!isConnected ? 'main main' : 'nav main'}"
                  "${!isConnected ? 'footer footer' : 'nav footer'}"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="99vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
          padding="1rem"
        >
       <GridItem pl="2" bg="orange.300" area={"header"}>
            <Flex>
              <Spacer />
              <WalletConnectButton />
            </Flex>
          </GridItem>
      {children}

      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
      </Grid>
      </Container>
    </Flex>
  )
}

export default Layout
