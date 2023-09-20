<template>
  <div class="messege-screen-wrapper">
    <!--UserFriendNavbar-->
    <div class="navbar-wrapper">
      <v-list-item
        @click.stop="appStore.toggleDrawer"
        lines="two"
        :prepend-avatar="user.avatar"
        :title="user.name"
        :subtitle="user.lastSeen"
      ></v-list-item>
      <v-spacer></v-spacer>
      <div class="action-group">
        <v-text-field
          v-model="searchText"
          clearable
          placeholder="Search any text here"
          prepend-icon="mdi-magnify"
          variant="solo"
          flat="true"
          height="10px"
          font-size="10px"
        />
        <v-icon>mdi-dots-vertical</v-icon>
      </div>
    </div>
    <!--MessagingArea-->
    <div class="message-area-wrapper">
      <div class="message-area">
        <div
          v-for="(message, index) in user.messages"
          :key="index"
          :class="getMessageClass(message.type)"
        >
          <p v-html="highlightText(message.content)"></p>
          <div class="msg-time">
            {{ message.time }}
            <v-icon v-if="message.status == 'seen'">mdi-check-all</v-icon>
            <v-icon v-if="message.status == 'send'">mdi-check</v-icon>
          </div>
        </div>
      </div>
      <!-- MessageInputBox -->
      <v-form class="message-input-box" @submit.prevent="sendMessage">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="message"
                :append-icon="message ? 'mdi-send' : 'mdi-microphone'"
                :prepend-icon="'mdi-plus'"
                variant="solo"
                clear-icon="mdi-close-circle"
                clearable
                placeholder="Type a message"
                type="text"
                hide-details="auto"
                @click:append="sendMessage"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { watch } from "vue";
const appStore = useAppStore();
const user = ref(
  appStore.usersData.find((user) => user.id === appStore.selectedUserID)
);
const message = ref("");
const searchText = ref("");

watch(
  () => appStore.selectedUserID,
  (newVal) => {
    user.value = appStore.usersData.find((user) => user.id === newVal);
  }
);

const getMessageClass = computed(() => {
  return (type) => {
    if (type === "date") {
      return "date-bubble";
    } else if (type === "user") {
      return "user-message-bubble";
    } else if (type === "friend") {
      return "friend-message-bubble";
    }
  };
});

const highlightText = (content) => {
  if (!searchText.value) {
    return content;
  }

  const searchRegex = new RegExp(searchText.value, "gi");

  const highlightedContent = content.replace(
    searchRegex,
    (match) => `<span class="highlight">${match}</span>`
  );

  return highlightedContent;
};

const sendMessage = () => {
  if (message.value) {
    const tempMsg = {
      type: "user",
      content: message.value,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "send",
    };

    appStore.usersData
      .find((user) => user.id === appStore.selectedUserID)
      .messages.push(tempMsg);

    appStore.setLastMessage(tempMsg);
    message.value = "";
  }
};
</script>

<style>
.message-screen-wrapper {
  display: flex;
  flex-direction: column;
}
.message-area-wrapper {
  max-height: 100vh;
  background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 92vh;
}
.message-area {
  display: flex;
  flex-direction: column;
  padding: 1.5em 3em;
  overflow-y: scroll;
}
.action-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: gray;
  gap: 2em;
  padding-top: 1.3em;
  margin-right: 1em;
  cursor: pointer;
  width: 300px;
}
.user-message-bubble {
  background-color: #d9fdd2;
  color: #333;
  border-radius: 10px;
  padding: 6px 15px;
  margin: 2px 0;
  align-self: flex-end;
  clear: both;
  display: flex;
}
.friend-message-bubble {
  background-color: #f1f0f0;
  color: #333;
  border-radius: 10px;
  padding: 6px 15px;
  margin: 2px 0;
  align-self: flex-start;
  clear: both;
  display: flex;
}
.msg-time {
  font-size: 0.7em;
  margin-left: 1em;
  align-self: flex-end;
  color: #9f9f9f;
}
.date-bubble {
  background-color: #f1f0f0;
  color: #333;
  border-radius: 10px;
  padding: 6px 15px;
  margin-bottom: 3em;
  align-self: center;
}
.message-input-box {
  background-color: #f1f0f0;
}
.highlight {
  background-color: yellow;
}
</style>
