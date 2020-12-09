import Vue from 'vue'
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { mapActions, mapState } from 'vuex';


@Component({
    methods: {
        ...mapActions('bots', ['getRocketPicture', 'sendUserInput'])
    },
    computed: {
        ...mapState('bots', ['picture', 'questionTime', 'frames'])
    }
})
class BotContainer extends Vue {
    avatar = "https://p7.hiclipart.com/preview/181/1015/787/rocket-drawing-clip-art-vector-material-cartoon-rocket.jpg";
    botName = "Nombre del bot"
    botDialog = "dialogo del bot"
    userInput = ''
    disabledSend = true
    currentFrame = 0

    currentFrame () {
        this.currentFrame = 1
    }


    async confirmAction () {
        console.log('entra confirmAction')
        await this.sendUserInput()
        this.getRocketPicture()
    }

    async rejectAction () {
        console.log('entra rejectAction')
        await this.sendUserInput()
        this.getRocketPicture()
    }

    async sendInput () {
        let payload = {
            user_input: this.userInput,

        }
        await this.sendUserInput(payload)
    }

    @Watch('userInput')
    userInputWatcher () {
        this.disabledSend = this.userInput === '' ? true : false
    }
}

export default BotContainer;