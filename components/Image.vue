<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <a
        :href="link"
        target="_blank"
      >
        <img
        class="h-48 w-full object-cover"
        :src="link"
        alt=""
      />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    }
  }
}
</script>
