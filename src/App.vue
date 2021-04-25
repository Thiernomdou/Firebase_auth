<template>
  <div id="app">
    <div class="navbar navbar-dark bg-primary">
      <a href="#" class="navbar-brand">Firebase Authentification</a>
      <ul class="nav">
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/home">Accueil</router-link>
        </li>
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/about">A Propos</router-link>
        </li>
        <li class="nav-item pr-4">
          <router-link class="text-white" to="/member-area">Equipe</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-white" to="/">Connexion</router-link>
        </li>
      </ul>
    </div>
    <div class="container py-4">
    <router-view/>
    </div>
  </div>
</template>

<style scoped>

ul li a{
  text-decoration: none;
}
ul li a:hover{
  color: crimson;
}

#nav {
  padding: 30px;
}


</style>
