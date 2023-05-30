'use client'

import { ChakraProvider } from '@chakra-ui/react'

const ChakraProv = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{ children }</ChakraProvider>;
}

export default ChakraProv
