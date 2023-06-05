<script setup lang="ts">
    const activeMenu = ref(false)
    import { RouterLink } from 'vue-router';
    import LogoIcon from '@/components/icons/CoohopLogoHeader.vue'
    import { logout, estConnecté, login } from '@/auth'
    import { ref,computed, watch } from 'vue';
    function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
 <header class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100 gap-8 lg:py-0 bg-orange-600">
      <RouterLink class="z-30" to="/">
        <LogoIcon/>
      </RouterLink>


        <button class="relative z-20 flex h-5 w-8 flex-col justify-between lg:hidden"  @click="activeMenu = !activeMenu">
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></span>
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></span>
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300"  :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></span>
      </button> 


        <nav
            class="z-10 invisible opacity-0 fixed inset-0 h-screen w-screen bg-slate-50 text-2xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
            :class="{ '!visible opacity-100': activeMenu }"
            v-scroll-lock="activeMenu"
        >
        <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex"> 
                <li class="menu-item uppercase text-white"><RouterLink to="/events" @click="closeMenu" class="menu-link">mes évènements</RouterLink></li>
                <li class="menu-item uppercase text-white"><RouterLink to="/messagerie" @click="closeMenu" class="menu-link">messagerie</RouterLink></li>
		</ul>
        <div class="flex items-center gap-4 px-4">
                      <button v-if="estConnecté" @click="logout" class="flex-1 p-3 rounded-lg border-2 border-white font-bold text-white lg:flex-none lg:px-6">{{ estConnecté.username }}</button>
                      <button v-else @click="login" class="flex-1 p-3 rounded-lg border-2 text-white border-white font-bold lg:flex-none lg:px-6">Se connecter</button>
              </div>
		</nav>
  </header>
</template>