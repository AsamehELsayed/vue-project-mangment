<template>
  <div class="container p-6">
    <div
      v-if="project"
      class="flex items-center justify-between py-3 border-b border-gray-200"
    >
      <div>
        <h3 class="text-lg font-semibold">{{ project.name }}</h3>
        <p class="text-gray-600">{{ project.details }}</p>
      </div>
      <div>
        <label class="inline-flex items-center">
          <div v-if="project.completed">
          <span class="ml-2 text-gray-700">Done</span>
          </div>
          <div v-else>
                      <span class="ml-2 text-gray-700">not yet</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: null,
    };
  },
  name: "SingleProject",
  props: {
    id: {
      required: true,
    },
  },
  mounted() {
    fetch(`http://localhost:3000/projects/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => (this.project = data));
  },
};
</script>

<style>
</style>