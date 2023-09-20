import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      isDrawerOpen: false,
      selectedUserID: null,
      usersData: [
        {
          id: 1000,
          name: "Jane Smith",
          phone: "555-555-5555",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          about: "Hey there! I am using Vue3ChatApp.",
          lastSeen: "Today, 18:40",
          lastMessage: {
            type: "friend",
            content: "Görüşmek üzere 👋🏻 ",
            time: "18:40",
            status: "seen",
          },
          messages: [
            {
              type: "date",
              content: "TODAY",
            },
            {
              type: "user",
              content: "Selam",
              time: "18:16",
              status: "seen",
            },
            {
              type: "friend",
              content: "Merhaba, nasılsın?",
              time: "18:18",
              status: "seen",
            },
            {
              type: "user",
              content: "İyiyim, sen?",
              time: "18:20",
              status: "seen",
            },
            {
              type: "friend",
              content: "Ben de iyiyim.",
              time: "18:22",
              status: "seen",
            },
            {
              type: "user",
              content: "Bugün için planın var mı",
              time: "18:34",
              status: "seen",
            },
            {
              type: "friend",
              content: "Hayır yok. Hadi sushi yiyelim!",
              time: "18:36",
              status: "seen",
            },
            {
              type: "user",
              content: "Anlaştık! 8'de oradayım",
              time: "18:40",
              status: "send",
            },
            {
              type: "user",
              content: "Görüşmek üzereeee 👋🏻 ",
              time: "18:40",
              status: "send",
            },
          ],
        },
        {
          id: 2000,
          name: "John Doe",
          phone: "123-123-1234",
          avatar: "https://randomuser.me/api/portraits/men/12.jpg",
          about: "Hello! I'm another user.",
          lastSeen: "Today, 19:00",
          lastMessage: {
            type: "friend",
            content: "Merhaba!",
            time: "19:00",
            status: "seen",
          },
          messages: [
            {
              type: "date",
              content: "TODAY",
            },
            {
              type: "user",
              content: "Merhaba!",
              time: "19:00",
              status: "seen",
            },
            {
              type: "friend",
              content: "Merhaba, nasılsın?",
              time: "19:05",
              status: "seen",
            },
            {
              type: "user",
              content: "İyiyim, teşekkür ederim. Siz?",
              time: "19:10",
              status: "seen",
            },
            {
              type: "friend",
              content: "Ben de iyiyim.",
              time: "19:15",
              status: "seen",
            },
            {
              type: "user",
              content: "Size ne getirebilirim?",
              time: "19:20",
              status: "seen",
            },
            {
              type: "friend",
              content: "Bana bir kahve getirebilir misiniz?",
              time: "19:25",
              status: "seen",
            },
          ],
        },
        {
          id: 3000,
          name: "Alice Johnson",
          phone: "555-555-5557",
          avatar: "https://randomuser.me/api/portraits/women/9.jpg",
          about: "Hello! I'm Alice.",
          lastSeen: "Today, 20:00",
          lastMessage: {
            type: "friend",
            content: "Merhaba Alice!",
            time: "20:00",
            status: "seen",
          },
          messages: [
            {
              type: "date",
              content: "TODAY",
            },
            {
              type: "user",
              content: "Heyy Alice Naber!",
              time: "20:00",
              status: "seen",
            },
            {
              type: "friend",
              content: "İyiyim peki sen?",
              time: "20:05",
              status: "seen",
            },
            {
              type: "user",
              content: "Ben de iyiyim.",
              time: "20:10",
              status: "seen",
            },
            {
              type: "friend",
              content: "Ödevini yapamıyor musun yoksa?",
              time: "20:15",
              status: "seen",
            },
            {
              type: "user",
              content: "Evet 😄 Bana bu konuda yardımcı olabilir misin?",
              time: "20:20",
              status: "seen",
            },
            {
              type: "friend",
              content: "Tabii ki, elimden geleni yaparım. 🏄🏻‍♂️",
              time: "20:25",
              status: "seen",
            },
          ],
        },
        {
          id: 4000,
          name: "Michael Jackson",
          phone: "777-777-7777",
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
          about: "Hello! I'm Michael.",
          lastSeen: "Today, 21:00",
          lastMessage: {
            type: "friend",
            content: "Merhaba Michael!",
            time: "21:00",
            status: "seen",
          },
          messages: [
            {
              type: "date",
              content: "TODAY",
            },
            {
              type: "user",
              content: "Merhaba Michael!",
              time: "21:00",
              status: "seen",
            },
            {
              type: "friend",
              content: "Merhaba, nasılsın?",
              time: "21:05",
              status: "seen",
            },
            {
              type: "user",
              content: "Ben de iyiyim, sen şarkıcı mısın?",
              time: "21:10",
              status: "seen",
            },
            {
              type: "friend",
              content: "Aaa hayır 😅 Sadece isim benzerliği",
              time: "21:15",
              status: "seen",
            },
            {
              type: "user",
              content: "Hahaha 😂😂😂 Anladım",
              time: "21:20",
              status: "seen",
            },
            {
              type: "friend",
              content: "Ama isterseniz şarkı söyleyebilirim. 🎤🎧",
              time: "21:25",
              status: "seen",
            },
          ],
        },
        {
          id: 5000,
          name: "Maria Garcia",
          phone: "333-333-333-33",
          avatar: "https://randomuser.me/api/portraits/women/11.jpg",
          about: "Hello! I'm Maria.",
          lastSeen: "Today, 22:00",
          lastMessage: {
            type: "friend",
            content: "Merhaba Maria!",
            time: "22:00",
            status: "seen",
          },
          messages: [
            {
              type: "date",
              content: "TODAY",
            },
            {
              type: "user",
              content: "Merhaba Maria!",
              time: "22:00",
              status: "seen",
            },
            {
              type: "friend",
              content: "Merhaba, nasılsın?",
              time: "22:05",
              status: "seen",
            },
            {
              type: "user",
              content:
                "İyiyim, teşekkür ederim. Sence bugün yağmur yağar mı? 🌧",
              time: "22:10",
              status: "seen",
            },
            {
              type: "friend",
              content: "Sanmıyorum. Haberlerde öyle bir şey göremedim.",
              time: "22:15",
              status: "seen",
            },
            {
              type: "user",
              content: "Umarım haklısındır. 🙏🏻",
              time: "22:20",
              status: "seen",
            },
            {
              type: "friend",
              content: "Hahahaha 😂😂😂 Yoksa ıslanacaksın",
              time: "22:25",
              status: "seen",
            },
          ],
        },
      ],
    };
  },
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    selectUser(userID) {
      this.selectedUserID = userID;
    },
    setLastMessage(message) {
      this.usersData.forEach((user) => {
        if (user.id === this.selectedUserID) {
          user.lastMessage = message;
        }
      });
    },
  },
});
