import * as React from "react"
import {motion, useMotionValue, useTransform, useSpring, MotionValue} from "framer-motion"
import useRaf from "@rooks/use-raf"

interface Props {
  src: string
  mouseX: MotionValue<any>
}

const Icon: React.FC<Props> = ({src, mouseX}) => {
  const baseWidth = 60
  const distanceLimit = baseWidth * 6
  const beyondTheDistanceLimit = distanceLimit + 1
  const distanceInput = [-distanceLimit, -distanceLimit / 2, 0, distanceLimit / 2, distanceLimit]

  const widthOutput = [baseWidth, baseWidth * 1.5, baseWidth * 2, baseWidth * 1.5, baseWidth]
  const distance = useMotionValue(beyondTheDistanceLimit)
  const width = useSpring(useTransform(distance, distanceInput, widthOutput), {
    damping: 25,
    stiffness: 250,
  })

  const ref = React.useRef<any>(null)

  useRaf(() => {
    const el = ref.current
    const mouseXVal = mouseX.get()

    if (el && mouseXVal !== null) {
      const rect = el.getBoundingClientRect()
      const imgCenterX = rect.left + rect.width / 2
      const distanceDelta = mouseXVal - imgCenterX

      distance.set(distanceDelta)

      return
    }

    distance.set(beyondTheDistanceLimit)
  }, true)

  return (
    <motion.img
      ref={ref}
      src={src}
      style={{
        width,
        padding: "5px",
        height: "auto",
      }}
      whileTap={{y: -50}}
    />
  )
}

export default Icon
