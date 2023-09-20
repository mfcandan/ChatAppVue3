<template>
  <div class="container">
    <div class="navbar-wrapper">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
      ></v-list-item>
      <v-spacer></v-spacer>
      <div class="button-group">
        <v-icon>mdi-message</v-icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </div>
    </div>
    <div class="user-card-list">
      <div v-for="user in appStore.usersData" :key="user.id">
        <div
          class="user-card"
          :class="appStore.selectedUserID === user.id ? 'selected' : ''"
          @click.stop="appStore.selectUser(user.id)"
        >
          <v-list-item
            lines="two"
            :prepend-avatar="user.avatar"
            :title="user.name"
            :subtitle="user.messages[user.messages.length - 1].content"
          ></v-list-item>
          <span class="time">{{
            user.messages[user.messages.length - 1].time
          }}</span>
        </div>
        <v-divider inset />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
</script>

<style>
.container {
  height: 100vh;
}
.navbar-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f2f5;
  height: 8vh;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 0.25em;
}
.button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: gray;
  gap: 2em;
  margin-right: 1em;
  cursor: pointer;
}
.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em 0.5em 0;
  cursor: pointer;
}
.selected {
  background-color: #eff2f5;
}
</style>
