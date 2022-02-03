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
            <p>Lowongan</p>
          </div>
        </div>
      </div>

      <div class="text-sm breadcrumbs ml-6 mb-5">
        <ul>
          <li>
            <g-link to="/">Home</g-link>
          </li>
          <li>
            <g-link to="/lowongan">Lowongan</g-link>
          </li>
          <li>{{ job.title }}</li>
        </ul>
      </div>

      <div class="jobDetail ml-6 mr-8">
        <div class="jobTitle text-2xl font-bold mb-5">
          <p>{{ job.title }}</p>
        </div>
        <div class="jobDesc mb-6">
          <p class="text-sm mb-3 font-bold">Deskripsi</p>
          <p class="text-justify">{{ job.description }}</p>
        </div>
        <div class="jobReqs">
          <p class="text-sm mb-3 font-bold">Persyaratan</p>
          <p class="text-justify" v-html="job.requirements"></p>
        </div>
      </div>

      <div class="applyJob border-black rounded-md shadow-md m-6">
        <p class="text-center text-xl font-bold font pt-3">ISI BIODATA</p>
        <div class="form-control m-3">
          <label class="label">
            <span class="label-text">Nama Lengkap</span>
          </label>
          <input
            type="text"
            placeholder="Masukkan Nama Lengkap"
            class="input input-bordered"
            v-model="applicants.name"
          />
        </div>

        <div class="form-control m-3">
          <label class="label">
            <span class="label-text">Alamat</span>
          </label>
          <textarea
            class="textarea h-24 textarea-bordered"
            placeholder="Masukkan Alamat"
            v-model="applicants.address"
          ></textarea>
        </div>

        <div class="form-control m-3">
          <label class="label">
            <span class="label-text">Umur</span>
          </label>
          <input
            type="number"
            placeholder="Masukkan Umur"
            class="input input-bordered"
            v-model="applicants.age"
          />
        </div>

        <div class="statusApplicants pt-3">
          <p class="label-text ml-4">Status</p>
          <div class="p-4 rounded-md border border-gray m-3">
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Menikah</span>
                <input
                  type="radio"
                  name="opt"
                  checked="checked"
                  class="radio"
                  value="Menikah"
                  v-model="applicants.relationship"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Belum Menikah</span>
                <input
                  type="radio"
                  name="opt"
                  checked="checked"
                  class="radio"
                  value="Belum Menikah"
                  v-model="applicants.relationship"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="graduateApplicants pt-3">
          <p class="label-text ml-4">Lulusan</p>
          <select
            class="select select-bordered border-gray w-full max-w-xs m-3"
            v-model="applicants.graduate"
          >
            <option value="S1">S1</option>
            <option value="D3/D4">D3/D4</option>
            <option value="SMK/Sederajat">SMK/Sederajat</option>
          </select>
        </div>

        <div class="form-control m-3">
          <label class="label">
            <span class="label-text">Telepon</span>
          </label>
          <input
            type="number"
            placeholder="Masukkan No. Hp"
            class="input input-bordered"
            v-model="applicants.phone"
          />
        </div>

        <div class="form-control m-3 pt-3">
          <label class="label">
            <span class="label-text">Upload CV (PDF)</span>
          </label>
          <input
            type="file"
            placeholder=""
            class=""
            @change="uploadFile($event)"
          />
        </div>

        <div class="buttonApply m-3 pt-8 pb-5">
          <button class="btn btn-primary w-full" @click="apply()">KIRIM</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Lowongan",
  },
  data() {
    return {
      job: null,
      applicants: {
        id_job: this.$route.params.id,
        relationship: "",
        graduate: "",
      },
      file: null,
      server: "",
    };
  },
  methods: {
    truncateText(input) {
      if (input.length > 140) {
        return input.substring(0, 140) + "...";
      }
      return input;
    },
    printArray() {
      console.log(this.applicants);
    },
    async getBestServer() {
      var bestServer = null;
      await axios
        .get("https://api.gofile.io/getServer")
        .then((response) => (this.server = response.data.data.server))
        .catch((error) => console.log(error));
      console.log(this.server);
    },
    setBestServer(data) {
      this.server = data;
    },
    async uploadFile(event) {
      await this.getBestServer();
      let formData = new FormData();
      formData.append("file", event.target.files[0]);
      axios
        .post("https://" + this.server + ".gofile.io/uploadFile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert("File berhasil diupload");
          this.applicants.curriculum_vitae = response.data.data.directLink;
        })
        .catch((error) => console.log(error));
    },
    async apply() {
      await axios
        .post("https://kombos.hasura.app/api/rest/apply/", this.applicants, {
          headers: {
            "x-hasura-admin-secret":
              "bgohHXc96EugK5ghUcFjEMk9XOJcZHGZFiqGmDGEG82pnmIFeJUijpebXf5s7PKF",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Lamaran berhasil terkirim");
          this.applicants = null;
          this.file = null;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("https://kombos.hasura.app/api/rest/jobs/" + this.$route.params.id, {
        headers: {
          "x-hasura-admin-secret":
            "bgohHXc96EugK5ghUcFjEMk9XOJcZHGZFiqGmDGEG82pnmIFeJUijpebXf5s7PKF",
        },
      })
      .then((response) => (this.job = response.data.jobs[0]))
      .catch((error) => console.log(error));
  },
};
</script>
