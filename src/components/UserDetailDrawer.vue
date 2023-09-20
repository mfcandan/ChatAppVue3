<template>
  <v-sheet>
    <!--DrawerBar-->

    <v-navigation-drawer permanent location="right" width="450">
      <div class="user-info-wrapper">
        <div class="user-info-bar-wrapper">
          <v-icon @click.stop="appStore.isDrawerOpen = false">mdi-close</v-icon>
          <p>Contact Info</p>
        </div>
        <div class="about-wrapper">
          <div class="card-box contact-detail-area">
            <v-avatar
              color="surface-variant"
              :image="selectedUser.avatar"
              size="50%"
            ></v-avatar>
            <h1 class="mt-4">{{ selectedUser.name }}</h1>
            <p>{{ selectedUser.phone }}</p>
          </div>
          <div class="card-box contact-about">
            <div>
              <h4>About</h4>
              <p>{{ selectedUser.about }}</p>
            </div>
          </div>
          <div class="card-box contact-media">
            <h4>Media, links and docs</h4>
            <v-row class="mt-2">
              <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2 rounded-lg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </div>
          <div class="card-box">
            <v-list density="compact">
              <v-list-item class="danger">
                <v-icon>mdi-cancel </v-icon>
                <span class="ml-2">Block User</span>
              </v-list-item>
              <v-list-item class="danger">
                <v-icon>mdi-thumb-down </v-icon>
                <span class="ml-2">Report User</span>
              </v-list-item>
              <v-list-item class="danger">
                <v-icon>mdi-delete </v-icon>
                <span class="ml-2">Delete User</span>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { watch } from "vue";
import { ref } from "vue";
const appStore = useAppStore();

const selectedUser = ref(
  appStore.usersData.find((user) => user.id === appStore?.selectedUserID)
);

watch(
  () => appStore?.selectedUserID,
  (newVal) => {
    selectedUser.value = appStore.usersData.find((user) => user.id === newVal);
  }
);
</script>

<style>
.user-info-bar-wrapper {
  overflow: hidden;
  height: 100vh;
}
.user-info-bar-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f0f2f5;
  height: 8vh;
  padding: 0 1em;
  gap: 1em;
  /* overflow: hidden; */
}
.card-box {
  background-color: white;
  box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.1);
  padding: 2em 2em;
  margin-bottom: 1em;
}
.about-wrapper {
  background-color: #f0f2f5;
  .contact-detail-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact-about {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .danger {
    color: red;
  }
}
</style>
