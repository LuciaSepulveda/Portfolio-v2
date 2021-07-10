import dev from "../assets/developer.png"
import project from "../assets/layout1.png"
import blackbox from "../assets/blackbox-vision.png"
import aerolab from "../assets/aerolab.png"
import realtrends from "../assets/realtrends.png"
import sambuche from "../assets/sambuche.png"
import random from "../assets/randomQuote.png"
import mail from "../assets/mailbox.png"
import smart from "../assets/smartphone1.png"
import github from "../assets/github.png"
import {OS, Program, Project, Social} from "../types/types"
import fondo1 from "../assets/fondo1.jpg"
import fondo2 from "../assets/fondo2.jpg"
import fondo3 from "../assets/fondo3.jpg"
import fondo4 from "../assets/fondo4.jpg"
import display from "../assets/display1.png"
import elementary from "../assets/Screen1.png"
import windowsxp from "../assets/windowsxp.png"
import windows10 from "../assets/windows10.png"
import logoxp from "../assets/logoxp.png"
import logowindows10black from "../assets/windows10black.png"
import logowindows10white from "../assets/windows10white.png"
import fondo5 from "../assets/fondo5.jpg"
import fondo6 from "../assets/fondo6.jpg"
import fondo7 from "../assets/fondo7.jpg"
import fondo8 from "../assets/fondo8.png"
import fondo9 from "../assets/Windows-XP.jpg"

export const programs: Program[] = [
  {
    name: "User",
    img: `${dev}`,
    open: true,
    maximized: false,
    minimized: false,
  },
  {name: "Projects", img: `${project}`, open: false, maximized: false, minimized: false},
  {name: "Contact", img: `${smart}`, open: false, maximized: false, minimized: false},
  {name: "Wallpapers", img: `${display}`, open: false, maximized: false, minimized: false},
]

export const allOs: OS[] = [
  {
    name: "elementary",
    img: `${elementary}`,
    window: {
      borderWindow: {dark: "1px solid black", light: "1px solid #EBEBEB"},
      borderBottomWindow: "xl",
      borderTopWindow: "xl",
      bgTopWindow: {dark: "#313131", light: "#EBEBEB"},
      bgBottomBar: {dark: "", light: ""},
      bgWindow: {dark: "#242424", light: "#FBFBFB"},
      borderButton: "none",
      borderRadiusButton: "50%",
      bgCloseButton: "#EF5050",
      bgMinButton: "#F6AD3B",
      bgMaxButton: "#4DC849",
      colorIconTopWindow: "rgba(0,0,0,0.7)",
    },
    bottomBar: {
      bgBar: {dark: "rgba(0,0,0,0.3)", light: "rgba(255,255,255,0.2)"},
      height: "",
    },
    wallpapers: [fondo1, fondo2, fondo3, fondo4],
    desktop: {
      height: "90%",
      heightAboutMaximized: "96%",
      heightProjectsMaximized: "80%",
      heightContactsMaximized: "96%",
      heightWallpapersMaximized: "90%",
    },
  },
  {
    name: "windowsXP",
    img: `${windowsxp}`,
    window: {
      borderWindow: {dark: "3px solid #0059E7", light: "3px solid #0059E7"},
      borderBottomWindow: "none",
      borderTopWindow: "md",
      bgTopWindow: {
        dark:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
        light:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
      },
      bgBottomBar: {dark: "", light: ""},
      bgWindow: {dark: "#FBFBFB", light: "#FBFBFB"},
      borderButton: "0.5px solid white",
      borderRadiusButton: "4px",
      bgCloseButton: "#CE603D",
      bgMinButton: "#286CF5",
      bgMaxButton: "#286CF5",
      colorIconTopWindow: "white",
    },
    bottomBar: {
      bgBar: {
        dark:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
        light:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
      },
      height: "40px",
      bgStart:
        "linear-gradient(0deg, rgba(29,149,29,1) 0%, rgba(11,111,11,1) 50%, rgba(29,149,29,1) 100%)",
      borderRadiusStart: "0px 15px 15px 0px",
      widthStart: "120px",
      logoStart: {dark: `${logoxp}`, light: `${logoxp}`},
      border: "2px solid #0059E7",
      bgProgramOpen: "#3980F4",
      widthProgramOpen: "200px",
      boxShadowProgramOpen: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
      borderRadiusProgramOpen: "sm",
      bgMenuOpen: {
        dark:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
        light:
          "linear-gradient(0deg, rgba(38,139,253,1) 0%, rgba(0,89,231,1) 23%, rgba(0,89,231,1) 50%, rgba(0,89,231,1) 85%, rgba(38,139,253,1) 100%)",
      },
      bgClock: {dark: "#0D9CF0", light: "#0D9CF0"},
      widthClock: "100px",
    },
    wallpapers: [fondo5, fondo9],
    desktop: {
      height: "96%",
      heightAboutMaximized: "96%",
      heightProjectsMaximized: "90%",
      heightContactsMaximized: "97%",
      heightWallpapersMaximized: "90%",
    },
  },
  {
    name: "windows10",
    img: `${windows10}`,
    window: {
      borderWindow: {dark: "none", light: "none"},
      borderBottomWindow: "none",
      borderTopWindow: "none",
      bgTopWindow: {dark: "#020204", light: "#FEFEFE"},
      bgBottomBar: {dark: "", light: ""},
      bgWindow: {dark: "#222224", light: "#FFFFFF"},
      borderButton: "none",
      borderRadiusButton: "0px",
      bgCloseButton: "transparent",
      bgMinButton: "transparent",
      bgMaxButton: "transparent",
      colorIconTopWindow: "rgba(0,0,0,0.7)",
    },
    bottomBar: {
      bgBar: {dark: "rgba(0,0,0,0.8)", light: "rgba(255,255,255,0.8)"},
      height: "40px",
      logoStart: {dark: `${logowindows10white}`, light: `${logowindows10black}`},
      bgMenuOpen: {dark: "rgb(24, 24, 24)", light: ""},
      backdropFilter: "blur(1px)",
      bgStart: "transparent",
      bgProgramOpen: "transparent",
      widthProgramOpen: "50px",
      bgClock: {dark: "rgba(0,0,0,0.8)", light: "rgba(255,255,255,0.8)"},
      widthClock: "130px",
    },
    wallpapers: [fondo6, fondo7, fondo8],
    desktop: {
      height: "96%",
      heightAboutMaximized: "97%",
      heightProjectsMaximized: "90%",
      heightContactsMaximized: "97%",
      heightWallpapersMaximized: "90%",
    },
  },
]

