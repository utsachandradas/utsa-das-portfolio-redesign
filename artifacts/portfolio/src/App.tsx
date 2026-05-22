import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";

function Router() {
  return (
    <Switch>
      <Route path="/"             component={Home} />
      <Route path="/about"        component={About} />
      <Route path="/services"     component={Services} />
      <Route path="/projects"     component={Projects} />
      <Route path="/skills"       component={Skills} />
      <Route path="/contact"      component={Contact} />
      <Route path="/blog"         component={Blog} />
      <Route path="/blog/:slug"   component={BlogPost} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/404"          component={NotFound} />
      <Route                      component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Toaster />
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
