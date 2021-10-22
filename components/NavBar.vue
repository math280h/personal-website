<template>
  <nav class="bg-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <h2
            class="text-gray-300 py-2 rounded-md text-sm font-bold uppercase cursor-pointer"
          >
            thias.dev
          </h2>
        </div>
        <div class="block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <nuxt-link to="/" class="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</nuxt-link>
            <nuxt-link to="/projects" class="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</nuxt-link>
            <nuxt-link to="/gallery" class="text-gray-300 hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>

</script>
