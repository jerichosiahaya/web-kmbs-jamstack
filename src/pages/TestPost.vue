<template>
  <div>
    <div class="prose m-7">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Input 1</span>
        </label>
        <input
          v-model="insertData.input1"
          type="text"
          placeholder="Input 1"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Input 2</span>
        </label>
        <input
          v-model="insertData.input2"
          type="text"
          placeholder="Input 2"
          class="input input-bordered"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Input 3</span>
        </label>
        <input
          v-model="insertData.input3"
          type="text"
          placeholder="Input 3"
          class="input input-bordered"
        />
      </div>
      <button class="btn btn-accent mt-3" @click="testInsert()">accent</button>
      <p>{{ insertData.input1 }}</p>
      <p>{{ insertData.input2 }}</p>
      <p>{{ insertData.input3 }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "TestPost",
  },
  data() {
    return {
      insertData: {},
    };
  },
  methods: {
    testInsert() {
      axios
        .post(
          "https://valued-stork-95.hasura.app/api/rest/post-test",
          this.insertData,
          {
            headers: {
              "x-hasura-admin-secret":
                "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
            },
          }
        )
        .then((response) => console.log("Success"))
        .catch((error) => console.log(error.response.data));
    },
  },
  mounted() {
    axios
      .get("https://valued-stork-95.hasura.app/api/rest/test-insert", {
        headers: {
          "x-hasura-admin-secret":
            "XTHiyqU7iAZzrs4yWYoSDa8w2IvAypLufr5aoBkCYJXOGYhwmOkLi45oMaEGHwRF",
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
