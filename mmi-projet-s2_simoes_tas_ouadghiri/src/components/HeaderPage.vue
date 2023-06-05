<script setup lang="ts">
	import LogoIcon from '@/components/icons/CoohopLogoHeader.vue'
    const menuIsOpen = ref(false)
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import { logout, estConnecté, login } from '@/auth'



</script>

<template>
    <header class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100 gap-8 bg-orange-600">
        <RouterLink to="/">
            <LogoIcon  /> 
        </RouterLink>

        <button class="h-3 w-6 flex flex-col justify-between lg:hidden" @pointerdown="menuIsOpen = !menuIsOpen" aria-controls="menuIsOpen" aria-expanded="true">
            <span class="block h-[2px] w-full bg-white transition duration-300" :class="{ 'translate-y-[5px] rotate-45' : menuIsOpen}"></span>
            <span class="block h-[2px] w-full bg-white transition duration-300" :class="{ '-translate-y-[5px] -rotate-45' : menuIsOpen}"></span>
        </button>

            <nav class="invisible opacity-0 fixed z-10 bg-indigo-50 inset-0 mt-20 flex flex-col justify-between py-12 px-6 lg:visible lg:opacity-100 lg:static lg:mt-0 lg:flex-row lg:bg-transparent lg:flex-1"
            :class="{'!visible !opacity-100' : menuIsOpen}">
                <ul class="flex flex-col gap-4 lg:flex-row lg:items-center ">
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="">Rechercher</RouterLink></li>
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="/events">Évènements</RouterLink></li>
                    <li><RouterLink class="block p-4 rounded-lg text-white" to="">Messagerie</RouterLink></li>
                </ul>
                <div class="flex items-center gap-4 px-4">
                        <button v-if="estConnecté" @click="logout" class="flex-1 p-3 rounded-lg border-2 border-white font-bold text-white lg:flex-none lg:px-6">{{ estConnecté.username }}</button>
                        <button v-else @click="login" class="flex-1 p-3 rounded-lg bg-orange-600 text-white font-bold lg:flex-none lg:px-6">Se connecter</button>
                </div>
            </nav>
    </header>


</template>

