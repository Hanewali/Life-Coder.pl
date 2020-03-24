<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a advice and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button class="btn btn-primary" @click="requ">Make a request!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    requ(){
      console.log('dupa');
      const request = require('request');

      const options = {
        url: 'https://api.cloudflare.com/client/v4/zones/8248231716cb84721a509111e1c2c6b3/purge_cache',
        method: 'POST',
        headers: {
          'X-Auth-Email' : 'jakub@rumpel.pl',
          'X-Auth-Key' : '9zQG3k2mhSv6FTazF5qMXWpMQNrO-xvJjkxvRC77'
        },
        body: {
          'purge_everything': true
        }

      }

      request(options, 
      function(error, response, body){
        console.log(error);
        console.log(response);
        console.log(body);
        // if(!error && response.statusCode == 200){
        // 	console.log('Succesfuly cleared cloudFlare cache');
        // 	callback(null, {statusCode: 200});
        // } else {
        // 	console.log('There was an error during cloudFlare cache clearing');
        // 	callback(error, { statusCode: response.statusCode, body: body});
        // }
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
