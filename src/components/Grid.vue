<template lang="html">
  <div>
    <div class="columns is-multiline">
         <div class="column is-2" v-for="item in items.items">
            <figure class="image is-square">
              <img v-bind:src="item.images.low_resolution.url" alt="">
            </figure>
        </div>
    </div>
  </div>
</template>

<script>
var apiURL = 'https://gist.githubusercontent.com/pcperini/7ea274db58c7fdc1b3e900423aa4462a/raw/0f6c6def3a12ea967380e3125e06fce4725a34aa/instagram_belgasf.json';

export default {
  data () {
    return {
      items: []
    }
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      // GET /someUrl
      this.$http.get(apiURL).then((response) => {
        // success callback
        this.items = JSON.parse(response.data);
        function pageScroll() {
            window.scrollBy(0,1);
            scrolldelay = setTimeout(pageScroll,10);
        };
      }, (response) => {
        // error callback
      });
    },
    pageScroll() {
        console.log("Page scroll function triggered");
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
        console.log("^^^^^^^^^^^^^^");
    },
  }
};
</script>

<style lang="css">
</style>
