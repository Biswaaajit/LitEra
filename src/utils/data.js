const data = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: ["Fiction", "Classic"],
    rating: 5,
    description:
      "A classic novel depicting racial injustice in the American South. To Kill a Mockingbird by Harper Lee centres on Atticus Finch's attempts to prove the innocence of Tom Robinson, a black man who has been wrongly accused of raping a white woman in 1930s Alabama.",
    image:
      "https://media.glamour.com/photos/56e1f3c462b398fa64cbd30b/master/w_1600%2Cc_limit/entertainment-2016-02-17-main.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: ["Dystopian", "Science Fiction"],
    description: "A dystopian novel portraying a totalitarian society.",
    rating: 4,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    rating: 3,
    genre: ["Classic", "Romance"],
    description:
      "A classic novel exploring themes of love, marriage, and social norms.",
    image:
      "https://digitalausten.org/sites/default/files/styles/large/public/media/image/2023-02/book-cover.jpg?itok=D9bfCtkk",
  },

  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    rating: 5,
    genre: ["Fiction", "Adventure"],
    description:
      "The epic tale of Captain Ahab's obsession with the white whale.",
    image: "https://m.media-amazon.com/images/I/71d5wo+-MuL.jpg",
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    rating: 5,
    year: 1954,
    genre: ["Fantasy", "Adventure"],
    description:
      "An epic fantasy saga about the quest to destroy the One Ring.",
    image: "https://m.media-amazon.com/images/I/7125+5E40JL.jpg",
  },

  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: ["Fantasy", "Adventure"],
    rating: 5,
    description:
      "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
    image:
      "https://m.media-amazon.com/images/I/91ZX8zNpwZL._UF1000,1000_QL80_.jpg",
  },

  {
    id: 13,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: 1880,
    genre: ["Classic", "Philosophical Fiction"],
    rating: 4,
    description:
      "A complex novel exploring themes of spirituality, morality, and human nature.",
    image:
      "https://cdn.kobo.com/book-images/1208ebc8-3b5d-40ef-ba2d-b5121520d7e2/1200/1200/False/the-brothers-karamazov-135.jpg",
  },
  {
    id: 14,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
    genre: ["Classic", "Psychological Fiction"],
    rating: 3,
    description:
      "A psychological thriller revolving around guilt, conscience, and redemption.",
    image:
      "https://i.pinimg.com/736x/ad/86/e7/ad86e700fb166283660a4fd3a05dc166.jpg",
  },

  {
    id: 16,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    genre: ["Dystopian", "Science Fiction"],
    rating: 4,
    description:
      "A dystopian vision of a future society obsessed with pleasure and conformity.",
    image:
      "https://i.pinimg.com/736x/4d/e4/46/4de4461b2faf2356cfc3954c978f9485.jpg",
  },

  {
    id: 20,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    genre: ["Adventure", "Satire"],
    rating: 2,
    description:
      "A satirical novel following Huck Finn's journey down the Mississippi River.",
    image:
      "https://i.pinimg.com/736x/73/30/1b/73301ba2c2fde88a3e354d36532f70c4.jpg",
  },

  {
    id: 22,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: ["Fantasy", "Adventure"],
    rating: 3,
    description:
      "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    image:
      "https://i.pinimg.com/736x/77/9d/e2/779de2f0aadf849e9fc722c086983c36.jpg",
  },

  {
    id: 24,
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    rating: 4,
    genre: ["Gothic", "Science Fiction"],
    description:
      "A novel about the creation of a monster and the consequences of playing god.",
    image:
      "https://i.pinimg.com/736x/6d/df/b4/6ddfb43335137ffec54449ed6019b467.jpg",
  },
  {
    id: 25,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: 1865,
    genre: ["Fantasy", "Children's Literature"],
    rating: 5,
    description:
      "A whimsical tale about a girl named Alice who falls into a magical world.",
    image:
      "https://i.pinimg.com/736x/81/77/5d/81775d2e4c35bccf4a4255fb7e2a8939.jpg",
  },

  {
    id: 34,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    year: 1950,
    genre: ["Fantasy", "Children's Literature"],
    rating: 4,
    description:
      "A series of fantasy novels set in the magical land of Narnia.",
    image:
      "https://i.pinimg.com/736x/5f/37/4c/5f374cee2ddfcb189c5245c871361bb1.jpg",
  },

  {
    id: 41,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    year: 1911,
    genre: ["Children's Literature", "Classic"],
    rating: 3,
    description:
      "A classic children's novel about a young girl who discovers a hidden garden.",
    image:
      "https://i.pinimg.com/736x/ae/ec/64/aeec64576e7b01783ea17719dfabcc59.jpg",
  },

  {
    id: 45,
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    year: 1908,
    genre: ["Children's Literature", "Fantasy"],
    rating: 3,
    description:
      "A children's novel about the adventures of anthropomorphic animals.",
    image:
      "https://i.pinimg.com/736x/b2/c4/7a/b2c47a5225f25535667183d30795a65b.jpg",
  },

  {
    id: 47,
    title: "The Call of the Wild",
    author: "Jack London",
    year: 1903,
    genre: ["Adventure", "Nature"],
    rating: 5,
    description:
      "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
    image:
      "https://i.pinimg.com/736x/4a/45/da/4a45da0c8122a3e9ce52e02745bb5269.jpg",
  },
];
export default data;
