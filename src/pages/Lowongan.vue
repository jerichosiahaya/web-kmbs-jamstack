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

      <div class="jobBoards flex flex-col m-5">
        <div class="form-control mb-4 lg:w-3/12">
          <input
            placeholder="Cari lowongan kerja..."
            class="input input-bordered"
            type="text"
          />
        </div>

        <div
          class="jobCard w-full border-black rounded-xl shadow-md mb-6"
          v-for="job in jobs"
          :key="job.id"
        >
          <div class="titleCard ml-7 mt-7 mr-7 mb-3 text-xl font-bold">
            <p>{{ job.title }}</p>
          </div>
          <div class="descCard ml-7 mr-7 mb-5 text-justify">
            <p>
              {{ truncateText(job.description) }}
            </p>
          </div>
          <div class="buttonCard ml-7 mr-7 mb-5">
            <g-link :to="'/lowongan/' + job.id">
              <button class="btn btn-success">
                Lamar
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
            </g-link>
          </div>
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
      jobs: {},
    };
  },
  methods: {
    truncateText(input) {
      if (input.length > 140) {
        return input.substring(0, 140) + "...";
      }
      return input;
    },
  },
  mounted() {
    axios
      .get("https://kombos.hasura.app/api/rest/jobs", {
        headers: {
          "x-hasura-admin-secret":
            "bgohHXc96EugK5ghUcFjEMk9XOJcZHGZFiqGmDGEG82pnmIFeJUijpebXf5s7PKF",
        },
      })
      .then((response) => (this.jobs = response.data.jobs))
      .catch((error) => console.log(error));
  },
};
</script>
