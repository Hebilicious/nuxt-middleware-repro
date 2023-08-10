import testMiddleware from "../middlewares/test"

export default defineNuxtPlugin(()=> {
  console.log("Hello from my module plugin")
  addRouteMiddleware("test", testMiddleware)
})