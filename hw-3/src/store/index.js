import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: [
      {
        id: 1,
        author: "Osmon",
        time: "Sep 18, 2021 15:16",
        title: "Cavtat, Croatia",
        body: "This year again Cavtat is in your top travel wishlist of the best destinations in Europe. Mix of sun, sea, gastronomy, nature, culture, relaxation, Cavtat is exactly what you need in 2021!",
        photo_path: "res/images/cavtat.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "cavtat",
        likes: 0,
      },
      {
        id: 2,
        author: "Colton",
        time: "Sep 21, 2021 16:43",
        title: "Florence, Italy",
        body: "It is probably one of the most beautiful cities in the world and certainly one of the best destinations in Europe. Florence had an influence all over the world and still attracts art lovers and lovers. The Florentine Renaissance really changed our way of thinking about man and the world around him. Humanism has its roots in Florence. Dante, Machiavelli, Galileo but also Botticelli, Leonardo da Vinci, Michelangelo, come from Florence.",
        photo_path: "res/images/florence.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "florence",
        likes: 0,
      },
      {
        id: 3,
        author: "Indira",
        time: "Sep 24, 2021 12:11",
        title: "Sibiu, Romania",
        body: "Sibiu is probably one of the most beautiful cities in Romania and one of the best destinations in Europe. Sibiu is located in the heart of the famous and beautiful historical province of Transylvania. It is a wonderful combination between history and the vibrant spirit of a modern European city.",
        photo_path: "res/images/sibiu.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "sibiu",
        likes: 0,
      },
      {
        id: 4,
        author: "Leia",
        time: "Sep 24, 2021 12:22",
        title: "Kefalonia Island, Greece",
        body: "Located south of the islands of Corfu and Lefkada, Kefalonia is famous for its sandy coves. Do not miss to visit Myrtos Beach and Antisamos beach. For nature lovers we recommend Melissani Lake, ranked among the best nature wonders in Greece.",
        photo_path: "res/images/kefalonia.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "kefalonia",
        likes: 0,
      },
      {
        id: 5,
        author: "Ganna",
        time: "Sep 25, 2021 12:32",
        title: "Ghent, Belgium",
        body: "You probably know Bruges and Brussels and may have heard about Antwerp. Ghent offers the best of each of them! It is as cosmopolitan and lively as Antwerp, as quiet as a walk along the canals in Bruges as  gastronomical  as Brussels. Ghent is one of the most beautiful destinations in Europe but also one of the most romantic. Dynamic and young, Ghent is also a perfect destination for a shopping or cultural city break with its many museums and events throughout the year.",
        photo_path: "res/images/ghent.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "ghent",
        likes: 0,
      },
      {
        id: 6,
        author: "Sarvesh",
        time: "Sep 27, 2021 15:16",
        title: "Cappadocia, Turkey",
        body: "This year treat yourself to memories for a lifetime. Treat yourself to the great outdoors. Discover one of Turkey's greatest tourist treasures: the Cappadocia.",
        photo_path: "res/images/cappadocia.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "cappadocia",
        likes: 0,
      },
      {
        id: 7,
        author: "Amata",
        time: "Sep 30, 2021 09:01",
        title: "Calpe, Spain",
        body: "Calpe is one of the best destinations for 2021. It is the perfect destination for a holiday in the sun combining beach, nature, shopping, outdoor sports, gastronomy, culture & history.",
        photo_path: "res/images/calpe.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "calpe",
        likes: 0,
      },
      {
        id: 8,
        author: "Zodwa",
        time: "Oct 01, 2021 16:16",
        title: "Cornwall, England",
        body: "Cornwall is perhaps the most beautiful County in England. Never thought of going to England for a beach holiday? Never heard of Cornwall then? Located in the extreme South West of England Cornwall is an incredible county with hundreds of beautiful sandy beaches.",
        photo_path: "res/images/cornwall.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "cornwall",
        likes: 0,
      },
      {
        id: 9,
        author: "Amaru",
        time: "Oct 10, 2021 19:55",
        title: "Lofoten Islands, Norway",
        body: "The Lofoten Islands are a dream destination for many travellers from all over the world. This archipelago offers one of the most beautiful landscapes in Europe.",
        photo_path: "res/images/lofoten.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "lofoten",
        likes: 0,
      },
      {
        id: 10,
        author: "Aafje",
        time: "Oct 13, 2021 13:13",
        title: "Dordogne Valley, France",
        body: "With its fascinating cultural heritage and beautifully preserved natural environment, the Dordogne Valley has it all. In the summer months, the clear waters of the Dordogne river provide lots of fun activities including swimming and canoeing. It is the only river in France to be part of the UNESCO World Network of Biosphere Reserves, a prestigious recognition for an environment of exceptional quality.",
        photo_path: "res/images/dordogne.jpg",
        author_path: "res/images/usericon.png",
        like_path: "res/images/likebutton.png",
        photo_alt: "dordogne",
        likes: 0,
      },
    ],
  },
  getters: {
    postList: (state) => {
      var postList = state.postList.map((post) => {
        return {
          id: post.id,
          author: post.author,
          time: post.time,
          title: post.title,
          body: post.body,
          photo_path: post.photo_path,
          author_path: post.author_path,
          like_path: post.like_path,
          photo_alt: post.photo_alt,
          likes: post.likes,
        };
      });
      return postList;
    },
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.postList = posts;
    },
    RESET_LIKES: (state) => {
      state.postList.forEach((post) => {
        post.likes = 0;
      });
    },
    INCREASE_LIKES: (state, data) => {
      state.postList[data.id - 1].likes++;
    },
  },
  actions: {
    /* AXIOS NOT ALLOWED
      getPosts() {
      axios
        .get("https://api.npoint.io/2299f90a9ca912d422f0")
        .then((response) => {
          commit("SET_POSTS", response.data);
        });
    }, */
    resetLikesAct: (act) => {
      setTimeout(() => {
        act.commit("RESET_LIKES");
      }, 500);
    },
    increaseLikesAct: (act, post) => {
      setTimeout(() => {
        act.commit("INCREASE_LIKES", post);
      }, 500);
    },
  },
  modules: {},
});
