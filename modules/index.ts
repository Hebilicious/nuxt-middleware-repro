import { createResolver, addPlugin, defineNuxtModule } from "@nuxt/kit"

export default defineNuxtModule({
  setup(){
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve("./runtime/plugin/my-plugin"))
  }
})