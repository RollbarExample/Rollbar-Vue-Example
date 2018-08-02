<template>
  <div class="hello">
    <h1>Rollbar Vue Example</h1>
    <ul>
      <li>
       <button v-on:click="parse">Generate an error</button>
      </li>
    </ul>
  </div>
</template>

<script>
//import Vue from 'vue'
//import Parent from 'Parent'
const Child = {
  //created () { debugger; throw new Error() },
  render(h) {
     throw new Error('Broken UI'); return h('div') 
  }
}
export default {
  name: 'HelloWorld',
  components: {
    'parent': Child
  },
  props: {
    msg: 'Rollbar Example'
  },
  data: () => ({
      clicks: 0,
      json: '{ "not quite: json" }'
  }),
  methods: {
    watch: {
      parse: function () {
       // try{
            JSON.parse(this.json)
       // }catch(e){
          //Vue.config.errorHandler(e)
         // console.log('Exception : ',e)
       // }
        
      }
   } 
  }             
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
btn {
  height: 40px;
  width: 200px;
  outline: none;
  background: #009688;
  border: solid thin #444444;
  color: #eeeeee;
  font-size: 1em;
}
</style>
