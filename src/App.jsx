import { Container, Heading, Spacer, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import GlobalTimer from './GlobalTimer'



export default () => {
  return (
    <Container textAlign="center">
      <VStack p={10} spacing={4} height="100vh">
        <Heading>Health Record</Heading>
        <Spacer />
        <GlobalTimer />
      </VStack>
    </Container>
  )
}
