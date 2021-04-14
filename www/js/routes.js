
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/training/',
    url: './pages/training.html',
    options: {
      transition: 'f7-dive',
    },
    routes: [
      {
        path: 'fitness/',
        componentUrl: './pages/fitness.html',
        options: {
          transition: 'f7-dive',
        },
        routes:
        [
          {
            path: ':title/',
            componentUrl: './pages/f-exercises.html',
          },
          
        ]
      },
      {
        path: 'home/',
        componentUrl: './pages/home.html',
        options: {
          transition: 'f7-dive',
        },
        routes:
        [
          {
            path: ':title/',
            componentUrl: './pages/h-exercises.html',
          },
        ]
      },
    ],
  },
  {
    path: '/vooruitgang/',
    url: './pages/vooruitgang.html',
    options: {
      transition: 'f7-dive',
    },
    routes: [
      {
        path: 'fotodagboek/',
        componentUrl: './pages/fotodagboek.html',
      },
      {
        path: 'mijnLichaam/',
        componentUrl: './pages/mijnLichaam.html',
        options: {
          transition: 'f7-dive',
        },
        routes: 
        [
          {
            path: 'BMR-BMI/',
            componentUrl: './pages/BMR-BMI.html',
          },
        ]
      },
      
    ]
  },
  {
    path: '/planning/',
    url: './pages/planning.html',
    options: {
      transition: 'f7-dive',
    },
    routes:
        [
          {
            path: 'nieuw-event/',
            url: './pages/nieuw-event.html',
          },
          {
            path: ':twm/',
            componentUrl: './pages/training-sessie.html',
          },
        ]
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
