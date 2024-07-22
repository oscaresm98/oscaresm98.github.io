import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import HomeView from "@/views/HomeView";
import AboutMeView from "@/views/AboutMeView";
import ContactView from "@/views/ContactView";
import NotFound from "@/components/NotFound";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomeView />} index />
          <Route path='/about' element={<AboutMeView />} />
          <Route path='/contact' element={<ContactView />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path='*' element={<NotFound />} />
        </Route>

        {/* <Route element={<AuthLayout />}>
          <Route path='/auth/login' element={<LoginView />} />
          <Route path='/auth/register' element={<RegisterView />} />
          <Route path='/auth/confirm-account' element={<ConfirmAccountView />} />
          <Route path='/auth/request-code' element={<RequestNewCodeView />} />
          <Route path='/auth/forgot-password' element={<ForgotPasswordView />} />
          <Route path='/auth/new-password' element={<NewPasswordView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='*' element={<NotFound />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
} 