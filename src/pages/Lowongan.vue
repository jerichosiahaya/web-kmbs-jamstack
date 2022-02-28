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

        <div class="" v-if="isLoading == true">
          <p>Loading in progress</p>
        </div>

        <div
          v-else
          class="jobCard w-full border-black rounded-xl shadow-md mb-6"
          v-for="job in jobs"
          :key="job.id"
        >
          <job-card 
          :jobTitle= "job.title"
          :jobDesc= "job.description"
          :jobId = "job.id"
          />
        </div>

      </div>
      
    </Layout>
  </div>
</template>

<script>
import axios from "axios";
import JobCard from '../components/jobCard.vue';
export default {
  metaInfo: {
    title: "Lowongan",
  },
  components : {
    JobCard
  },
  data() {
    return {
      isLoading: true,
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
    async retrieveJobs() {
      try {
        const response = await axios.get("https://kombos.hasura.app/api/rest/jobs", { headers: { "x-hasura-admin-secret": "bgohHXc96EugK5ghUcFjEMk9XOJcZHGZFiqGmDGEG82pnmIFeJUijpebXf5s7PKF",}});
        this.jobs = response.data.jobs;
        this.isLoading = false;
      } 
      catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.retrieveJobs();
  },
};
</script>
