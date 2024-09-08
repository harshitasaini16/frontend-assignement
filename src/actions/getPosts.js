//api to get all the posts
export const getPosts = () => {
  return {
    posts: [
      {
        userName: "Theresa Webb",
        image: "/user1.svg",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        comments: 24,
        time: 5,
        emoji: "👋",
      },
      {
        userName: "Marvin McKinney",
        image: "/user2.svg",
        content:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        isEdited: true,
        time: 8,
        emoji: "😞",
      },
    ],
  };
};
