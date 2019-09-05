import { configure, storiesOf } from '@storybook/vue';

// import '../src/assets/tachyons.min.css';
import '../src/assets/styles/main.css';

import WelcomeStorybook from './WelcomeStorybook.vue'
import ColorSwatch from './ColorSwatch.vue'
import MessageStory from './MessageStory.vue'
import SidebarStory from './SidebarStory.vue'
import TheNavbar from '../src/components/navbar/TheNavbar.vue'
import CatalogCategoryList from '../src/components/categories/CatalogCategoryList.vue'
import SvgIcon from '../src/components/ui/SvgIcon.vue'

storiesOf('WelcomeStorybook', module)
  .add('Typography', () => ({
    render: h => h(WelcomeStorybook),
  }))
  .add('Color Swatch', () => ({
    render: h => h(ColorSwatch),
  }))
  .add('Message', () => ({
    render: h => h(MessageStory),
  }))
  .add('Sidebar', () => ({
    render: h => h(SidebarStory),
  }))
  .add('Navbar', () => ({
    render: h => h(TheNavbar),
  }));

storiesOf('Categories', module)
  .add('Catalog category', () => ({
    render: h => h(CatalogCategoryList),
  }));

storiesOf('Svg Icon', module)
  .add('Svg Icon baru', () => ({
    render: h => h(SvgIcon),
  }));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
