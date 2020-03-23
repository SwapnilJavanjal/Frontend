import * as React from 'react';
import { ThemeProvider, CSSReset, Divider, Flex } from '@chakra-ui/core';
import { Footer, GlobalStyles, Main } from './elements';
import theme from '../../config/theme';
import SideNav from './SideNav';
import SidePanel from './SidePanel';
import CookieConsent from './CookieConsent';
import ApolloProvider from '../services/apollo/ApolloProvider';
import { useStores } from '../hooks/useStore';
import UserProvider from './UserProvider';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { userStore } = useStores();

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider>
        <UserProvider userStore={userStore}>
          <CSSReset />
          <GlobalStyles />
          <Flex flexDirection="column">
            <Flex minH="100vh">
              <SideNav />
              <Divider mx="0" orientation="vertical" />
              <Main>
                {children}
                <Footer />
              </Main>
              <SidePanel />
            </Flex>
          </Flex>
          <CookieConsent />
        </UserProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default Layout;
