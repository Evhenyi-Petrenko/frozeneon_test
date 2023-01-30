<script setup name="SearchInput">
import jsdelivr from "@/service/api/jsdelivr";
import { ref, watch, computed } from "vue";

import { usePackageStore } from "@/stores/PackageStore";

const search = ref(null);
const timeDebounced = ref(null);
const store = usePackageStore();

watch(search, () => {
  if (!search.value) {
    return;
  }

  // cancel pending call
  clearTimeout(timeDebounced.value);

  // delay new call 500ms
  timeDebounced.value = setTimeout(() => {
    jsdelivr
      .getPackage(search.value)
      .then((res) => {
        store.setPackage(res);
      })
      .catch(() => {
        store.setPackage(null);
      });
  }, 500);
});
</script>
<template>
  <v-text-field placeholder="Search" v-model="search" class="search__input" />
</template>
<style>
.search__input .v-field--variant-filled .v-field__overlay {
  border-radius: 10px;
}
.search__input .v-field__outline {
  display: none;
}
</style>
