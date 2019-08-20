import { configure, storiesOf } from '@storybook/vue';

// import '../src/assets/tachyons.min.css';
import '../src/assets/styles/main.css';

import HelloWorld from '../src/components/HelloWorld.vue'

storiesOf('HelloWorld', module).add('HelloWorld', () => ({
  render: h => h(HelloWorld),
}));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
