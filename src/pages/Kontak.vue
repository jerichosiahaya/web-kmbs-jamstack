<template>
  <div>
    <Layout>
      <div
        class="hero h-24 lg:h-44 mb-7"
        style="
          background-image: url('https://tsoimageprod.azureedge.net/sys-master-hybrismedia/h22/h48/8821325824030/Daftar%20Bengkel%20Mobil%20Toyota%20Auto2000%20di%20Liburan%20Akhir%20Tahun%202020.png');
        "
      >
        <div class="hero-overlay flex items-center h-24 lg:h-44 bg-opacity-90">
          <div class="text-white ml-9 text-2xl font-medium lg:text-4xl">
            <p>Kontak</p>
          </div>
        </div>
      </div>
      <div class="prose m-7">
        <p>Hubungi bengkel melalui nomor telepon ini:</p>
        <ul class="none">
          <li>
            <b> 081 </b>
            <a href="">(Klik link ini untuk langsung terhubung ke Whatsapp)</a>
          </li>
          <li><b> 081 </b></li>
          <li><b> 081 </b></li>
          <!-- ... -->
        </ul>
        <p>Atau bisa juga melalui kontak formulir di bawah ini:</p>
        <form action="https://formspree.io/f/myyokzey" method="POST">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              placeholder="Email"
              class="input input-bordered"
              type="email"
              name="email"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nama</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
              name="name"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Pesan</span>
            </label>
            <textarea
              name="pesan"
              class="textarea h-24 textarea-bordered"
              placeholder="Message"
            ></textarea>
          </div>
          <!-- your other form fields go here -->
          <button class="mt-5 btn btn-primary mb-10" type="submit">
            KIRIM
          </button>
        </form>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Kontak",
  },
  data() {
    return {
      valTest: "",
    };
  },
};
</script>
