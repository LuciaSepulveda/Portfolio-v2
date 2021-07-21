export interface Program {
  name: string
  img: string
  open: boolean
  maximized: boolean
  minimized: boolean
}

export interface Project {
  name: string
  img: string
  description: string
  github: string
  demo: string
}

export enum Status {
  initial = "initial",
  loading = "loading",
  ready = "ready",
  update = "update",
}

export interface Social {
  name: string
  link: string
  logo: string
}

export interface OS {
  name: string
  img: string
  window: {
    borderWindow: {dark: string; light: string}
    borderBottomWindow: string
    borderTopWindow: string
    bgTopWindow: {dark: string; light: string}
    bgWindow: {dark: string; light: string}
    bgBottomBar: {dark: string; light: string}
    borderButton: string
    borderRadiusButton: string
    bgCloseButton: string
    bgMinButton: string
    bgMaxButton: string
    colorIconTopWindow: string
    fontWeight?: string
  }
  bottomBar: {
    bgBar: {dark: string; light: string}
    height: string
    border?: string
    bgStart?: string
    bgClock?: {dark: string; light: string}
    bgProgramOpen?: string
    bgMenuOpen?: {dark: string; light: string}
    borderRadiusStart?: string
    widthStart?: string
    logoStart?: {dark: string; light: string}
    backdropFilter?: string
    widthProgramOpen?: string
    boxShadowProgramOpen?: string
    borderRadiusProgramOpen?: string
    widthClock?: string
    heightLogoStart?: string
    borderRadiusMenuOpen?: string
  }
  desktop: {
    height: string
    heightAboutMaximized: string
    heightProjectsMaximized: string
    heightContactsMaximized: string
    heightWallpapersMaximized: string
  }
  wallpapers: string[]
}
