import "@fontsource/jetbrains-mono/"

import * as React from "react"
import {Box, Grid, GridItem, HStack, Text, VStack, useColorModeValue} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

import {techs, info} from "../../data/data"
import {useChangeSectionAbout, useOs} from "../../context/hooks"

interface Props {
  w: string
  h: string
}

const About: React.FC<Props> = ({h, w}) => {
  const [state, setState] = React.useState<string>("about")
  const [update, setUpdate] = React.useState<boolean>(false)
  const changeSection = useChangeSectionAbout()
  const bgLeft = useColorModeValue("#E6F2F3", "#022131")
  const bgRight = useColorModeValue("#F4F6F6", "#02273A")
  const bgLeftTop = useColorModeValue("#BEDEEF", "#09334E")
  const text = useColorModeValue("#6F838D", "white")
  const text1 = useColorModeValue("#FF5592", "#CA7692")
  const text2 = useColorModeValue("#ED3F44", "#DF4F38")
  const text3 = useColorModeValue("#AF8F27", "#D58929")
  const text4 = useColorModeValue("#009BAF", "#46E991")
  const colorCorchetes = useColorModeValue("#8DA6AC", "#568498")
  const os = useOs()

  const updateState = (s: string) => {
    setUpdate(true)
    setState(s)
    changeSection(s)
  }

  React.useEffect(() => {
    if (update === true) {
      setUpdate(false)

      return
    }
  }, [update])

  return (
    <VStack
      borderBottomRadius={os.window.borderBottomWindow}
      borderTopRadius={os.window.borderTopWindow}
      fontSize={["small", "md"]}
      h={h}
      spacing="0px"
      w={w}
    >
      <Grid
        bg={bgRight}
        borderBottomRadius={os.window.borderBottomWindow}
        borderTopRadius="none"
        gap={0}
        h="100%"
        templateColumns="repeat(4, 1fr)"
        transitionTimingFunction="ease-in-out"
        w="100%"
      >
        <GridItem
          bg={bgLeft}
          borderBottomLeftRadius={os.window.borderBottomWindow}
          colSpan={1}
          transitionTimingFunction="ease-in-out"
        >
          <VStack>
            <Box bg={bgLeftTop} p={1} transitionTimingFunction="ease-in-out" w="100%">
              <Text align="justify" color={text} fontSize="small" fontWeight="bold" ml="10px">
                Portfolio
              </Text>
            </Box>
            <HStack w="100%">
              {state === "about" && (
                <>
                  <ChevronRightIcon color={text} />
                  <Text align="justify" color={text} ml="10px">
                    Sobre mi
                  </Text>
                </>
              )}
              {state !== "about" && (
                <Text
                  align="justify"
                  as="button"
                  color={text}
                  ml="10px"
                  onClick={() => updateState("about")}
                >
                  Sobre mi
                </Text>
              )}
            </HStack>
            <HStack w="100%">
              {state === "tech" && (
                <>
                  <ChevronRightIcon color={text} />
                  <Text align="justify" color={text} ml="10px">
                    Habilidades
                  </Text>
                </>
              )}
              {state !== "tech" && (
                <Text
                  align="justify"
                  as="button"
                  color={text}
                  ml="10px"
                  onClick={() => updateState("tech")}
                >
                  Habilidades
                </Text>
              )}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={3}>
          <VStack fontFamily="JetBrains Mono" spacing={0}>
            {state === "about" && (
              <>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}!</Text>
                  <Text color={text1}>DOCTYPE html</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>html</Text>
                  <Text color={text3}> lang</Text>
                  <Text color={text}>{`=`}</Text>
                  <Text color={text4}>{`"ES"`}</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>head</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing={["1px", "4px"]} w="80%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>title</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                  <Text color={text}>Portfolio</Text>
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>title</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>head</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>body</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing={["1px", "4px"]} w="80%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>h1</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                  <Text color={text}>Lucia Sepulveda</Text>
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>h1</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                {info.map((elem) => (
                  <HStack key={elem} ml="20%" spacing={["1px", "4px"]} w="80%">
                    <Text color={colorCorchetes}>{`<`}</Text>
                    <Text color={text2}>p</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                    <Text color={text}>{elem}</Text>
                    <Text color={colorCorchetes}>{`</ `}</Text>
                    <Text color={text2}>p</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                  </HStack>
                ))}
                <HStack ml="10%" spacing={["1px", "4px"]} w="90%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>body</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>html</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
              </>
            )}
            {state === "tech" && (
              <>
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`<`}</Text>
                  <Text color={text2}>ul</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
                {techs.map((elem) => (
                  <HStack key={elem} ml="10%" spacing={["1px", "4px"]} w={["100%", "90%"]}>
                    <Text color={colorCorchetes}>{`<`}</Text>
                    <Text color={text2}>li</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                    <Text color={text}> {elem} </Text>
                    <Text color={colorCorchetes}>{`</ `}</Text>
                    <Text color={text2}>li</Text>
                    <Text color={colorCorchetes}>{`>`}</Text>
                  </HStack>
                ))}
                <HStack spacing={["1px", "4px"]} w="100%">
                  <Text color={colorCorchetes}>{`</ `}</Text>
                  <Text color={text2}>ul</Text>
                  <Text color={colorCorchetes}>{`>`}</Text>
                </HStack>
              </>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default About
