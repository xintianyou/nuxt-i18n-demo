<template>
  <div>
    <h2 class="subtitle">
      {{ $t('thisIs', { page }) }}
    </h2>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { page: params.id }
  }
}
</script>
