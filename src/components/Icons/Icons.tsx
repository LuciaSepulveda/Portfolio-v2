import {Box, Grid, GridItem, Image, VStack, Text} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import {useOpenProgram, usePrograms} from "../../context/hooks"

const Icons: React.FC = () => {
  const programs = usePrograms()
  const constraintRef = React.useRef(null)
  const openProgram = useOpenProgram()

  return (
    <Box ref={constraintRef} h="90%" left="50px" position="absolute" top="50px" w="90%">
      {programs.map((elem) => (
        <motion.div
          key={elem.name}
          drag
          dragConstraints={constraintRef}
          style={{position: "relative", top: "100px", width: "100px"}}
        >
          <VStack alignItems="center" p={2} w="100%">
            <Box as="button" onClick={() => openProgram(elem)}>
              <Image h="50px" src={elem.img} />
            </Box>
            <Text
              color="#EFFFFF"
              p={2}
              textShadow="-1px -1px 1px #000, 1px 1px 1px #000, -1px 1px 1px #000, 1px -1px 1px #000"
            >
              {elem.name}
            </Text>
          </VStack>
        </motion.div>
      ))}
    </Box>
  )
}

export default Icons
