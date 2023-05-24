import PocketBase from 'pocketbase' ;
import Vue from 'vue';
const pb = new PocketBase('http://127.0.0.1:8090');

const app = new Vue({
    el: '#app',
    data: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    methods: {
      register() {
        // Créer un nouvel utilisateur dans PocketBase
        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
  
        // Envoyer les données de l'utilisateur à PocketBase
        PocketBase.create('users', newUser)
          .then(() => {
            // L'utilisateur a été créé avec succès
            console.log('Utilisateur inscrit avec succès !');
            // Effectuer d'autres actions ou redirection vers une autre page
          })
          .catch(error => {
            // Une erreur s'est produite lors de la création de l'utilisateur
            console.error('Erreur lors de l\'inscription de l\'utilisateur:', error);
          });
      }
    }
  });
/*export async function login(id: string,passwd: string) {
    await pb.collection('users').authWithPassword(id, passwd);
}*/

/*export async function register(username: string,email: string,password: string,passwordConfirm: string) {
    await pb.collection('users').create({
        username:username,
        email:email,
        password: password ,
        passwordConfirm: passwordConfirm,
    });
}*/

