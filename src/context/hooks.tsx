import React from "react"

import UserContext, {Context} from "./context"

export function useStatus(): Context["state"]["status"] {
  const {
    state: {status},
  } = React.useContext(UserContext)

  return status
}

export function usePrograms(): Context["state"]["programs"] {
  const {
    state: {programs},
  } = React.useContext(UserContext)

  return programs
}

export function useNoProgramsOpen(): Context["state"]["noProgramsOpen"] {
  const {
    state: {noProgramsOpen},
  } = React.useContext(UserContext)

  return noProgramsOpen
}

export function useAnyProgramMaximized(): Context["state"]["anyProgramMaximized"] {
  const {
    state: {anyProgramMaximized},
  } = React.useContext(UserContext)

  return anyProgramMaximized
}

export function useSectionAbout(): Context["state"]["sectionAbout"] {
  const {
    state: {sectionAbout},
  } = React.useContext(UserContext)

  return sectionAbout
}

export function useChangeStatus(): Context["actions"]["changeStatus"] {
  const {
    actions: {changeStatus},
  } = React.useContext(UserContext)

  return changeStatus
}

export function useOpenProgram(): Context["actions"]["openProgram"] {
  const {
    actions: {openProgram},
  } = React.useContext(UserContext)

  return openProgram
}

export function useCloseProgram(): Context["actions"]["closeProgram"] {
  const {
    actions: {closeProgram},
  } = React.useContext(UserContext)

  return closeProgram
}

export function useMaximizedProgram(): Context["actions"]["maximizedProgram"] {
  const {
    actions: {maximizedProgram},
  } = React.useContext(UserContext)

  return maximizedProgram
}

export function useMinimizedProgram(): Context["actions"]["minimizedProgram"] {
  const {
    actions: {minimizedProgram},
  } = React.useContext(UserContext)

  return minimizedProgram
}

export function useChangeSectionAbout(): Context["actions"]["changeSectionAbout"] {
  const {
    actions: {changeSectionAbout},
  } = React.useContext(UserContext)

  return changeSectionAbout
}

export function useCloseAllPrograms(): Context["actions"]["closeAllPrograms"] {
  const {
    actions: {closeAllPrograms},
  } = React.useContext(UserContext)

  return closeAllPrograms
}

export function useWallpaper(): Context["state"]["wallpaper"] {
  const {
    state: {wallpaper},
  } = React.useContext(UserContext)

  return wallpaper
}

export function useChangeWallpaper(): Context["actions"]["changeWallpaper"] {
  const {
    actions: {changeWallpaper},
  } = React.useContext(UserContext)

  return changeWallpaper
}

export function useOs(): Context["state"]["os"] {
  const {
    state: {os},
  } = React.useContext(UserContext)

  return os
}

export function useChangeOs(): Context["actions"]["changeOs"] {
  const {
    actions: {changeOs},
  } = React.useContext(UserContext)

  return changeOs
}
