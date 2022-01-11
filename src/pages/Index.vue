<template>
  <div>
    <div class="navbar shadow-lg bg-neutral text-neutral-content">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-lg font-bold"> Kombos Jayapura </span>
      </div>

      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
          <a class="btn btn-ghost btn-sm rounded-btn"> About </a>
          <a class="btn btn-ghost btn-sm rounded-btn"> Services </a>
          <a class="btn btn-ghost btn-sm rounded-btn"> Contact </a>
        </div>
      </div>

      <div class="navbar-end">
        <button class="btn btn-square btn-ghost">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      class="hero min-h-screen"
      style="
        background-image: url('https://tsoimageprod.azureedge.net/sys-master-hybrismedia/h22/h48/8821325824030/Daftar%20Bengkel%20Mobil%20Toyota%20Auto2000%20di%20Liburan%20Akhir%20Tahun%202020.png');
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Booking service</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Beranda",
  },
};
</script>

<style>
</style>
