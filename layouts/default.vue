<template>

  <div>
    <script src="https://kit.fontawesome.com/de782c7217.js" crossorigin="anonymous"></script>
    <div id="navbar">
      <a href="/index1">Login &nbsp<i class="fas fa-sign-in-alt">&nbsp</i></a>
      <a href="/">Nuxt</a>
    </div>
    <nuxt />
  </div>
</template>

<style>
  #navbar a{
    font-size: 20px;
    margin-right: 20px;
    margin-left: 20px;
    float:right
  }
  #navbar{
    height:30px;
    width:100%;
    background-color: darkgray;
  }
  .hero-image {
    background-color: #3b8070;
    height: 60px;
  }

  .hero-text {
    text-align: center;
    position: relative;
    color: black;
    top:10px;
  }
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /*background-color: lavenderblush;*/
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}


</style>
