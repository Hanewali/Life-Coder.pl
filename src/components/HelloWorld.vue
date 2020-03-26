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
      const https = require('https');

      // const { CLOUDFLARE_API_KEY: apikey } = process.env;
      
      var apikey = '9zQG3k2mhSv6FTazF5qMXWpMQNrO-xvJjkxvRC77'
      const data = JSON.stringify({
        'purge_everything': true
      });

      const options = {
        hostname: 'api.cloudflare.com/client/v4/zones/8248231716cb84721a509111e1c2c6b3/purge_cache',
        port: 443,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          'X-Auth-Email' : 'jakub@rumpel.pl',
          'X-Auth-Key' : apikey
        }
      };

      const req = https.request(options, res => {
        console.log('statusCode: ${res.statusCode}')

        res.on('data', d => {
          console.log(d);
        })
      })

      req.on('error', error => {
        console.log(error);
      })

      req.write(data);
      req.end();
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
