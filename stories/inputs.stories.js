import { storiesOf } from "@storybook/vue";

import { InputText, InputGroup } from "../src/components/ui/Inputs";
import { BaseButton } from "../src/components/ui/Buttons";
import InputGroupStory from "../stories/InputGroupStory.vue";

storiesOf("InputText", module)
  .add("default", () => ({
    components: { InputText, BaseButton },
    template: `
    <div class="bg-red-100 p-4">
      <input-text size="small" placeholder="Testing placeholder" value="halooo" />
      <input-text />
      <input-text size="large" />
      <base-button>Button</base-button>
    </div>
  `
  }))
  .add("Input Group", () => ({
    render: h => h(InputGroupStory)
  }));
