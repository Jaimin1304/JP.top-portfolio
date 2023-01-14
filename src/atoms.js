import { atom } from 'recoil'
import jp from './assets/jp.png'
import epin from './assets/epin.png'
import gsWar from './assets/gsWar.png'
import virtualTour from './assets/virtualTour.png'
import bootstrap from './assets/bootstrap.svg'
import django from './assets/django-icon.svg'
import html from './assets/html-5.svg'
import css from './assets/css-3.svg'
import javascript from './assets/javascript.svg'
import python from './assets/python.svg'
import react from './assets/react.svg'
import recoil from './assets/recoil-icon.svg'
import ubuntu from './assets/ubuntu.svg'
import unity from './assets/unity.svg'
import figma from './assets/figma.svg'
import git from './assets/git-icon.svg'

const projectListState = atom({
  key: 'projectListState',
  default: [
    {
      name: 'JP.top',
      img: jp,
      shortDesc: 'A personal portolio website',
      longDesc: 'xxx',
      codeURL: 'https://github.com/Jaimin1304/JP.top-portfolio',
      liveURL: '/',
      techStacks: 'React.js, CSS, Recoil.js, Bootstrap, Django',
      isActive: true,
    },
    {
      name: 'jobepin.com.au',
      img: epin,
      shortDesc: 'A growing recruitment platform for Chinese Australians',
      longDesc: 'xxx',
      codeURL: '',
      liveURL: 'https://www.jobepin.com.au/',
      techStacks: 'Python, Django, Bootstrap, HTML, CSS, Javascript',
      isActive: true,
    },
    {
      name: 'One Harvest Virtual Training Experience',
      img: virtualTour,
      shortDesc: 'An immersive virtual training application for food industry',
      longDesc: 'xxx',
      codeURL: 'https://bitbucket.org/jery_l/comp3888-project-backend/src/main/',
      liveURL: 'http://hai7u.xyz/',
      techStacks: 'DjangoRestFrameWork, HTML, Bootstrap, Unity WebGL',
      isActive: true,
    },
    {
      name: 'GrayscaleWar.io',
      img: gsWar,
      shortDesc: 'A demo project of an online multiplayer io game',
      longDesc: 'xxx',
      codeURL: 'https://github.com/Jaimin1304/GSWar.io',
      liveURL: 'https://www.jobepin.com.au/',
      techStacks: 'Javascript, HTML Canvas',
      isActive: true,
    },
    {
      name: 'QR code Generater',
      img: '',
      shortDesc: 'An web app that can create QR code for URL links',
      longDesc: 'xxx',
      codeURL: '',
      liveURL: '',
      techStacks: 'React.js, Recoil.js',
      isActive: false,
    },
  ],
})

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
})

const skillsState = atom({
  key: 'skillsState',
  default: [
    {name: 'React', active: true, img: react},
    {name: 'HTML', active: true, img: html},
    {name: 'CSS', active: true, img: css},
    {name: 'Javascript', active: true, img: javascript},
    {name: 'Django', active: true, img: django},
    {name: 'Python', active: true, img: python},
    {name: 'Recoil', active: true, img: recoil},
    {name: 'Bootstrap', active: true, img: bootstrap},
    {name: 'Ubuntu', active: true, img: ubuntu},
    {name: 'Unity', active: true, img: unity},
    {name: 'Git', active: true, img: git},
    {name: 'Figma', active: true, img: figma},
  ],
})

export {
  projectListState,
  darkModeState,
  skillsState,
}