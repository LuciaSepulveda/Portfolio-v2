import React from "react"

import {OS, Program, Status} from "../types/types"
import {programs, wallpapers, allOs} from "../data/data"

export interface Context {
  state: {
    status: Status
    programs: Program[]
    noProgramsOpen: boolean
    anyProgramMaximized: boolean
    sectionAbout: string
    wallpaper: string
    os: OS
  }
  actions: {
    changeStatus: (status: Status) => void
    openProgram: (program: Program) => void
    closeProgram: (program: Program) => void
    maximizedProgram: (program: Program) => void
    minimizedProgram: (program: Program) => void
    changeSectionAbout: (section: string) => void
    closeAllPrograms: (program: Program) => void
    changeWallpaper: (wallpaper: string) => void
    changeOs: (os: string) => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<Status>(Status.initial)
  const [noProgramsOpen, setProgramsOpen] = React.useState<boolean>(false)
  const [anyProgramMaximized, setAnyProgramMaximized] = React.useState<boolean>(false)
  const [sectionAbout, setSectionAbout] = React.useState<string>("about")
  const [wallpaper, setWallpaper] = React.useState<string>("")
  const [os, setOs] = React.useState<OS>({
    name: "",
    img: "",
    window: {
      borderWindow: {dark: "", light: ""},
      borderBottomWindow: "",
      borderTopWindow: "",
      bgTopWindow: {dark: "", light: ""},
      bgBottomBar: {dark: "", light: ""},
      bgWindow: {dark: "", light: ""},
      borderButton: "",
      borderRadiusButton: "",
      bgCloseButton: "",
      bgMinButton: "",
      bgMaxButton: "",
      colorIconTopWindow: "",
    },
    bottomBar: {
      bgBar: {dark: "", light: ""},
      height: "",
    },
    wallpapers: [],
    desktop: {
      height: "",
      heightAboutMaximized: "",
      heightProjectsMaximized: "",
      heightContactsMaximized: "",
      heightWallpapersMaximized: "",
    },
  })

  const handleChangeSectionAbout = (s: string) => {
    setSectionAbout(s)
  }

  const handleChangeOs = (os: string) => {
    allOs.forEach((elem) => {
      if (elem.name === os) setOs(elem)
    })
  }

  const handleChangeWallpaper = (w: string) => {
    setWallpaper(w)
  }

  const handleCheckProgramsClose = () => {
    let allClose = true

    for (let i = 0; i < programs.length; i++) {
      if (programs[i].open === true) allClose = false
    }

    setProgramsOpen(allClose)
  }

  const handleCheckProgramMaximized = () => {
    let anyMaximized = false

    for (let i = 0; i < programs.length; i++) {
      if (programs[i].maximized === true) anyMaximized = true
    }

    setAnyProgramMaximized(anyMaximized)
  }

  function handleChangeStatus(s: Status) {
    setStatus(s)
  }

  function handleOpenProgram(p: Program) {
    p.open = true
    p.minimized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleCloseProgram(p: Program) {
    p.open = false
    p.maximized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
    handleCheckProgramMaximized()
  }

  function handleMaximizedProgram(p: Program) {
    p.maximized = !p.maximized
    p.minimized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
    handleCheckProgramMaximized()
  }

  function handleMinimizedProgram(p: Program) {
    p.minimized = true
    p.maximized = false
    setStatus(Status.update)
    handleCheckProgramsClose()
  }

  function handleCloseAllPrograms(p: Program) {
    for (let i = 0; i !== programs.length; i++) {
      if (programs[i].name !== p.name) handleCloseProgram(programs[i])
    }
  }

  const state: Context["state"] = {
    status,
    programs,
    noProgramsOpen,
    anyProgramMaximized,
    sectionAbout,
    wallpaper,
    os,
  }

  const actions = {
    changeStatus: handleChangeStatus,
    openProgram: handleOpenProgram,
    closeProgram: handleCloseProgram,
    maximizedProgram: handleMaximizedProgram,
    minimizedProgram: handleMinimizedProgram,
    changeSectionAbout: handleChangeSectionAbout,
    closeAllPrograms: handleCloseAllPrograms,
    changeWallpaper: handleChangeWallpaper,
    changeOs: handleChangeOs,
  }

  if (status === "update") {
    setStatus(Status.ready)
  }

  if (os.name !== "" && status === "initial") {
    setStatus(Status.loading)
    setWallpaper(os.wallpapers[0])
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
