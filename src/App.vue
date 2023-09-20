<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="12" md="5">
          <v-sheet class="">
            <UsersChatHistory />
          </v-sheet>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="7">
          <v-sheet class="m-0 p-0">
            <MessageScreen />
          </v-sheet>
        </v-col>
        <div v-if="appStore.isDrawerOpen">
          <UserDetailDrawer />
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup>
import UsersChatHistory from "@/components/UsersChatHistory.vue";
import MessageScreen from "@/components/MessageScreen.vue";
import UserDetailDrawer from "@/components/UserDetailDrawer.vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>

<style></style>
