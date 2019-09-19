import { configure, storiesOf } from '@storybook/vue';

// import '../src/assets/tachyons.min.css';
import '../src/assets/styles/main.css';

import WelcomeStorybook from './WelcomeStorybook.vue'
import ColorSwatch from './ColorSwatch.vue'
import MessageStory from '../stories/MessageStory.vue'
import SidebarStory from '../stories/SidebarStory.vue'
import TheNavbar from '../src/components/navbar/TheNavbar.vue'
import CatalogCategoryList from '../src/components/categories/CatalogCategoryList.vue'
import SvgIcon from '../src/components/ui/SvgIcon.vue'
import TheSwitch from '../src/components/ui/TheSwitch.vue'
import BreadcrumbCategory from '../src/components/breadcrumbs/BreadcrumbCategory'
import { DropdownMenu } from '../src/components/dropdowns/index'
import DropdownStory from '../stories/DropdownStory.vue'

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
  }))
  .add('Switch', () => ({
    components: {TheSwitch},
    data () {
      return {
        checkbox1: false,
        checkbox2: false,
        checkbox3: true,
      }
    },
    template: `
      <div class="p-4">
        <the-switch v-model="checkbox1"/>
        <the-switch v-model="checkbox2" title="Title here" />
        <the-switch v-model="checkbox3" :title="'auto enable ' + [checkbox3]" />
        <the-switch disabled title="disable here" />
      </div>
    `
  }));

storiesOf('Categories', module)
  .add('Catalog category', () => ({
    render: h => h(CatalogCategoryList),
  }));

  storiesOf('Breadcrumbs', module)
  .add('Catalog category breadcrumb', () => ({
    render: h => h(BreadcrumbCategory),
  }));

storiesOf('Svg Icon', module)
  .add('Svg Icon baru', () => ({
    render: h => h(SvgIcon),
  }));

storiesOf('Dropdowns', module)
  .add('dropdown', () => ({
    components: {DropdownMenu},

    template: `
      <dropdown-menu />
    `
  }))
  .add('dropdown story', () => ({
    render: h => h(DropdownStory),
  }));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
