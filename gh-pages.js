import { publish } from 'gh-pages';

publish(
 'docs', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/sialiss/portfolio', // Update to point to your repository
  user: {
   name: 'Camellia', // update to use your name
   email: 'camellia.sialiss@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);