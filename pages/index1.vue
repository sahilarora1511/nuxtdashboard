
<template>

  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://kit.fontawesome.com/de782c7217.js" crossorigin="anonymous"></script>
  <div class="container">
  <h1 align="center" style="color: #3b8070">Login Form</h1>
    <form action="/table">
      <div class="row">
        <div class="col-25">
          <i class="fas fa-user">&nbsp</i>
          <label for="fname">Email :</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="email" v-model="email">
        </div>
      </div>

      <div class="row" >
<!--        <input type="submit" value="Submit" :disabled="isDisabled" :class="{'color': this.firstName==='admin' && this.password==='admin'}" >-->
        <input type="button" value="Submit" class="color" @click="login()" >
      </div>
    </form>
  </div>
  </div>
</template>

<script >


  import 'material-design-icons-iconfont/dist/material-design-icons.css'
  const axios = require('axios');
    export default {
    layout: 'default',
      data() {
        return {
          email: '',
          authorizedEmail:[],
          activeEmail:[],
          activeId:0,
          res:[]
        }
      },

      async created() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.res = response.data
        for(let i in response.data)
        this.authorizedEmail[i] = response.data[i].email;
      },

      methods:{
      myFunction(){
        alert("Login Successful");
      },

        login() {

        if(this.authorizedEmail.includes(this.email)){
          this.activeEmail = this.res.filter(x=>
          {
            if(x.email === this.email)
              return x.id
          });
          this.activeId = this.activeEmail[0].id;
          this.$router.push(`/table?id=${this.activeId}`);
          this.myFunction();
        }
        else{
          alert("Invalid Credentials");
        }

        },
      }
    }


</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  input[type=password], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input[type=button] {
    background-color: grey;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }



  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    margin-top: 70px;
  }

  .col-25 {
    float: left;
    width: 20%;
    margin-top: 6px;
  }

  .col-75 {
    float: left;
    width: 80%;
    margin-top: 6px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .color{
    background-color: green !important;
  }

  .row{
    display: flow-root;
    margin-top: 20px;
  }
  @media (min-width: 1024px) {
    .container {
      width:63%; margin-top: 40px;
    }
  }
  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 768px) {
    .col-25, .col-75, input[type=button] {
      width: 100%;
      margin-top: 0;
    }
  }

</style>

