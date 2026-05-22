import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home        = lazy(() => import("@/pages/Home"));
const About       = lazy(() => import("@/pages/About"));
const Services    = lazy(() => import("@/pages/Services"));
const Projects    = lazy(() => import("@/pages/Projects"));
const Skills      = lazy(() => import("@/pages/Skills"));
const Contact     = lazy(() => import("@/pages/Contact"));
const Blog        = lazy(() => import("@/pages/Blog"));
const BlogPost    = lazy(() => import("@/pages/BlogPost"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const NotFound    = lazy(() => import("@/pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
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
