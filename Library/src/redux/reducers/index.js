const INITIAL_STATE = {
  booksArray: [
    {
      id: 1,
      name: "Book 1",
      author: "Author 1",
      genre: "Classic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 2,
      name: "Book 2",
      author: "Author 2",
      genre: "Detective",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 3,
      name: "Book 3",
      author: "Author 3",
      genre: "History",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 4,
      name: "Book 4",
      author: "Author 4",
      genre: "Story",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 2,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 5,
      name: "Book 5",
      author: "Author 5",
      genre: "Fantastic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 6,
      name: "Book 6",
      author: "Author 6",
      genre: "Classic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 7,
      name: "Book 7",
      author: "Author 7",
      genre: "Detective",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 8,
      name: "Book 8",
      author: "Author 8",
      genre: "History",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 9,
      name: "Book 9",
      author: "Author 9",
      genre: "Story",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 10,
      name: "Book 10",
      author: "Author 10",
      genre: "Fantastic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 11,
      name: "Book 11",
      author: "Author 11",
      genre: "Classic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 12,
      name: "Book 12",
      author: "Author 12",
      genre: "Detective",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
  ],
};

export const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "APPEND_BOOK":
      return {
        ...state,
        booksArray: [...state.booksArray, action.payload.data],
      };
    case "DELETE_BOOK":
      return {
        ...state,
        booksArray: state.booksArray.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "UPDATE_NAME": {
      const index = action.payload.data.id;
      const newArray = [...state.booksArray];
      newArray[index].name = action.payload.data.name;
      newArray[index].author = action.payload.data.author;
      newArray[index].genre = action.payload.data.genre;
      newArray[index].publishedYear = action.payload.data.publishedYear;
      newArray[index].text = action.payload.data.text;
      return {
        ...state,
        booksArray: newArray,
      };
    }
    case "UPDATE_AVG_RATING": {
      const index = action.payload.data.id;
      const newArray = [...state.booksArray];
      newArray[index].avgRating = action.payload.data.avgRating;
      return {
        ...state,
        booksArray: newArray,
      };
    }
    case "ADD_REVIEW": {
      console.log(action.payload.data);
      const index = action.payload.data.id;
      const newArray = [...state.booksArray];
      newArray[index].reviews.push({
        author: action.payload.data.author,
        text: action.payload.data.text,
      });
    }
    case "ADD_RATE": {
      console.log(action.payload.data);
      const index = action.payload.data.id;
      const newArray = [...state.booksArray];
      newArray[index].grades.push(action.payload.data.rating);
    }
    default:
      return state;
  }
};
