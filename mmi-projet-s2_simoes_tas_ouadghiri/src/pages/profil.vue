<script setup lang="ts">
    import { estConnecté } from '@/auth'
    import { ref } from 'vue';
    import { pb } from '@/backend'


const avatarUrl = ref('');


const formData = new FormData();

const fileInput = document.getElementById('fileInput');

// listen to file input changes and add the selected files to the form data
fileInput?.addEventListener('change', function () {
    for (let file of fileInput.files) {
        formData.append('documents', file);
    }
});

// set some other regular text field value
formData.append('title', 'Hello world!');


// upload and create new record
const createdRecord = await pb.collection('example').create(formData);
</script>


<template>
  <h1>salut {{ estConnecté?.username }}</h1>
</template>
