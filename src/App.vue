<template>
<body>
  <div id="app">
    <myheader></myheader>
    <router-view/>

  </div>
  
</body>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
  },
}


</script>

<style>

body {
  background-image: url("./assets/siege.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
