import Vue from 'vue'
require('./bootstrap');
import PostComponent from "./components/PostComponent";


const app = new Vue({
    el:'#app',

    components: {
        PostComponent,
    }

})


