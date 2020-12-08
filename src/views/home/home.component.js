import Vue from 'vue'
import Component from 'vue-class-component'

import imageContainer from '../../components/imageContainer/imageContainer.vue'
import botContainer from '../../components/botContainer/botContainer.vue'


@Component({
    components: {
        imageContainer,
        botContainer,
    }
})
class Navbar extends Vue {
}

export default Navbar;