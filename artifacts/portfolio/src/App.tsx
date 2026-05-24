import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ScrollProvider } from "./contexts/ScrollContext";
import { HomeSkeleton } from "./components/skeletons/HomeSkeleton";
import { BlogSkeleton } from "./components/skeletons/BlogSkeleton";
import { BlogPostSkeleton } from "./components/skeletons/BlogPostSkeleton";
import { ProjectsSkeleton } from "./components/skeletons/ProjectsSkeleton";
import { GenericPageSkeleton } from "./components/skeletons/GenericPageSkeleton";

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

function S({ fallback, children }: { fallback: React.ReactNode; children: React.ReactNode }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <S fallback={<HomeSkeleton />}><Home /></S>
      </Route>
      <Route path="/about">
        <S fallback={<GenericPageSkeleton />}><About /></S>
      </Route>
      <Route path="/services">
        <S fallback={<GenericPageSkeleton />}><Services /></S>
      </Route>
      <Route path="/projects">
        <S fallback={<ProjectsSkeleton />}><Projects /></S>
      </Route>
      <Route path="/skills">
        <S fallback={<GenericPageSkeleton />}><Skills /></S>
      </Route>
      <Route path="/contact">
        <S fallback={<GenericPageSkeleton />}><Contact /></S>
      </Route>
      <Route path="/blog">
        <S fallback={<BlogSkeleton />}><Blog /></S>
      </Route>
      <Route path="/blog/:slug">
        <S fallback={<BlogPostSkeleton />}><BlogPost /></S>
      </Route>
      <Route path="/case-studies">
        <S fallback={<GenericPageSkeleton />}><CaseStudies /></S>
      </Route>
      <Route path="/404">
        <S fallback={<GenericPageSkeleton />}><NotFound /></S>
      </Route>
      <Route>
        <S fallback={<GenericPageSkeleton />}><NotFound /></S>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation} strict>
        <ThemeProvider defaultTheme="dark">
          <ScrollProvider>
            <TooltipProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <Toaster />
                <Router />
              </WouterRouter>
            </TooltipProvider>
          </ScrollProvider>
        </ThemeProvider>
      </LazyMotion>
    </ErrorBoundary>
  );
}

export default App;
