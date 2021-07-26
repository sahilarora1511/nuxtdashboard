<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/de782c7217.js" crossorigin="anonymous"></script>
    <div class="sidebar">
<!--      <a class="active" href="#home">Home</a>-->
      <nuxt-link  to="/table"><i class="fas fa-info">&nbsp</i>Post's Info</nuxt-link>
<!--      <nuxt-link  to=""><i class="fas fa-paw">&nbsp</i>Axios</nuxt-link>-->
      <nuxt-link to="/index1"><i class="fas fa-sign-out-alt">&nbsp</i>Logout</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script >

    export default {
      data(){
        return{
          id: 0
        }
      },

      mounted(){
        this.id= this.$route.query.id;
        console.log(this.id)
      },
      methods:{
        goToDashboard(){
          console.log('clicked')
        }
      }

    }
</script>

<style  scoped>
  .sidebar {
    margin: 0;
    padding: 0;
    width: 270px;
    background-color: lightsteelblue;
    position: fixed;
    height: 100%;
    overflow: auto;
  }

  .sidebar a {
    display: block;
    color: black;
    padding: 33px;
    text-decoration: none;
    font-size: 20px;
  }

  .sidebar a.active {
    background-color: #4CAF50;
    color: white;
  }

  .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
  }

  div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
  }
  @media screen and (max-width: 1024px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }

  @media screen and (max-width: 768px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }
</style>
