<template>
  <div class="about">
    <h1>This is a page about Atlanta</h1>
    <button v-on:click="handleClick()">Call Google API</button>
    {{ text }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: 'No Info',
    };
  },
  methods: {
    handleClick() {
      axios
        .get('https://www.googleapis.com/civicinfo/v2/elections', { params: { key: '<API_KEY>' } })
        .then((response) => {
          this.text = response;
        });
    },
  },
};
</script>
