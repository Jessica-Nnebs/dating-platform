import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Landing from './components/landing/landing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Landing/>
    </ChakraProvider>
  );
}

export default App;
