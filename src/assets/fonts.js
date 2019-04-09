// fontawesome
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { faHeart,faComment,faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserCircle,faHeart,faComment,faBookmark)

Vue.component('font-awesome-icon', FontAwesomeIcon)