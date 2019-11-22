import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import NotificationItem from "../src/components/notifications/NotificationItem";

storiesOf("Notifications", module)
  .add("Notifaction item", () => ({
    components: { NotificationItem },
    template: `
    <div class="bg-red-100 p-4">
      <div class="w-3/5 mx-auto shadow">
        <notification-item />
        <notification-item />
      </div>
    </div>
  `
  }));
