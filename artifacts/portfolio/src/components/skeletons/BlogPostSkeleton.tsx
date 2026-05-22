import Layout from "@/components/Layout";
import { Skeleton } from "./Skeleton";

export function BlogPostSkeleton() {
  return (
    <Layout>
      <article className="py-20 pt-24 md:pt-28 relative">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">

          {/* Back nav */}
          <Skeleton className="h-4 w-24 mb-8" />

          {/* Post header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20 ml-auto" />
            </div>
            <Skeleton className="h-10 w-full mb-2 rounded-xl" />
            <Skeleton className="h-10 w-4/5 mb-5 rounded-xl" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-5/6 mb-6" />

            {/* Author strip */}
            <div className="flex items-center gap-3 py-4 border-y border-white/10">
              <Skeleton className="w-9 h-9 rounded-full flex-shrink-0" />
              <div className="space-y-1.5">
                <Skeleton className="h-3.5 w-20" />
                <Skeleton className="h-3 w-32" />
              </div>
              <div className="ml-auto flex gap-2">
                <Skeleton className="h-3 w-14" />
                <Skeleton className="h-3 w-14" />
              </div>
            </div>
          </div>

          {/* Content blocks */}
          <div className="space-y-4 mb-12">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />

            {/* Heading */}
            <Skeleton className="h-7 w-64 mt-8 rounded-lg" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />

            {/* List */}
            <div className="space-y-3 pl-1 my-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Skeleton className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" />
                  <Skeleton className={`h-4 ${i % 2 === 0 ? "w-full" : "w-10/12"}`} />
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="my-7 p-5 md:p-6 rounded-xl border border-white/10 bg-white/[0.03] relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20 rounded-l-xl" />
              <Skeleton className="h-4 w-full mb-2 ml-2" />
              <Skeleton className="h-4 w-4/5 ml-2" />
            </div>

            {/* Heading */}
            <Skeleton className="h-7 w-56 mt-8 rounded-lg" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
          </div>

          {/* WhatsApp CTA inline */}
          <Skeleton className="h-24 rounded-xl mb-12" />

          {/* Prev / Next */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Skeleton className="h-20 rounded-xl" />
            <Skeleton className="h-20 rounded-xl" />
          </div>

          {/* Back link */}
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      </article>
    </Layout>
  );
}
