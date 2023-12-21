import {Routes, Route} from "react-router-dom"
import { Home } from "./_root/pages"
import Login from "./_auth/forms/Login"
import Register from "./_auth/forms/Register"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
function App() {
  return (
    <>
      <main className="flex h-screen">
        <Routes>
          {/* {公共路由} */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          {/* 私有路由 */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
