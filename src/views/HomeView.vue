<template>
  <div v-if="projects.length">
   <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-green-100">
            <tr>
                <th class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Completed</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <!-- Example row -->
            <tr v-for="project in projects" :key="project.id">
                <RouterLink class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap" :to="{name:'singleProject',params:{id:project.id}}">{{project.id}}</RouterLink>
                <td class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap">{{project.name}}</td>
                <td class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap">{{project.details}}</td>
                <td class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap space-x-4">
                    <input type="checkbox" v-model="project.compeleted" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                    <button class="bg-red-500 text-white  rounded font-xs p-1" @click="deleteProject(project.id)">
                      delete
                    </button>
                    <button class="bg-green-300  text-white rounded font-xs p-1">
                      edit
                    </button>
                </td>
            </tr>
          
        </tbody>
    </table>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
import { errorMessages } from 'vue/compiler-sfc';
import axios from 'axios'
export default {
 data() {
    return {
      projects: [] 
    };
  },
  mounted() {
    this.fetchProjects(); 
  },
  methods: {
    fetchProjects() {
      fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then(data => (this.projects = data))
        .catch(err => console.log(err.message));
    },
    deleteProject(id) {
      fetch(`http://localhost:3000/projects/${id}`, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            
            this.fetchProjects(); له
          } else {
            console.error('حدث خطأ أثناء حذف المشروع');
          }
        })
        .catch(error => {
          console.error('حدث خطأ أثناء حذف المشروع', error);
        });
    }
  }
};
</script>

<style>
</style>