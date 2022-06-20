<template>
  <CategoryImageTable :category_id="this.$route.query.id"/>
</template>

<script>
import CategoryImageTable from "@/components/image/ImageTable/CategoryImageTable";
export default {
  name: "CategoryView",
  components: {CategoryImageTable},
}
</script>

<style scoped>

</style>