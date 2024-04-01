const products = [
    {
      
      name: 'Rich Dad Poor Dad',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY466_.jpg',
      description:
        'While so much in our world is changing a high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives.',
      author: ' Robert T. Kiyosaki ',
      category: 'Personal Development',
      price: 89.99,
      countInStock: 3,
      rating: 4.5,
      numReviews: 4,
    },
    {
     
      name: 'Making India Awesome',
      image: 'https://m.media-amazon.com/images/I/61OHS+y1cIL._SY466_.jpg',
      description:
        'Making India Awesome: New Essays and Columns’ by renowned Indian author Chetan Bhagat is a book that showers light on India’s most obstinate snags—unemployment',
      author: 'Chetan Bhagat',
      category: 'Literature & Fiction',
      price: 599.99,
      countInStock: 10,
      rating: 4.0,
      numReviews: 4,
    },
    {
      
      name: 'The Wealth Money Cannot Buy',
      image: 'https://m.media-amazon.com/images/I/81ZIPD-q6cL._SY466_.jpg',
      description:
        'The Wealth Money Can’t Buy offers you a completely life-changing new philosophy and methodology for enjoying an honestly rich life, one filled with personal power',
      author: 'Robin Sharma',
      category: 'Personal Development',
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 3,
    },
    {
      
      name: 'Mahabharata',
      image: 'https://m.media-amazon.com/images/I/81N9lSS9xKL._SY466_.jpg',
      description:
        'The Mahabharata is the longest narrative in the world chronicling the fortunes of the Kuru dynasty. Amidst all the grandeur and heroism',
      author: ' Ishan Trivedi',
      category: 'Comics',
      price: 399.99,
      countInStock: 10,
      rating: 5,
      numReviews: 3,
    },
    {
      
      name: 'The Shark and the Dolphins',
      image: 'https://m.media-amazon.com/images/I/71SWdPMSBWL._SY466_.jpg',
      description:
        'Towering egos, a fierce legal battle, epic friendships, and amidst it all, the dream to build the world’s greatest electric car. Bharat and Aman leave their successful management careers to chase their dream of building an electric car.',
      author: 'Prabhu Subramanian',
      category: 'Novels',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 2,
    },
    {
      
      name: 'The Complete Novels of Sherlock Holmes ',
      image: 'https://m.media-amazon.com/images/I/71YXYFviUmL._SY466_.jpg',
      description:
        'Embark on thrilling investigations with The Complete Novel of Sherlock Holmes. This comprehensive collection features all four novels.',
      author: 'Arthur Conan Doyle',
      category: 'Novels',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 4,
    },
    {
      name: 'Atomic Habits',
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg',
      description:
        'An easy & proven way to build good habits & break bad ones. The instant New York Times bestseller. Over a million copies sold.',
      author: 'James Clear',
      category: 'Personal Development',
      price: 649.99,
      countInStock: 15,
      rating: 4.8,
      numReviews: 210,
    },
    {
      name: 'Educated',
      image: 'https://m.media-amazon.com/images/I/81WojUxbbFL._SY466_.jpg',
      description:
        'A Memoir that showcases the struggle of a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
      author: 'Tara Westover',
      category: 'Biographies & Memoirs',
      price: 879.99,
      countInStock: 8,
      rating: 4.7,
      numReviews: 134,
    },
    {
      name: 'Sapiens: A Brief History of Humankind',
      image: 'https://m.media-amazon.com/images/I/713jIoMO3UL._SY466_.jpg',
      description:
        'Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions.',
      author: 'Yuval Noah Harari',
      category: 'History',
      price: 799.99,
      countInStock: 11,
      rating: 4.6,
      numReviews: 198,
    },
    {
      name: 'The Alchemist',
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._SY466_.jpg',
      description:
        'Paulo Coelho\'s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.',
      author: 'Paulo Coelho',
      category: 'Fiction',
      price: 299.99,
      countInStock: 20,
      rating: 4.4,
      numReviews: 250,
    },
    {
      name: 'The Subtle Art of Not Giving a F*ck',
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._SY466_.jpg',
      description:
        'A counterintuitive approach to living a good life. Mark Manson argues that lifes struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful.',
      author: 'Mark Manson',
      category: 'Self-Help',
      price: 499.99,
      countInStock: 13,
      rating: 4.5,
      numReviews: 180,
    },
    {
      name: 'To Kill a Mockingbird',
      image: 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Harper Lee’s Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.',
      author: 'Harper Lee',
      category: 'Literature & Fiction',
      price: 499.99,
      countInStock: 5,
      rating: 4.8,
      numReviews: 150,
    },
    {
      name: 'The Catcher in the Rye',
      image: 'https://m.media-amazon.com/images/I/618XWn5fD5L._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Holden Caulfield is a young man in New York City, facing a moral crisis after the death of his brother. He struggles to find his place in a world that appears phony and hypocritical to him.',
      author: 'J.D. Salinger',
      category: 'Literature & Fiction',
      price: 399.99,
      countInStock: 7,
      rating: 4.6,
      numReviews: 120,
    },
    {
      name: '1984',
      image: 'https://m.media-amazon.com/images/I/61yaS3+6PSL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Winston Smith works for the Party in Oceania, rewriting history to fit the narrative that the Party wants. He starts to rebel against the oppressive regime and begins a dangerous affair.',
      author: 'George Orwell',
      category: 'Literature & Fiction',
      price: 599.99,
      countInStock: 3,
      rating: 4.7,
      numReviews: 100,
    },
    {
      name: 'Pride and Prejudice',
      image: 'https://m.media-amazon.com/images/I/91fDvMK+aEL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Elizabeth Bennet deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.',
      author: 'Jane Austen',
      category: 'Literature & Fiction',
      price: 449.99,
      countInStock: 9,
      rating: 4.9,
      numReviews: 180,
    },
    {
      name: 'The Great Gatsby',
      image: 'https://m.media-amazon.com/images/I/71zNHngqfPL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Set in the Jazz Age, it tells the story of millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.',
      author: 'F. Scott Fitzgerald',
      category: 'Literature & Fiction',
      price: 549.99,
      countInStock: 6,
      rating: 4.5,
      numReviews: 90,
    },
    {
      name: 'Harry Potter and the Sorcerer\'s Stone',
      image: 'https://m.media-amazon.com/images/I/917ti8nLcSL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'The story follows young Harry Potter who discovers he is a wizard on his eleventh birthday when he receives a letter of acceptance to the Hogwarts School of Witchcraft and Wizardry.',
      author: 'J.K. Rowling',
      category: 'Children\'s Books',
      price: 299.99,
      countInStock: 15,
      rating: 4.9,
      numReviews: 300,
    },
    {
      name: 'The Hobbit',
      image: 'https://m.media-amazon.com/images/I/71jKeGU9nKL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Bilbo Baggins, a hobbit, is persuaded by the wizard Gandalf to accompany thirteen dwarves led by Thorin Oakenshield on a quest to reclaim the Lonely Mountain and its treasure from the dragon Smaug.',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      price: 449.99,
      countInStock: 10,
      rating: 4.7,
      numReviews: 150,
    },
    {
      name: 'The Chronicles of Narnia',
      image: 'https://m.media-amazon.com/images/I/71hipMeVUqL._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals.',
      author: 'C.S. Lewis',
      category: 'Fantasy',
      price: 599.99,
      countInStock: 8,
      rating: 4.8,
      numReviews: 200,
    },
    {
      name: 'The Lord of the Rings',
      image: 'https://m.media-amazon.com/images/I/A107128OO2L._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'The epic fantasy novel follows the journey of the hobbit Frodo Baggins as he and a fellowship embark on a quest to destroy the One Ring and defeat the Dark Lord Sauron.',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
      price: 799.99,
      countInStock: 5,
      rating: 4.9,
      numReviews: 250,
    },
    {
      name: 'The Hunger Games',
      image: 'https://m.media-amazon.com/images/I/81zlHaEBHaS._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'Set in a dystopian society, the novel follows the protagonist Katniss Everdeen as she volunteers to participate in the Hunger Games, a televised event where children fight to the death.',
      author: 'Suzanne Collins',
      category: 'Science Fiction',
      price: 599.99,
      countInStock: 7,
      rating: 4.6,
      numReviews: 180,
    },
    {
      name: 'The Girl with the Dragon Tattoo',
      image: 'https://m.media-amazon.com/images/I/517brh4+tIL._SY445_SX342_.jpg',
      description:
        'The gripping thriller follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance linked to a wealthy family.',
      author: 'Stieg Larsson',
      category: 'Mystery & Thriller',
      price: 449.99,
      countInStock: 9,
      rating: 4.7,
      numReviews: 150,
    },
    {
      name: 'The Da Vinci Code',
      image: 'https://m.media-amazon.com/images/I/71Q3wChhH7L._AC_UY327_FMwebp_QL65_.jpg',
      description:
        'The mystery thriller follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel a conspiracy involving the works of Leonardo da Vinci.',
      author: 'Dan Brown',
      category: 'Mystery & Thriller',
      price: 499.99,
      countInStock: 8,
      rating: 4.5,
      numReviews: 200,
    },
    
  ]
  
  export default products;