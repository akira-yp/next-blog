'use client'

import Link from 'next/link'
import useState from '../../../store'
import React from 'react'
import { Flex, Spacer, Box, Center, Text } from '@chakra-ui/react'

const Navigation = () => {
  const { user } = useState()

  return (
    <Box pos="absolute" top="0" w="100%">
      <Flex>
        <Box p="4">
          <Text as="b" fontSize="lg">
            <Link href="/">
              YP2.TECH.WEB
            </Link>
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          {user.id ? (
              <Flex gap='2'>
                <Center>
                  <Text>
                    <Link href="/admin/profile">PROFILE</Link>
                  </Text>
                </Center>
              </Flex>
            ) : (
              <Flex gap='2'>
                <Center>
                  <Text as="b">
                    <Link href="/about" as="b">ABOUT</Link>
                  </Text>
                </Center>
                <Center>
                  <Text as="b">
                    <Link href="/auth/login">LOGIN</Link>
                  </Text>
                </Center>
              </Flex>
            )}
        </Box>
      </Flex>
    </Box>
  )
}

export default Navigation
