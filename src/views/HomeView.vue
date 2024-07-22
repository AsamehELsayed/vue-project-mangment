<template>
  <div v-if="projects.length" class="">
    <table class="min-w-full bg-white border border-gray-200">
      <thead class="bg-green-100">
        <tr>
          <th
            class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Details
          </th>
          <th
            class="border-b border-gray-200 px-4 py-2 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >
            Completed
          </th>
        </tr>
      </thead>

      <draggable
        v-model="projects"
        group="projects"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
      >
        <template #item="{ project }">
          <RouterLink
            class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap"
            :to="{ name: 'singleProject', params: { id: project.id } }"
            >{{ project.id }}</RouterLink
          >
          <td class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap">
            {{ project.name }}
          </td>
          <td class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap">
            {{ project.details }}
          </td>
          <td
            class="border-b border-gray-200 px-4 py-2 whitespace-no-wrap space-x-4"
          >
            <input
              type="checkbox"
              v-model="project.completed"
              @click="toggleProjectStatus(project.id, project.completed)"
              class="form-checkbox h-4 w-4 text-green-300"
            />
            <button
              class="bg-red-500 text-white rounded font-xs p-1"
              @click="deleteProject(project.id)"
            >
              delete
            </button>
            <RouterLink
              class="bg-green-300 text-white rounded font-xs p-1"
              :to="{ name: 'edit', params: { id: project.id } }"
            >
              edit
            </RouterLink>
          </td>
        </template>
      </draggable>

      <div>
        <EditForm :project="project"></EditForm>
      </div>
    </table>
  </div>
  <button @click="showD">wwww</button>
</template>

<script>
import axios from "axios";
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      EditModel: false,
      projects:[],
      project: null,
      apiUrl: "http://localhost:3000/projects",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects/")
      .then((res) => res.json())
      .then((data) =>{
      console.log(data);
      this.projects=data;
      

      }
      
    
    
    )
  },
  methods: {
    showD(){
      console.log(this.projects)
    },
    deleteProject(id) {
      fetch(`${this.apiUrl}/${id}`, { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            this.fetchProjects();
            له;
          } else {
            console.error("حدث خطأ أثناء حذف المشروع");
          }
        })
        .catch((error) => {
          console.error("حدث خطأ أثناء حذف المشروع", error);
        });
    },
    toggleProjectStatus(id, isCompeleted) {
      if (isCompeleted) {
        axios.patch(`${this.apiUrl}/${id}`, {
          completed: false,
        });
      } else {
        axios.patch(`${this.apiUrl}/${id}`, {
          completed: true,
        });
      }

      fetch(this.apiUrl)
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
</style>