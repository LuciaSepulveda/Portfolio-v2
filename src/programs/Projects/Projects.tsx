import * as React from "react"
import {
  Grid,
  Center,
  GridItem,
  Image,
  Box,
  Skeleton,
  Text,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"

import github from "../../assets/GitHub_Logo.png"
import {projects} from "../../data/data"
import {useOs} from "../../context/hooks"

interface Props {
  w: string
  h: string
}

const Projects: React.FC<Props> = ({h, w}) => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const bgItem = useColorModeValue("#A0A7AC", "#333333")
  const border = useColorModeValue("2px solid #A0A7AC", "2px solid #333333")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  const os = useOs()
  const [height, setHeight] = React.useState<string>("96.5%")

  React.useEffect(() => {
    if (os.name !== "elementary") {
      setHeight("97%")
    }
  }, [os.name])

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Center
      alignItems="center"
      bg={bg}
      borderBottomRadius={os.window.borderBottomWindow}
      h={height}
      transitionTimingFunction="ease-in-out"
      w="100%"
    >
      {!isPortrait && (
        <Grid gap={4} h={h} p={2} templateColumns="repeat(3, 1fr)" w={w}>
          {projects.map((elem) => (
            <GridItem key={elem.name} border={border} borderBottomRadius="xl" colSpan={1}>
              <VStack
                bg={bgItem}
                borderBottomRadius="xl"
                color={colorText}
                h="100%"
                transitionTimingFunction="ease-in-out"
              >
                <Text fontWeight="bold">{elem.name}</Text>
                <Link h="100%" href={elem.demo} target="_blank">
                  <Skeleton h="125px" isLoaded={loaded} w="100%">
                    <Image
                      ref={imageRef}
                      alt={elem.name}
                      src={elem.img}
                      onLoad={() => {
                        setLoaded(true)
                      }}
                    />
                  </Skeleton>
                </Link>
                <Link bg="white" borderRadius="md" href={elem.github} target="_blank">
                  <Image h="20px" src={github} />
                </Link>
                <Box
                  bg={bgItem}
                  borderBottomRadius="md"
                  boxShadow="md"
                  h="80px"
                  overflow="hidden"
                  p={1}
                  w="100%"
                >
                  <Text>{elem.description}</Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      )}
      {isPortrait && (
        <Grid gap={2} h={h} overflow="scroll" p={1} templateColumns="repeat(2, 1fr)" w={w}>
          {projects.map((elem) => (
            <GridItem key={elem.name} border={border} borderBottomRadius="xl" colSpan={1}>
              <VStack
                bg={bgItem}
                borderBottomRadius="xl"
                color={colorText}
                h="100%"
                transitionTimingFunction="ease-in-out"
              >
                <Text fontWeight="bold">{elem.name}</Text>
                <Link h={["100%", "80%"]} href={elem.demo} target="_blank">
                  <Skeleton h="50px" isLoaded={loaded} w="100%">
                    <Image
                      ref={imageRef}
                      alt={elem.name}
                      src={elem.img}
                      onLoad={() => {
                        setLoaded(true)
                      }}
                    />
                  </Skeleton>
                </Link>
                <Box
                  bg={bgItem}
                  borderBottomRadius="md"
                  boxShadow="md"
                  h="80px"
                  overflow="hidden"
                  p={1}
                  w="100%"
                >
                  <Text fontSize={["small", "initial"]}>{elem.description}</Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      )}
    </Center>
  )
}

export default Projects
