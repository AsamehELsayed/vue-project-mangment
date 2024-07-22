<template>
    
    <div v-if="project" class="container w-1/4 bg-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <h1 class="text-5xl">{{ project.name }}</h1>
      <form class="flex flex-col mt-5">
        <input
  class="border-0 border-b-2 border-green-200 focus:border-emerald-400 focus:border-b-2 w-1/2 focus:ring-0"
  placeholder="Project name"
  type="text"
  name="ProjectName"
  v-model="project.name"
/>
<textarea
  class="resize-none border-0 border-b-2 border-green-200 focus:border-emerald-400 focus:border-b-2 w-full focus:ring-0 mt-2"
  placeholder="Project Details"
  v-model="project.details"

></textarea>
 <button @click="editProject" class="bg-green-400 mt-2">Edit</button>
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "EditForm",
  data() {
    return {
      project: null,
      Url:'http://localhost:3000/projects'
    };
  },
  props: {
    id: {
      required: true,
    },
  },
  mounted() {
   fetch(`http://localhost:3000/projects/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => this.project= data);
  },
  methods:{
    editProject(e){
      e.preventDefault()
      axios.put(`${this.Url}/${this.project.id}`, {
  name: this.project.name,
  details:this.project.details
})
  .then(response => {
    console.log('PUT request successful:', response);
    // Handle successful response here
  })
  .catch(error => {
    console.error('Error making PUT request:', error);
    // Handle error here
  });
    }
  }
};
</script>

<style>
</style>