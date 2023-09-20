<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <v-col cols="12" xs="12" sm="12" md="5">
          <v-sheet class="">
            <div v-if="(isMobile && !appStore?.selectedUserID) || !isMobile">
              <UsersChatHistory />
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="7">
          <v-sheet class="m-0 p-0">
            <div
              v-if="
                (isMobile && appStore?.selectedUserID) ||
                (!isMobile && appStore?.selectedUserID)
              "
            >
              <MessageScreen />
            </div>
            <div v-else-if="!isMobile && !appStore?.selectedUserID">
              <img src="cover.png" alt="cover" class="cover-img" />
            </div>
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
import { ref } from "vue";
const appStore = useAppStore();
const isMobile = ref(window.innerWidth < 768);
</script>

<style>
.cover-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
