import Vue from "vue";
import Router from "vue-router";
import Chart from "@/components/Chart";
import Resas from "@/components/Resas";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Chart",
      component: Chart
    },
    {
      path: "/",
      name: "Resas",
      component: Resas
    }
  ]
});
