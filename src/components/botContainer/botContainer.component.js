import Vue from 'vue'
import Component from 'vue-class-component'


@Component
class BotContainer extends Vue {
    avatar = "https://p7.hiclipart.com/preview/181/1015/787/rocket-drawing-clip-art-vector-material-cartoon-rocket.jpg";
    botName = "Nombre del bot"
    botDialog = "dialogo del bot"


    confirmAction () {
        console.log('entra confirmAction')
    }

    rejectAction () {
        console.log('entra rejectAction')
    }
}

export default BotContainer;