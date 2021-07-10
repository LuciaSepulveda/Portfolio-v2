/* eslint-disable prettier/prettier */
import {Box, Center, Image, Spinner} from "@chakra-ui/react"
import * as React from "react"
import {AnimatePresence, motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"

import {
  useAnyProgramMaximized,
  useNoProgramsOpen,
  usePrograms,
  useWallpaper,
  useChangeStatus,
  useStatus,
  useOs,
} from "../context/hooks"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"
import About from "../programs/About"
import SelectOs from "../components/SelectOs/SelectOs"
import Projects from "../programs/Projects"
import Contact from "../programs/Contact"
import Wallpapers from "../programs/Wallpapers/Wallpapers"
import {Status} from "../types/types"
import Icons from "../components/Icons"

const App: React.FC = () => {
  const constraintRef = React.useRef(null)
  const programs = usePrograms()
  const noProgramsOpen = useNoProgramsOpen()
  const anyProgramMaximized = useAnyProgramMaximized()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const wallpaper = useWallpaper()
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const changeStatus = useChangeStatus()
  const status = useStatus()
  const os = useOs()

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      changeStatus(Status.ready)
      setLoaded(true)
    }
  }, [loaded, imageRef])

  return (
    <>
      {os.name === "" && <SelectOs />}
      {os.name !== "" && (
        <Box h="100vh" overflow="hidden" position="absolute" w="100%">
          <Image
            ref={imageRef}
            fit="cover"
            h="100%"
            position="absolute"
            src={wallpaper}
            w="100%"
            onLoad={() => {
              setLoaded(true)
              changeStatus(Status.ready)
            }}
          />
          {status === Status.loading && (
            <Center
              alignContent="center"
              bgGradient={[
                "linear(to-tr, teal.300,yellow.400)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
              h="100vh"
              w="100%"
            >
              <Spinner size="xl" />
            </Center>
          )}
          {status === Status.ready && (
            <>
              {os.name === "elementary" && <TopBar />}
              {isPortrait && (
                <>
                  {programs.map((elem) => {
                    if (elem.open === true)
                      return (
                        <Window key={elem.name} program={elem}>
                          {elem.name === "User" && <About h="96%" w="100%" />}
                          {elem.name === "Projects" && <Projects h="96%" w="90%" />}
                          {elem.name === "Contact" && <Contact h="96%" w="100%" />}
                          {elem.name === "Wallpapers" && <Wallpapers h="96%" w="100%" />}
                        </Window>
                      )
                  })}
                  {noProgramsOpen && <Box h={["84%", "88%"]} w="100%" />}
                </>
              )}
              {!isPortrait && (
                <>
                  {((!noProgramsOpen && !anyProgramMaximized) ||
                    noProgramsOpen) && (
                      <>
                        <motion.div
                          ref={constraintRef}
                          style={{width: "100%", height: `${os.desktop.height}`}}
                        />
                        {os.name !== "elementary" && <Icons />}
                      </>
                    )}
                  {programs.map((elem) => {
                    if (elem.open === true && elem.maximized === false)
                      return (
                        <motion.div
                          key={elem.name}
                          drag
                          dragConstraints={constraintRef}
                          style={{position: "absolute", top: "100px", left: "25%"}}
                        >
                          <Window program={elem}>
                            {elem.name === "User" && <About h="500px" w="800px" />}
                            {elem.name === "Projects" && <Projects h="fit-content" w="900px" />}
                            {elem.name === "Contact" && <Contact h="600px" w="800px" />}
                            {elem.name === "Wallpapers" && <Wallpapers h="fit-content" w="800px" />}
                          </Window>
                        </motion.div>
                      )
                    if (elem.open === true && elem.maximized === true)
                      return (
                        <Window key={elem.name} program={elem}>
                          {elem.name === "User" && (
                            <About h={os.desktop.heightAboutMaximized} w="100%" />
                          )}
                          {elem.name === "Projects" && (
                            <Projects h={os.desktop.heightProjectsMaximized} w="80%" />
                          )}
                          {elem.name === "Contact" && (
                            <Contact h={os.desktop.heightContactsMaximized} w="100%" />
                          )}
                          {elem.name === "Wallpapers" && (
                            <Wallpapers h={os.desktop.heightWallpapersMaximized} w="80%" />
                          )}
                        </Window>
                      )
                  })}
                </>
              )}
              <BottomBar programs={programs} />
            </>
          )}
        </Box>
      )}
    </>
  )
}

export default App
