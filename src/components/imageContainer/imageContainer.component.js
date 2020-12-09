import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapState } from 'vuex';
import { Watch } from 'vue-property-decorator';


@Component({
    computed:{
        ...mapState('bots', ['loading', 'picture', 'loadingImg']),
    },
    methods: {
        ...mapActions('bots',['getRocketPicture'])
    }
})
class ImageContainer extends Vue {
    imageUrl = ''
    loading = this.loading

    async created () {
        this.imageUrl = this.loadingImg
        await this.getRocketPicture()
    }

    @Watch('loading')
    loadingContainerImg () {
        if (this.loading === true) {
            this.imageUrl = this.loadingImg
        } else {
            this.imageUrl = this.picture
        }
    }
}

export default ImageContainer;