<template>  
  <h1 class="title-project">Project furniture studio in VUE/CLI!</h1>
  <IndexComponent/>
  <BlogComponent/>
  <BlogDetailsComponent/>
</template>

<script>
import IndexComponent from './components/IndexComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent';

  export default {
   components: {IndexComponent, BlogComponent, BlogDetailsComponent},
  };
</script>


<style lang="scss">

#app {
  .title-project {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
}
</style>
