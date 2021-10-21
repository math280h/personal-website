<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-indigo-600">
          <a href="#" class="hover:underline"> {{ license }} </a>
        </p>
        <a :href="link" target="_blank" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ description }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    license: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>