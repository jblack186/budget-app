import * as React from 'react';
import { Heading, Flex, Button } from '@chakra-ui/react';
import Link from 'next/link';
// component

const Index: React.FC<{}> = () => {
  return (
    <Flex
      height='100vh'
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Heading
        as='h1'
        mb={10}
      >
        Budgeting App
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Link
          href='/login'
        >
          <Button
            type="submit"
            size="md"
            height="48px"
            width="250px"
            border="2px"
            borderColor="green.700"
            m={4}
          >
            Login
      </Button>
        </Link>
        <Link
          href='/register'
        >
          <Button
            type="submit"
            size="md"
            height="48px"
            width="250px"
            border="2px"
            bg='green.500'
            borderColor="green.500"
            m={4}
          >
            Register
      </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Index;