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
    
  ]
  
  export default products;