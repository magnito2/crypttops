import { defineClientAppEnhance } from "@vuepress/client";
import Demo from "./components/Demo.vue";
import ExampleLeaderBoard from './components/examples/leader-board-doc';

export default defineClientAppEnhance(({ app }) => {
  app.component("Demo", Demo);
  app.component("ExampleLeaderBoard", ExampleLeaderBoard);
});