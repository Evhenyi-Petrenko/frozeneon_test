<script setup name="TablePackage">
import { ref, computed } from "vue";

import { usePackageStore } from "@/stores/PackageStore";

const store = usePackageStore();
const packageInfoShort = computed(() => store.packageInfoShort);
const packageInfoFull = computed(() => store.packageInfoFull);
const dialog = ref(false);
</script>
<template>
  <v-row
    v-for="(value, key) in packageInfoShort"
    :key="JSON.stringify(key)"
    class="d-flex table__short"
  >
    <v-col class="text-capitalize" cols="2"
      ><h3>{{ key }}:</h3></v-col
    >
    <v-col v-if="typeof value !== 'object' && value !== null" cols="10">
      <p>{{ value }}</p>
    </v-col>
    <v-col v-else-if="key == 'maintainers'" cols="10" class="d-flex">
      <template v-for="valueArr in value" :key="JSON.stringify(value)">
        <div v-for="(valueMain, key) in valueArr" :key="valueMain" class="mr-3">
          <h3 class="text-capitalize">{{ key }}</h3>
          <p>{{ valueMain }}</p>
        </div>
      </template>
    </v-col>
    <v-col v-else cols="10">
      <p v-for="(valueObject, key) in value" :key="JSON.stringify(key)">
        {{ valueObject }}
      </p>
    </v-col>
  </v-row>
  <div class="d-flex justify-center mt-2">
    <v-btn
      v-if="Object.keys(packageInfoFull).length !== 0"
      @click="dialog = true"
      >Extended</v-btn
    >
  </div>

  <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="600">
    <v-card>
      <v-toolbar>{{ packageInfoShort.name }}</v-toolbar>
      <v-card-text>
        <v-row
          v-for="(value, key) in packageInfoFull"
          :key="JSON.stringify(key)"
          class="d-flex table__short"
        >
          <v-col class="text-capitalize" cols="3"
            ><h3>{{ key }}:</h3></v-col
          >
          <v-col v-if="typeof value !== 'object' && value !== null" cols="9">
            <p>{{ value }}</p>
          </v-col>
          <v-col v-else-if="key == 'users'" cols="9">
            <p v-for="(valueObject, key) in value" :key="JSON.stringify(key)">
              {{ key }}
            </p>
          </v-col>
          <v-col v-else cols="9">
            <p v-for="(valueObject, key) in value" :key="JSON.stringify(key)">
              {{ valueObject }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<style>
.table__short h3 {
  color: #52647c;
  font-size: 14px;
  font-weight: 600;
}
.table__short p {
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: #807e7e;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-toolbar__content {
  color: #52647c;
  font-size: 18px;
  justify-content: center;
  text-transform: capitalize;
}
</style>
