import * as React from "react"
import {Box, HStack, Image, VStack, Text, useColorModeValue, Skeleton} from "@chakra-ui/react"

import {social} from "../../data/data"
import draw from "../../assets/undraw_Social.png"
import {useOs} from "../../context/hooks"

interface Props {
  w: string
  h: string
}

const Contact: React.FC<Props> = ({w, h}) => {
  const bg = useColorModeValue("#F7F9F9", "#14202A")
  const bgProgram = useColorModeValue("#FFFFFF", "#14202A")
  const colorText = useColorModeValue("#0F1419", "#E6F2F3")
  const border = useColorModeValue("#EFF3F4", "#37444C")
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const os = useOs()

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <VStack
      bg={bg}
      borderBottomRadius={os.window.borderBottomWindow}
      h={h}
      paddingLeft={2}
      paddingRight={2}
      transitionTimingFunction="ease-in-out"
      w={w}
    >
      <VStack
        bg={bgProgram}
        border={`1px solid ${border}`}
        borderBottom="none"
        borderTop="none"
        h="100%"
        maxWidth="600px"
        spacing={0}
        transitionTimingFunction="ease-in-out"
        w={["100%", "70%"]}
      >
        <Box align="center" bg="white" mb={4} w="100%">
          <Skeleton h="150px" isLoaded={loaded} w="100%">
            <Image
              ref={imageRef}
              h="150px"
              src={draw}
              onLoad={() => {
                setLoaded(true)
              }}
            />
          </Skeleton>
        </Box>
        {social.map((elem) => (
          <HStack
            key={elem.name}
            border={`1px solid ${border}`}
            color={colorText}
            p={4}
            spacing={[2, 5]}
            w="95%"
          >
            <Image h={["40px", "50px"]} src={elem.logo} />
            <VStack alignItems="start" w="100%">
              <Text fontWeight="bold">{elem.name}</Text>
              {elem.name !== "Email" && (
                <Text as="a" href={elem.link} target="_blank">
                  {elem.link}
                </Text>
              )}
              {elem.name === "Email" && (
                <Text as="a" href={elem.link} target="_blank">
                  {elem.link.substring(28, 7)}
                </Text>
              )}
            </VStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default Contact
