<template>
  <div>
    <div>adasdsad</div>
    <button @click="clickBtn">点击</button>
    <button @click="clickBtnBack">再点击</button>
    <vuex-child></vuex-child>
    <h1 v-on:mouseover="events">11111111111</h1>
  </div>
</template>

<script>
import VuexChild from '../../components/VuexChild.vue'
export default {
  data(){
    return {

    }
  },
  computed: {
  },
  methods: {
    clickBtn(){
      this.$store.commit('changeChildText', '父组件修改子组件后的文本')
    },
    clickBtnBack(){
      
    },
    events: function(event){
      console.log(event)
    }
  },
  components: {
    VuexChild
  }
};
</script>