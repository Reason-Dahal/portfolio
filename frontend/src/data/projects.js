export const projects = [
    {
      slug: 'smartclass',
      name: 'SmartClass',
      tagline:
        'Replaces scattered notices and paperwork with one app for managing classes, materials, and student records.',
      detail:
        'Built to a full SDLC: a 30-requirement SRS, ERDs and API spec, 31 REST endpoints with role-based access, and 95 automated backend tests.',
      image: '/images/projects/smartclass.jpg',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Riverpod', 'JWT'],
      repo: 'https://github.com/Reason-Dahal/smartclass',
    },
    {
      slug: 'ecommerce',
      name: 'E-Commerce Platform',
      tagline:
        'A complete storefront — browsing, cart, and order tracking — running on a REST API I built from scratch.',
      detail:
        'JWT authentication, MongoDB schema design, and endpoints designed and tested in Postman against REST conventions.',
      image: '/images/projects/ecommerce.jpg',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'REST API'],
      repo: 'https://github.com/Reason-Dahal/ecommerce_frontend',
    },
    {
      slug: 'quiz-app',
      name: 'Quiz App',
      tagline:
        'Lets teachers run assessments that sync in real time across every student device.',
      detail:
        'Firebase Authentication for secure login, Firestore for live question sync, plus scoring, performance tracking, and category filtering.',
      image: '/images/projects/quiz-app.jpg',
      tech: ['Flutter', 'Firebase', 'Firestore'],
      repo: 'https://github.com/Reason-Dahal/quiz-app',
    },
    {
      slug: 'track-my-cash',
      name: 'Track My Cash',
      tagline:
        'Tracks daily spending completely offline — no account, no internet needed.',
      detail:
        'Offline-first SQFlite storage with real-time spending charts, category reporting, and date filtering.',
      image: '/images/projects/track-my-cash.jpg',
      tech: ['Flutter', 'Dart', 'SQFlite'],
      repo: 'https://github.com/Reason-Dahal/track-my-cash',
    },
  ];