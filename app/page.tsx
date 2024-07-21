// メインページ
import { Center, Text, Flex } from './common/components/chakra'

const Page = () => {
  return (
    <Center h='100vh' bgColor='#e4c9ab'>
      <Flex>
        <Center bgColor='#212631' p='8'>
          <Text fontSize='6xl' as="b" textColor='#e4c9ab'>YPX2</Text>
        </Center>
        <Center p='8'>
          <Text fontSize='6xl' as="b" textColor='#212631'>NOTE</Text>
        </Center>
      </Flex>
    </Center>
  )
}

export default Page
