import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  useColorModeValue,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
} from "@chakra-ui/react"
import {MoonIcon, SunIcon, EditIcon, RepeatIcon, Icon} from "@chakra-ui/icons"
import * as React from "react"
import {useMediaQuery} from "react-responsive"
import {motion, useMotionValue} from "framer-motion"
import {BiPowerOff, BiUserCircle} from "react-icons/bi"
import {SiWindows} from "react-icons/si"

import {Program} from "../../types/types"
import {useCloseAllPrograms, useOpenProgram, useOs, useChangeOs} from "../../context/hooks"
import Clock from "../Clock/Clock"
import IconBottomBar from "../Icon/Icon"

interface Props {
  programs: Program[]
}

const BottomBar: React.FC<Props> = ({programs}) => {
  const openProgram = useOpenProgram()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const closeAllPrograms = useCloseAllPrograms()
  const os = useOs()
  const bgBar = useColorModeValue(`${os.bottomBar.bgBar.light}`, `${os.bottomBar.bgBar.dark}`)
  const mouseX = useMotionValue<any>(null)
  const logo = useColorModeValue(
    `${os.bottomBar.logoStart?.light}`,
    `${os.bottomBar.logoStart?.dark}`,
  )
  let colorText = useColorModeValue("rgb(24,24,24)", "rgb(250,250,250)")
  const bgMenuOpen = useColorModeValue(
    `${os.bottomBar.bgMenuOpen?.light}`,
    `${os.bottomBar.bgMenuOpen?.dark}`,
  )
  const bgClock = useColorModeValue(
    `${os.bottomBar.bgClock?.light}`,
    `${os.bottomBar.bgClock?.dark}`,
  )

  const {colorMode, toggleColorMode} = useColorMode()
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false)

  const wallpaper = () => {
    let elem = programs[0]

    for (let i = 0; i !== programs.length; i++) {
      if (programs[i].name === "Wallpapers") elem = programs[i]
    }

    return elem
  }

  if (os.name === "windowsXP") {
    colorText = useColorModeValue("rgb(250,250,250)", "rgb(250,250,250)")
  }

  const changeOs = useChangeOs()

  return (
    <>
      {os.name === "elementary" && (
        <Flex justifyContent="center" m="auto" position="sticky" w="100%" zIndex="sticky">
          <Flex
            alignItems="flex-end"
            backdropFilter="blur(1px)"
            bg={bgBar}
            borderRadius="2xl"
            borderTopLeftRadius="10px"
            borderTopRightRadius="10px"
            boxShadow="md"
            height="75px"
            p={2}
            onMouseLeave={() => mouseX.set(null)}
            onMouseMove={(event: React.MouseEvent) => mouseX.set(event.nativeEvent.x)}
          >
            {programs.map((elem) => {
              if (elem.name !== "Wallpapers")
                return (
                  <>
                    {!isPortrait && (
                      <VStack key={elem.name} as="button" onClick={() => openProgram(elem)}>
                        <IconBottomBar mouseX={mouseX} src={elem.img} />
                        {(elem.open === true || elem.minimized === true) && (
                          <Box
                            bg="#01afff"
                            borderRadius="50%"
                            boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                            h="3px"
                            w="3px"
                          />
                        )}
                        {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                      </VStack>
                    )}
                    {isPortrait && (
                      <VStack
                        key={elem.name}
                        as="button"
                        onClick={() => {
                          openProgram(elem), closeAllPrograms(elem)
                        }}
                      >
                        <motion.div whileHover={{scale: 1.2}} whileTap={{y: -50}}>
                          <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                        </motion.div>
                        {(elem.open === true || elem.minimized === true) && (
                          <Box
                            bg="#01afff"
                            borderRadius="50%"
                            boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                            h="3px"
                            w="3px"
                          />
                        )}
                        {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                      </VStack>
                    )}
                  </>
                )
              else
                return (
                  <>
                    {!isPortrait && (elem.open === true || elem.minimized === true) && (
                      <VStack key={elem.name} as="button" onClick={() => openProgram(elem)}>
                        <IconBottomBar mouseX={mouseX} src={elem.img} />
                        {(elem.open === true || elem.minimized === true) && (
                          <Box
                            bg="#01afff"
                            borderRadius="50%"
                            boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                            h="3px"
                            w="3px"
                          />
                        )}
                        {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                      </VStack>
                    )}
                    {isPortrait && (elem.open === true || elem.minimized === true) && (
                      <VStack
                        key={elem.name}
                        as="button"
                        onClick={() => {
                          openProgram(elem), closeAllPrograms(elem)
                        }}
                      >
                        <motion.div whileHover={{scale: 1.2}} whileTap={{y: -50}}>
                          <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                        </motion.div>
                        <Box
                          bg="#01afff"
                          borderRadius="50%"
                          boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                          h="3px"
                          w="3px"
                        />
                      </VStack>
                    )}
                  </>
                )
            })}
          </Flex>
        </Flex>
      )}
      {os.name !== "elementary" && (
        <Flex height={os.bottomBar.height} position="sticky" w="100%" zIndex="2">
          <HStack
            bg={bgBar}
            boxShadow="md"
            height="100%"
            m="auto"
            position="sticky"
            style={{backdropFilter: `${os.bottomBar.backdropFilter}`}}
            w="100%"
            zIndex="sticky"
          >
            <Menu isOpen={menuOpen} placement="top" strategy="fixed">
              <MenuButton
                as={Button}
                style={{
                  backgroundColor: `${os.bottomBar.bgStart}`,
                  height: "100%",
                  width: `${os.bottomBar.widthStart}`,
                  borderRadius: `${os.bottomBar.borderRadiusStart}`,
                  backgroundImage: `${os.bottomBar.bgStart}`,
                }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <HStack h="100%" w="100%">
                  {os.name === "windows10" && (
                    <Icon as={SiWindows} color={colorText} h={os.bottomBar.heightLogoStart} />
                  )}
                  {os.name === "windowsXP" && (
                    <>
                      <Image h={os.bottomBar.heightLogoStart} src={logo} />
                      <Text color="white" fontSize="xl" fontWeight="bold">
                        Start
                      </Text>
                    </>
                  )}
                </HStack>
              </MenuButton>
              <MenuList
                style={{
                  backgroundImage: `${bgMenuOpen}`,
                  backgroundColor: `${bgMenuOpen}`,
                  border: `${os.bottomBar.border}`,
                  marginBottom: "-8px",
                  boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
                  position: "sticky",
                  zIndex: "inherit",
                  backdropFilter: `${os.bottomBar.backdropFilter}`,
                  borderRadius: `${os.bottomBar.borderRadiusMenuOpen}`,
                }}
              >
                <VStack h="550px" w={["355px", "450px"]}>
                  {os.name === "windowsXP" && (
                    <>
                      <HStack ml="10px" w="100%">
                        <Box
                          bg="white"
                          border="3px solid #B5C9E7"
                          borderRadius="2px"
                          h="70px"
                          w="70px"
                        >
                          <Image h="65px" m="auto" src={programs[0].img} />
                        </Box>
                        <Text color="white" fontSize="xl" fontWeight="bold">
                          Portfolio
                        </Text>
                      </HStack>
                      <HStack h="100%" spacing="0px" w="100%">
                        <VStack bg="#FFFFFF" h="100%" w="50%">
                          {programs.map((elem) => {
                            return (
                              <>
                                {!isPortrait && (
                                  <HStack
                                    key={elem.name}
                                    as="button"
                                    w="100%"
                                    onClick={() => {
                                      openProgram(elem), setMenuOpen(false)
                                    }}
                                  >
                                    <Image h="40px" ml="5px" mt="5px" src={elem.img} />
                                    <Text color="black">{elem.name}</Text>
                                  </HStack>
                                )}
                                {isPortrait && (
                                  <HStack
                                    key={elem.name}
                                    as="button"
                                    w="100%"
                                    onClick={() => {
                                      openProgram(elem), closeAllPrograms(elem), setMenuOpen(false)
                                    }}
                                  >
                                    <Image h="40px" ml="5px" mt="5px" src={elem.img} />
                                    <Text color="black">{elem.name}</Text>
                                  </HStack>
                                )}
                              </>
                            )
                          })}
                        </VStack>
                        <VStack bg="#D3E5FA" h="100%" w="50%" />
                      </HStack>
                      <Box h="50px" w="100%">
                        <Box as="button" onClick={() => changeOs("")}>
                          <RepeatIcon />
                        </Box>
                      </Box>
                    </>
                  )}
                  {os.name === "windows10" && (
                    <HStack h="100%" spacing="0px" w="100%">
                      <Flex
                        alignItems="center"
                        direction="column-reverse"
                        h="100%"
                        spacing="20px"
                        w="11%"
                      >
                        <Box as="button" onClick={() => changeOs("")}>
                          <Icon as={BiPowerOff} color={colorText} h="22px" mb="14px" w="22px" />
                        </Box>
                        <Icon as={BiUserCircle} color={colorText} h="22px" mb="16px" w="22px" />
                      </Flex>
                      <VStack h="100%" w="80%">
                        {programs.map((elem) => {
                          return (
                            <>
                              {!isPortrait && (
                                <VStack p={2} w="100%">
                                  <Text align="left" color={colorText} ml="16px" w="100%">
                                    {elem.name.charAt(0)}
                                  </Text>
                                  <HStack
                                    key={elem.name}
                                    as="button"
                                    w="100%"
                                    onClick={() => {
                                      openProgram(elem), setMenuOpen(false)
                                    }}
                                  >
                                    <Image h="26px" mt="5px" src={elem.img} />
                                    <Text color={colorText}>{elem.name}</Text>
                                  </HStack>
                                </VStack>
                              )}
                              {isPortrait && (
                                <HStack
                                  key={elem.name}
                                  as="button"
                                  w="100%"
                                  onClick={() => {
                                    openProgram(elem), closeAllPrograms(elem), setMenuOpen(false)
                                  }}
                                >
                                  <Image h="35px" ml="5px" mt="5px" src={elem.img} />
                                  <Text color={colorText}>{elem.name}</Text>
                                </HStack>
                              )}
                            </>
                          )
                        })}
                      </VStack>
                    </HStack>
                  )}
                </VStack>
              </MenuList>
            </Menu>
            {programs.map((elem) => {
              return (
                <>
                  {elem.open === true && (
                    <HStack
                      bg={os.bottomBar.bgProgramOpen}
                      borderRadius={os.bottomBar.borderRadiusProgramOpen}
                      boxShadow={os.bottomBar.boxShadowProgramOpen}
                      h="80%"
                      m="auto"
                      ml="10px"
                      w={os.bottomBar.widthProgramOpen}
                    >
                      <Image h="30px" ml="5px" src={elem.img} />
                      {os.name === "windowsXP" && <Text color="white">{elem.name}</Text>}
                    </HStack>
                  )}
                  {elem.minimized === true && (
                    <>
                      {!isPortrait && (
                        <HStack
                          as="button"
                          bg={os.bottomBar.bgProgramOpen}
                          borderRadius={os.bottomBar.borderRadiusProgramOpen}
                          boxShadow={os.bottomBar.boxShadowProgramOpen}
                          h="80%"
                          m="auto"
                          ml="10px"
                          w={os.bottomBar.widthProgramOpen}
                          onClick={() => {
                            openProgram(elem), setMenuOpen(false)
                          }}
                        >
                          <Image h="30px" ml="5px" src={elem.img} />
                          {os.name === "windowsXP" && <Text color="white">{elem.name}</Text>}
                        </HStack>
                      )}
                      {isPortrait && (
                        <HStack
                          as="button"
                          bg={os.bottomBar.bgProgramOpen}
                          borderRadius={os.bottomBar.borderRadiusProgramOpen}
                          boxShadow={os.bottomBar.boxShadowProgramOpen}
                          h="80%"
                          m="auto"
                          ml="10px"
                          w={os.bottomBar.widthProgramOpen}
                          onClick={() => {
                            openProgram(elem), closeAllPrograms(elem), setMenuOpen(false)
                          }}
                        >
                          <Image h="30px" ml="5px" src={elem.img} />
                          {os.name === "windowsXP" && <Text color="white">{elem.name}</Text>}
                        </HStack>
                      )}
                    </>
                  )}
                </>
              )
            })}
          </HStack>
          <HStack
            bg={bgBar}
            borderLeft={bgBar}
            color={colorText}
            justify="space-evenly"
            p={2}
            w={os.bottomBar.widthClock}
          >
            {isPortrait && (
              <Box
                as="button"
                onClick={() => {
                  openProgram(wallpaper()), closeAllPrograms(wallpaper())
                }}
              >
                <EditIcon />
              </Box>
            )}
            {!isPortrait && (
              <Box as="button" onClick={() => openProgram(wallpaper())}>
                <EditIcon />
              </Box>
            )}
            <Box alignSelf="center" as="button" onClick={toggleColorMode}>
              {colorMode === "light" && <MoonIcon />}
              {colorMode !== "light" && <SunIcon />}
            </Box>
            <Clock />
          </HStack>
        </Flex>
      )}
    </>
  )
}

export default BottomBar
