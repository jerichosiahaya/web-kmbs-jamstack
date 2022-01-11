<template>
  <div>
    <Layout>
      <div
        class="hero min-h-screen"
        style="
          background-image: url('https://tsoimageprod.azureedge.net/sys-master-hybrismedia/h22/h48/8821325824030/Daftar%20Bengkel%20Mobil%20Toyota%20Auto2000%20di%20Liburan%20Akhir%20Tahun%202020.png');
        "
      >
        <div class="hero-overlay bg-opacity-75"></div>
        <div class="text-center hero-content text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">CV Kombos Toyota Jayapura</h1>
            <p class="mb-5">
              Senin - Jumat: 08.00 - 16.00 WIT | Sabtu: 08.00 - 12.00 WIT |
              Minggu: Tutup
            </p>
            <button class="btn btn-primary">Booking service</button>
          </div>
        </div>
      </div>

      <div class="mb-7 product-cards lg:mt-8">
        <div class="flex flex-col justify-evenly lg:flex-row lg:space-x-0">
          <div class="item mt-4 mb-4">
            <div
              class="
                card
                shadow-2xl
                lg:card-side
                bg-base
                text-neutral-base
                m-5
                lg:m-0
              "
            >
              <div class="card-body">
                <h2 class="card-title text-center">LOKASI</h2>
                <p class="lg:hidden">
                  Jln. Kelapa Dua, Entrop, Jayapura Selatan (samping Hotel
                  Sahid). <br />
                  <br />
                  Senin - Jumat: 08.00 - 17.00 WIT <br />
                  Sabtu: 08.00 - 12.00 WIT <br />
                  Minggu: Tutup
                </p>
                <div class="justify-center card-actions">
                  <button class="btn btn-primary">
                    Google Maps
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="item mt-4 mb-4">
            <div
              class="
                card
                shadow-2xl
                lg:card-side
                bg-base
                text-neutral-base
                m-5
                lg:m-0
              "
            >
              <div class="card-body">
                <h2 class="card-title text-center">PROMO / DISKON</h2>
                <p class="lg:hidden">
                  Diskon hari raya, serta promo-promo lainnya dapat dicek di
                  sini.
                </p>
                <div class="justify-center card-actions">
                  <button class="btn btn-primary">
                    Cek Promo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="item mt-4 mb-4">
            <div
              class="
                card
                shadow-2xl
                lg:card-side
                bg-base
                text-neutral-base
                m-5
                lg:m-0
              "
            >
              <div class="card-body">
                <h2 class="card-title text-center">ONLINE BOOKING</h2>
                <p class="lg:hidden">
                  Booking terlebih dahulu sebelum service lewat Whatsapp dengan
                  cara klik tombol di bawah ini.
                </p>
                <div class="justify-center card-actions">
                  <button class="btn btn-primary">
                    Booking Service
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="mt-5 tentang-kami justify-center text-center">
        <h2>Tentang Kami</h2>
        <h2>Jam Buka Bengkel</h2>
        <h2>Galeri Bengkel</h2>
      </div>
    </Layout>
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
