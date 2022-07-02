import { sleep } from "@/utils";
export async function getMenus() {
  // 模拟请求，延时一秒
  await sleep(1000);

  return {
    code: 0,
    payload: [
      {
        name: "vue-app",
        activeRule: "/vue",
        activeRuleFn: function() {
          // NOTE: 一直保持掛載
          return true;
        },
        container: "#sub-vue",
        entry: "http://localhost:7101/"
      },
      {
        name: "nuxt-app",
        // 網址匹配 #/nuxt 掛載, 沒有匹配時卸載
        activeRule: "/nuxt",
        // activeRuleFn: function() {
        //   return location.hash.includes("nuxt");
        // },
        container: "#sub-nuxt",
        entry: "http://127.0.0.1:7102/"
      }
    ],
    message: "success"
  };
}
