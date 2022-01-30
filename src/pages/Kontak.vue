<template>
  <div>
    <Layout>
      <div class="prose m-7">
        <h1>Kontak</h1>
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
