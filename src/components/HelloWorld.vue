<template>
  <!-- eslint-disable -->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('/mockjs/users', 'get', {
  'users|1-10': [
    Mock.Random.first(),
  ]
});

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    axios.get('/mockjs/users')
      .then(console.log);
  }
}
</script>
