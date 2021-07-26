<template>

  <div class="container" align="center">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <h2>All posts</h2>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Get all posts</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in info">
        <td>{{i}}</td>
      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
  const axios = require('axios');


    export default {
      layout: 'sidenavbar',
      data() {
        return {
          // info:[]
        }
      },

      async asyncData({$axios}) {

        let response = await $axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        let info = response.data;
        return {info};

      },

    }
</script>

<style scoped>
  @media (min-width: 769px) {
    .table {
      width: 93%;
      margin-bottom: 20px;
      margin-left: 170px;
      margin-top: 50px;
    }
  }
</style>
