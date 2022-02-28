<template>
  <div class="">
      <div class="titleCard ml-7 mt-7 mr-7 mb-3 text-xl font-bold">
            <p>{{ jobTitle }}</p>
          </div>
          <div class="descCard ml-7 mr-7 mb-5 text-justify">
            <p>
              {{ truncateText(jobDesc) }}
            </p>
          </div>
          <div class="buttonCard ml-7 mr-7 mb-5">
            <g-link :to="'/lowongan/' + jobId">
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
</template>

<script>
export default {
    props: ['jobTitle', 'jobDesc', 'jobId'],
    methods: {
        truncateText(input) {
            if (input.length > 140) {
                return input.substring(0, 140) + "...";
            }
            return input;
        },
    }
}
</script>

<style>

</style>