export const fakeCollectionsData = {
  ids: [0, 1, 2, 3, 4, 5, 6, 7],
  selectedCollectionId: null,
  entities: {
    0: {
      id: 0,
      title: 'Пример',
      image: 'assets/media/temp/collection.jpg',
      description: 'There are plenty of tips here for meal planners: slow cooker dishes that can be prepped ' +
        'the night before, sauces that can be mixed a day or two ahead of serving',
      public: false,
      parent: null,
      createdAt: new Date('Tue April 5 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4],
          time: new Date()
        },
        {
          id: 6,
          analogs: [5, 3, 4],
          time: new Date()
        },
        {
          id: 2,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    },
    1: {
      id: 1,
      title: 'Понедельник',
      image: 'assets/media/temp/collection.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, laboriosam! ' +
        'The getSelectors method returned by the created entity adapter provides ' +
        'functions for selecting information from the entity.',
      public: false,
      parent: null,
      createdAt: new Date('Tue April 9 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 0,
          analogs: [6, 2],
          time: new Date()
        },
        {
          id: 2,
          analogs: [5, 4, 1],
          time: new Date()
        },
        {
          id: 1,
          analogs: [6, 0, 2],
          time: new Date()
        }
      ]
    },
    2: {
      id: 2,
      title: 'На вторник длинное меню',
      image: '',
      description: 'Ad aspernatur culpa doloremque expedita labore modi officia.',
      public: false,
      parent: null,
      createdAt: new Date('Tue April 20 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 6,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 7,
          analogs: [4],
          time: new Date()
        },
        {
          id: 3,
          analogs: [6, 1, 4],
          time: new Date()
        },
        {
          id: 1,
          analogs: [5, 2],
          time: new Date()
        },
        {
          id: 2,
          analogs: [3, 1, 4],
          time: new Date()
        },
        {
          id: 0,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    },
    3: {
      id: 3,
      title: 'Среда',
      image: '',
      description: 'Whether you carefully plan out your weeknight meals ahead of time or wing.',
      public: false,
      parent: null,
      createdAt: new Date('Tue May 1 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 0, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4, 5, 1],
          time: new Date()
        },
        {
          id: 6,
          analogs: [3, 2, 1],
          time: new Date()
        }
      ]
    },
    4: {
      id: 4,
      title: 'Четверг',
      image: '',
      description: 'it based on whatever’s in your pantry, this robust list of easy dinner ideas has something for you.',
      public: false,
      parent: null,
      createdAt: new Date('Tue May 5 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4],
          time: new Date()
        },
        {
          id: 6,
          analogs: [5, 3, 4],
          time: new Date()
        },
        {
          id: 2,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    },
    5: {
      id: 5,
      title: 'Пятница',
      image: '',
      description: 'and chicken dinners that can be made  and frozen until needed. ' +
        'But if meal prep is just not your style, there are plenty of easy dinner recipes here that can be whipped up on the spot. ',
      public: false,
      parent: null,
      createdAt: new Date('Tue May 6 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4],
          time: new Date()
        },
        {
          id: 6,
          analogs: [5, 3, 4],
          time: new Date()
        },
        {
          id: 2,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    },
    6: {
      id: 6,
      title: 'Суббота',
      image: '',
      description: 'We’re talking time-focused, easy recipes with minimal ingredients that impart lots of bang for their buck.',
      public: false,
      parent: null,
      createdAt: new Date('Tue May 10 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4],
          time: new Date()
        },
        {
          id: 6,
          analogs: [5, 3, 4],
          time: new Date()
        },
        {
          id: 2,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    },
    7: {
      id: 7,
      title: 'Воскресенье',
      image: '',
      description: 'Think super-speedy fish dishes and pantry pastas you can make ' +
        'without a shopping trip, composed salads, plus a plethora of flavorful sheet ' +
        'pan and one-pot riffs that majorly cut down on post-dinner cleanup.',
      public: false,
      parent: null,
      createdAt: new Date('Tue May 15 2022 18:05:16 GMT+0300 (Eastern European Summer Time)'),
      dishes: [
        {
          id: 1,
          analogs: [2, 1, 5, 6],
          time: new Date()
        },
        {
          id: 3,
          analogs: [4],
          time: new Date()
        },
        {
          id: 6,
          analogs: [5, 3, 4],
          time: new Date()
        },
        {
          id: 2,
          analogs: [6, 0],
          time: new Date()
        }
      ]
    }
  },
};
