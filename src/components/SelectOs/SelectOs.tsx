import {MoonIcon, SunIcon} from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
  Image,
  Text,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react"
import * as React from "react"

import {useChangeOs} from "../../context/hooks"
import {allOs} from "../../data/data"

const SelectOs: React.FC = () => {
  const changeOs = useChangeOs()
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box alignItems="center" bg={bg} h="100vh" w="100%">
      <Flex direction="row-reverse" w="100%">
        <Box alignSelf="center" as="button" mr="10px" onClick={toggleColorMode}>
          {colorMode === "light" && <MoonIcon />}
          {colorMode !== "light" && <SunIcon color="white" />}
        </Box>
      </Flex>
      <Stack
        alignItems="center"
        direction={["column", "column", "row"]}
        gap={4}
        h={["80%", "90%"]}
        m="auto"
        w={["90%", "80%"]}
      >
        {allOs.map((elem) => {
          return (
            <VStack
              key={elem.name}
              as="button"
              m="auto"
              spacing="0"
              w="100%"
              onClick={() => changeOs(elem.name)}
            >
              <Text color={colorText}>{elem.name}</Text>
              <Image h={["200px", "350px"]} m="auto" objectFit="contain" src={elem.img} />
            </VStack>
          )
        })}
      </Stack>
    </Box>
  )
}

export default SelectOs
