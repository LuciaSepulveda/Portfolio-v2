import {Box, Center, Flex, HStack, Image, Text, useColorModeValue} from "@chakra-ui/react"
import {ArrowUpDownIcon, CloseIcon, MinusIcon} from "@chakra-ui/icons"
import {useMediaQuery} from "react-responsive"
import * as React from "react"
import {motion} from "framer-motion"

import {
  useCloseProgram,
  useMaximizedProgram,
  useMinimizedProgram,
  useSectionAbout,
  useOs,
} from "../../context/hooks"
import {Program} from "../../types/types"

interface Props {
  program: Program
}

const Window: React.FC<Props> = ({program, children}) => {
  const close = useCloseProgram()
  const maximized = useMaximizedProgram()
  const minimized = useMinimizedProgram()
  const section = useSectionAbout()
  const os = useOs()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const [closeButton, setCloseButton] = React.useState<number>(0)
  const [minButton, setMinButton] = React.useState<number>(0)
  const [maxButton, setMaxButton] = React.useState<number>(0)
  const bgTop = useColorModeValue(`${os.window.bgTopWindow.light}`, `${os.window.bgTopWindow.dark}`)
  let colorText = useColorModeValue("#242424", "#FBFBFB")
  const border = useColorModeValue(
    `${os.window.borderWindow.light}`,
    `${os.window.borderWindow.dark}`,
  )

  if (os.name === "windowsXP") {
    colorText = "#FBFBFB"
  }

  return (
    <>
      {program.maximized === false && !isPortrait && (
        <motion.div
          animate={{y: 0, scale: 1}}
          exit={{scale: 0, y: 400, opacity: 0}}
          initial={{y: 500, scale: 0.2}}
        >
          <Box
            bg={os.window.bgWindow}
            border={border}
            borderBottomRadius={os.window.borderBottomWindow}
            borderTopRadius={os.window.borderTopWindow}
            boxShadow="lg"
            m="10%"
            position="relative"
            width="fit-content"
            zIndex="1"
          >
            {os.name === "elementary" && (
              <Flex bg={bgTop} borderTopRadius={os.window.borderTopWindow} h="30px" w="100%">
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${closeButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${minButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${maxButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <Center w="85%">
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </Center>
              </Flex>
            )}
            {os.name !== "elementary" && (
              <Flex
                bg={bgTop}
                borderTopRadius={os.window.borderTopWindow}
                direction="row-reverse"
                h="30px"
                w="100%"
              >
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                    marginRight: "10px",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <HStack ml="10px" w="96%">
                  <Image h="20px" src={program.img} />
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </HStack>
              </Flex>
            )}
            {children}
          </Box>
        </motion.div>
      )}
      {program.maximized === true && !isPortrait && (
        <motion.div
          animate={{scale: 1}}
          initial={{scale: 0.5}}
          style={{height: `${os.desktop.height}`, width: "100%"}}
        >
          <Box
            bg={os.window.bgWindow}
            border={border}
            borderBottomRadius={os.window.borderBottomWindow}
            borderTopRadius="none"
            boxShadow="lg"
            h="100%"
            position="relative"
            w="100%"
            zIndex="1"
          >
            {os.name === "elementary" && (
              <Flex bg={bgTop} h="30px" w="100%">
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${closeButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${minButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${maxButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <Center w="95%">
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </Center>
              </Flex>
            )}
            {os.name !== "elementary" && (
              <Flex bg={bgTop} direction="row-reverse" h="30px" w="100%">
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                    marginRight: "10px",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <HStack ml="10px" w="96%">
                  <Image h="20px" src={program.img} />
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </HStack>
              </Flex>
            )}
            {children}
          </Box>
        </motion.div>
      )}
      {isPortrait && (
        <motion.div
          animate={{y: 0, scale: 1}}
          initial={{y: 500, scale: 0.2}}
          style={{height: "85%", width: "100%"}}
        >
          <Box
            bg={os.window.bgWindow}
            border={border}
            boxShadow="lg"
            h="100%"
            position="relative"
            w="100%"
          >
            {os.name === "elementary" && (
              <Flex bg={bgTop} h="30px" w="100%">
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${closeButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${minButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "15px",
                    width: "15px",
                    marginLeft: "10px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="15px"
                    w="15px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon
                      color="rgba(0,0,0,0.7)"
                      h="7.5px"
                      style={{opacity: `${maxButton}`}}
                      w="7.5px"
                    />
                  </Center>
                </motion.div>
                <Center w="85%">
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </Center>
              </Flex>
            )}
            {os.name !== "elementary" && (
              <Flex
                bg={bgTop}
                borderTopRadius={os.window.borderTopWindow}
                direction="row-reverse"
                h="30px"
                w="100%"
              >
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                    marginRight: "10px",
                  }}
                  onHoverEnd={() => setCloseButton(0)}
                  onHoverStart={() => setCloseButton(1)}
                >
                  <Center
                    alignContent="center"
                    as="button"
                    bg={os.window.bgCloseButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      close(program)
                    }}
                  >
                    <CloseIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMaxButton(0)}
                  onHoverStart={() => setMaxButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMaxButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => maximized(program)}
                  >
                    <ArrowUpDownIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <motion.div
                  style={{
                    height: "24px",
                    width: "24px",
                    marginLeft: "4px",
                    alignSelf: "center",
                  }}
                  onHoverEnd={() => setMinButton(0)}
                  onHoverStart={() => setMinButton(1)}
                >
                  <Center
                    alignSelf="center"
                    as="button"
                    bg={os.window.bgMinButton}
                    border={os.window.borderButton}
                    borderRadius={os.window.borderRadiusButton}
                    h="24px"
                    w="24px"
                    onClick={() => {
                      minimized(program), close(program)
                    }}
                  >
                    <MinusIcon color={colorText} h="12px" w="12px" />
                  </Center>
                </motion.div>
                <HStack ml="10px" w="96%">
                  <Image h="20px" src={program.img} />
                  {program.name === "User" && (
                    <Text color={colorText} fontWeight="bold">
                      {section} -
                    </Text>
                  )}
                  <Text color={colorText} fontWeight="bold" ml="5px">
                    {program.name}
                  </Text>
                </HStack>
              </Flex>
            )}
            {children}
          </Box>
        </motion.div>
      )}
    </>
  )
}

export default Window
