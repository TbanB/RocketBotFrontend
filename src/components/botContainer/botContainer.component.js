import Vue from 'vue'
import Component from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { Watch } from 'vue-property-decorator';


@Component({
    methods: {
        ...mapActions('bots', ['getRocketPicture'])
    },
    computed: {
        ...mapState('bots', ['picture'])
    }
})
class BotContainer extends Vue {
    avatar = "https://p7.hiclipart.com/preview/181/1015/787/rocket-drawing-clip-art-vector-material-cartoon-rocket.jpg";
    botName = "Nombre del bot"
    botDialog = "dialogo del bot"
    userInput = ''


    confirmAction () {
        console.log('entra confirmAction')
        this.getRocketPicture()
    }

    rejectAction () {
        console.log('entra rejectAction')
    }


    @Watch('userInput')
    loadingContainerImg () {
        console.log(this.userInput)
    }
}

export default BotContainer;