import { heroSlide } from "./slides/hero"
import { prerequisitesSlide } from "./slides/prerequisites"
import { htmlSlide } from "./slides/html"
import { cssSlide } from "./slides/css"
import { jsSlide } from "./slides/javascript"
import { packageMgmtSlide } from "./slides/package-management"
import { viteSlide } from "./slides/vite"
import { apisSlide } from "./slides/apis"
import { geminiSlide } from "./slides/gemini"
import { completeSlide } from "./slides/complete-chatbot"
import { enhancementsSlide } from "./slides/enhancements"
import FinalBuildSlide from "./slides/final-build"
import { resourcesSlide } from "./slides/resources"

export const slides = [
  heroSlide,
  prerequisitesSlide,
  htmlSlide,
  cssSlide,
  jsSlide,
  packageMgmtSlide,
  viteSlide,
  apisSlide,
  geminiSlide,
  completeSlide,
  enhancementsSlide,
  { component: FinalBuildSlide },
  resourcesSlide,
]
