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
              Jln. Raya Kelapa Dua, Entrop, Jayapura Selatan, Ardipura, Kota
              Jayapura, 99221 (samping Hotel Sahid)
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6281381669200&text=Halo,%20saya%20mau%20booking%20servis,%20apakah%20bisa?"
            >
              <button class="btn btn-primary">
                Booking service
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="mb-7 product-cards lg:mt-8">
        <div class="flex flex-col justify-evenly lg:flex-row lg:space-x-0">
          <div class="item mt-4 mb-4">
            <div class="card shadow-2xl bg-base text-neutral-base m-5 lg:m-0">
              <div class="card-body">
                <h2 class="card-title text-center">LOKASI BENGKEL</h2>

                <img
                  src="https://icons.iconarchive.com/icons/atyourservice/service-categories/512/Car-Repair-icon.png"
                  alt=""
                  class="w-32 mx-auto mb-7 lg:mb-0"
                />

                <p class="lg:hidden text-center">
                  Jln. Kelapa Dua, Entrop, Jayapura Selatan (samping Hotel
                  Sahid)
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
                <img
                  src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/coupon-icon.png"
                  alt=""
                  class="w-32 mx-auto mb-7 lg:mb-0"
                />
                <p class="lg:hidden text-center">
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
                <img
                  src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Whatsapp-icon.png"
                  alt=""
                  class="w-32 mx-auto mb-7 lg:mb-0"
                />
                <p class="lg:hidden text-center">
                  Booking terlebih dahulu sebelum service lewat Whatsapp dengan
                  cara klik tombol di bawah ini.
                </p>
                <div class="justify-center card-actions">
                  <a
                    href="https://api.whatsapp.com/send?phone=6281381669200&text=Halo,%20saya%20mau%20booking%20servis,%20apakah%20bisa?"
                  >
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="mt-5 mb-5 tentang-kami justify-center text-center">
        <div
          class="
            flex flex-col
            items-center
            lg:items-start lg:flex-row
            justify-center
            lg:space-x-10
          "
        >
          <div class="prose item">
            <h2>Tentang Kami</h2>
            <div
              class="
                card
                text-justify
                lg:card-side
                bg-accent-focus
                text-accent-content
                m-5
                lg:m-0
                rounded-none
              "
            >
              <div class="card-body">
                <p>
                  <b>CV Kombos Toyota Jayapura </b> merupakan Bengkel Authorized
                  Dealer Toyota terbesar di Jayapura di bawah naungan PT. Toyota
                  Astra Motor. Kami ada guna mempermudah anda dalam proses
                  perbaikan dan perawatan mobil Toyota anda. Percayakan
                  perawatan mobil Toyota anda pada kami. Dapatkan penawaran
                  spesial dari kami khusus untuk anda pelanggan setia Toyota.
                  Kami senantiasa selalu memberi pelayanan terbaik kepada
                  seluruh pelanggan, karena kepuasan pelanggan selalu menjadi
                  prioritas kami. Layanan yang kami sediakan, meliputi: Servis
                  Berkala, Toyota Home Service, General Repair, Body Repair and
                  Paint, Engine Tune Up, Electrical, Spooring/Balancing, Parts
                  Sales, dsb.
                </p>
              </div>
            </div>
          </div>

          <!-- jam buka bengkel -->
          <div class="mt-7 lg:mt-0 prose item">
            <h2>Jam Buka Bengkel</h2>
            <div class="overflow-x-auto">
              <table class="table w-full table-zebra">
                <thead>
                  <tr>
                    <th>Hari</th>
                    <th>Jam</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Senin - Jumat</td>
                    <td>08.00 - 17.00 WIT</td>
                    <td>Operasional</td>
                  </tr>
                  <tr>
                    <td>Senin - Jumat</td>
                    <td>12.00 - 13.00 WIT</td>
                    <td>Istirahat</td>
                  </tr>
                  <tr>
                    <td>Sabtu</td>
                    <td>08.00 - 12.00 WIT</td>
                    <td>Operasional</td>
                  </tr>
                  <tr>
                    <td>Minggu</td>
                    <td>-</td>
                    <td>Tutup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="galeri-bengkel mt-5 justify-center text-center">
        <h2 style="font-size: 1.2em; font-weight: bold">Galeri Bengkel</h2>

        <button class="mt-5 btn btn-neutral mb-10">
          LIHAT LEBIH BANYAK FOTO
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
    </Layout>
  </div>
</template>

<script>
// import "lightgallery.js";
// import "lightgallery.js/dist/css/lightgallery.css";
export default {
  metaInfo: {
    title: "Beranda",
  },
  data() {
    return {
      imageList: [],
    };
  },
  // mounted() {
  //   const el = document.getElementById("lightgallery");
  //   window.lightGallery(el);
  // },
};
</script>

<style>
</style>
