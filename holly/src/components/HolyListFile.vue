<template>
    <div>
        <div v-for="(item, index) in message" :key="item.id">
            <p><span>{{index+1}}</span>. {{item}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "HolyListFile",
    data() {
        return {
            message: []
        }
    },
    methods: {
        getHolyListFile(){
            return axios
                .get('http://127.0.0.1:5000/get-holy-list')
                .then( res => (this.message = res.data.split('\n')))
        }
    },
    mounted() {
        this.getHolyListFile();
    }
}
</script>