export const projects: Project[] = [
  {
    name: "Sambuche App",
    github: "https://github.com/LuciaSepulveda/Sambuche-App",
    demo: "https://sambuche.netlify.app/",
    description: "Aplicación que simula el armado de un pedido de sandwich",
    img: `${sambuche}`,
  },
  {
    name: "Aerolab Challenge",
    github: "https://github.com/LuciaSepulveda/Challenge-Aerolab",
    demo: "https://aerolabchallenge.web.app/",
    description: "Tienda de productos basada en puntos.",
    img: `${aerolab}`,
  },
  {
    name: "BlackBox Vision Challenge",
    img: `${blackbox}`,
    github: "https://github.com/LuciaSepulveda/BlackBox-Vision-challenge",
    demo: "https://quizbox-vision.web.app/",
    description: "Juego de preguntas y respuestas",
  },
  {
    name: "RealTrends Challenge",
    github: "https://github.com/LuciaSepulveda/RealTrends-Challenge",
    demo: "https://realtrends-challenge.netlify.app/",
    description: "Aplicación de votación realtime",
    img: `${realtrends}`,
  },
  {
    name: "Random Quote Generator",
    github: "https://github.com/LuciaSepulveda/Random-quote-generator",
    demo: "https://random-quote-luciasepulveda.netlify.app/",
    description: "Aplicación que muestra una frase random",
    img: `${random}`,
  },
]

export const social: Social[] = [
  {name: "Github", link: "https://github.com/LuciaSepulveda", logo: `${github}`},
  {name: "Email", link: "mailto:luciabsep18@gmail.com", logo: `${mail}`},
]

export const techs: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Java",
  "POO",
  "Estructuras de datos",
  "Chakra UI",
]

export const info: string[] = ["Vivo en Bahía Blanca", "Estudiante de Ingeniería en Computación"]

export const wallpapers: string[] = [`${fondo1}`, `${fondo2}`, `${fondo3}`, `${fondo4}`]
