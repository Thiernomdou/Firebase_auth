<template>
  <div class="row">
      <div class="col-sm-5 m-auto">
          <div class="mb-4 text-center">
              <h1>Connexion</h1>
          </div>
          <form id="login-form" @submit.prevent="loginUser">
              <div class="row text-center">
                    <div class="col-sm-12 form-group">
                        <label for="email" >Email adress</label>
                        <input type="email" id="email" v-model="email" class="form-control from-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" class="form-control from-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-4">Connexion</button>
                        <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4">
                            <span class="spinner-border spinner-border-sm btn-spn"></span>
                            wait ...
                        </button>
                    </div>
                    <div class="col-sm-12 form-group mb-5">
                        <p>Vous n'avez pas de compte? <router-link to="/signup">Inscrivez-vous</router-link></p>
                    </div>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            email: '',
            password: '',
            xhrRequest: false
        }
    },
    methods: {
        loginUser() {
            this.xhrRequest = true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                () => {
                    this.xhrRequest = false;
                    this.$router.replace('member-area');
                },
                (err) => {
                    this.xhrRequest = false;
                    alert(`Error - ${err.message}`);
                }
            );
        }
    }
}
</script>

<style scoped>
.btn-spn {
    position: relative;
    top: -3px;
}
</style>