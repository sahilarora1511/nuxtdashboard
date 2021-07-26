<template>
  <div class="container" align="center">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <h2>Post's info</h2>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Post Info</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="result in this.post_results">
        <td>{{result.id}}</td>
        <td>{{result.title}}</td>
        <td>{{result.body}}</td>
      </tr>
      </tbody>
    </table>

    <div>
      <h2>Create new post</h2>
      <div class="form-group">
        <label for="post_title">Add title here</label>
        <textarea class="form-control" id="post_title" v-model="title" rows="1"></textarea>
      </div>

      <div class="form-group">
        <label for="post_body">Add body here</label>
        <textarea class="form-control" id="post_body" v-model="body" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-primary" @click="addPost()">Submit</button>
    </div>

  </div>

</template>

<script>
    import axios from "axios";

    export default {
        layout:'sidenavbar',
      data(){
          return{
            post_results:[],
            title:'',
            body:''
          }
      },

      async created(){
         await this.getPost();
      },

      methods:{
        addPost(){
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: this.title,
              body: this.body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
              .then((response) => {response.json(); this.getPost(); alert('post added, look at request')})
              .then((json) => console.log(json));
        },

       async getPost(){
            let id = this.$route.query.id;
            // let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            this.post_results = Object.values(res.data)
        }
      }
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

  .form-group{
    width: 70%;
  }
</style>
