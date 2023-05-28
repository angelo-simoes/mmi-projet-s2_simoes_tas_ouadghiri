<template>
    <div>
      <h2>User Profile</h2>
      <div v-if="user">
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <!-- Affiche d'autres informations de l'utilisateur -->
      </div>
      <div v-else>
        <p>No user data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('user', ['currentUser']),
    },
  };
  </script>
  