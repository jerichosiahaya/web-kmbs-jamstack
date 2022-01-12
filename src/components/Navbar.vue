<template>
  <div>
    <div class="navbar bg-primary-content text-neutral">
      <div class="px-2 mx-2 navbar-start">
        <!-- <span class="text-lg font-bold"> Kombos Jayapura </span> -->
        <div class="avatar">
          <div class="rounded-btn w-12 h-12">
            <img
              src="https://static.dezeen.com/uploads/2020/07/toyota-rebrand-logo-design_dezeen_2364_sq_1.jpg"
            />
          </div>
        </div>
        <span class="hidden px-2 mx-2 lg:flex text-lg font-bold">
          Toyota Jayapura
        </span>
      </div>

      <!-- seharusnya dibikin hamburger -->
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <g-link to="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
          </g-link>
          <g-link to="/kontak" class="btn btn-ghost btn-sm rounded-btn">
            Kontak
          </g-link>
          <a class="btn btn-ghost btn-sm rounded-btn"> Lowongan </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="flex-none lg:hidden">
          <button @click="toggle = !toggle" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="toggle"
      class="responsive-navbar flex flex-col bg-primary-content"
    >
      <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
      <a class="btn btn-ghost btn-sm rounded-btn"> Kontak </a>
      <a class="btn btn-ghost btn-sm rounded-btn"> Lowongan </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style>
</style>