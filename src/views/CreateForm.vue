<template>
 
 <div  class="container w-1/4 bg-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <form class="flex flex-col mt-5">
        <input
  class="border-0 border-b-2 border-green-200 focus:border-emerald-400 focus:border-b-2 w-1/2 focus:ring-0"
  placeholder="Project name"
  type="text"
  name="ProjectName"
  v-model="name"
/>
<textarea
  class="resize-none border-0 border-b-2 border-green-200 focus:border-emerald-400 focus:border-b-2 w-full focus:ring-0 mt-2"
  placeholder="Project Details"
  v-model="details"

></textarea>
 <button @click="editProject" class="bg-green-400 mt-2">Create</button>
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            projectsLength:0,
            url:'http://localhost:3000/projects/'
        }
    },
mounted(){
 
},   
name:"Create",
methods:{
    editProject(e){
      e.preventDefault()
      axios.post(`${this.url}`, {
        completed:false,      
  name: this.name,
  details:this.details,
  id:this.projectsLength

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
}
</script>

<style>

</style>