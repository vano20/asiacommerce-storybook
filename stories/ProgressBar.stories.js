import { storiesOf } from "@storybook/vue";

import ProgressBar from "../src/components/ui/ProgressBar";

storiesOf("Progress Bar", module)
  .add("Default", () => ({
    components: { ProgressBar },
    template: `
        <div class="w-40 h-64 items-center">
            <progress-bar />
        </div>
    `
  }))