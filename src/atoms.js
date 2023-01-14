import { atom } from 'recoil'
import profilePic from './assets/tasProfile.jpg'
import epin from './assets/epin.png'
import gsWar from './assets/gsWar.png'
import virtualTour from './assets/virtualTour.png'

const projectListState = atom({
  key: 'projectListState',
  default: [
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
      img: profilePic,
      shortDesc: 'An web app that can create QR code for URL links',
      longDesc: 'xxx',
      codeURL: '',
      liveURL: '',
      techStacks: 'React.js, Recoil.js',
      isActive: false,
    },
    {
      name: 'JP.top',
      img: profilePic,
      shortDesc: 'A personal portolio website',
      longDesc: 'xxx',
      codeURL: '',
      liveURL: '/',
      techStacks: 'React.js, CSS, Recoil.js, Bootstrap, Django',
      isActive: true,
    },
  ],
})

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
})

export {
  projectListState,
  darkModeState,
}