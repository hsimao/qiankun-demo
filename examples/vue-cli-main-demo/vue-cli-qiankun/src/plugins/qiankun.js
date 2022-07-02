import { registerMicroApps, start } from "qiankun";
import TYPES from "@/store/types";
import createSdk from "@/utils/createSdk";

export default async ({ store, router, app }) => {
  const { apps, menus } = await store.dispatch(TYPES.INIT_APPS);

  const iMenus = menus.map(item => ({
    ...item,
    path: `${item.path}(.*)`
  }));

  router.addRoutes(iMenus);

  const sdk = createSdk({ store, router, app });

  registerMicroApps(
    apps.map(item => ({
      ...item,
      props: {
        sdk
      }
    })),
    {
      beforeLoad: app => {
        console.log("before load app.name: ", app.name);
      },
      beforeMount: [
        app => {
          console.log(
            "[LifeCycle] beforeMount %c%s",
            "color: green;",
            app.name
          );
        }
      ],
      afterMount: [
        app => {
          console.log("[LifeCycle] afterMount %c%s", "color: green;", app.name);
        }
      ],
      afterUnmount: [
        app => {
          console.log(
            "[LifeCycle] afterUnmount %c%s",
            "color: green;",
            app.name
          );
        }
      ]
    }
  );

  // NOTE: 允許同時多個子應用存在
  start({ singular: false });
};
