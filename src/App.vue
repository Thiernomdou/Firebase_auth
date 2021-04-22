<template>
  <div id="app">
    <div class="navbar navbar-dark bg-primary">
      <a href="#" class="navbar-brand">Firebase Auth</a>
      <ul class="nav">
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/about">About</router-link>
        </li>
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/member-area">Member Area</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
    <div class="container py-4">
    <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
