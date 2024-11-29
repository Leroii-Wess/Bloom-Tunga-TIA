import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/CreateBlogPost";
import BlogProvider from "./context/BlogContext";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import EditBlogPage from "./pages/EditBlogPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <BlogProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route index element={<Navigate to="login" />} />
            <Route path="sign-up" element={<SignupPage />} />
            <Route path="home" element={<Home />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="post-blog" element={<BlogPostPage />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
            <Route path="blogs/edit/:id" element={<EditBlogPage />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#FAFAFA",
            color: "#313131",
          },
        }}
      />
    </>
  );
}

export default App;