<template>  
  <h1 class="title-project">Project furniture studio in VUE/CLI!</h1>
  <IndexComponent/>
  <BlogComponent/>
  <BlogDetailsComponent/>
  <ProjectComponent/>
</template>

<script>
import IndexComponent from './components/IndexComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import BlogDetailsComponent from './components/BlogDetailsComponent';
import ProjectComponent from './components/ProjectComponent';

  export default {
   components: {IndexComponent, BlogComponent, BlogDetailsComponent, ProjectComponent},
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
