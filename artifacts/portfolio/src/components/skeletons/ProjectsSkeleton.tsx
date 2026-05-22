import Layout from "@/components/Layout";
import { Skeleton } from "./Skeleton";

export function ProjectsSkeleton() {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <Skeleton className="h-6 w-36 mx-auto rounded-full" />
            <Skeleton className="h-14 w-72 mx-auto rounded-xl" />
            <Skeleton className="h-5 w-96 mx-auto" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>

          {/* Project cards — 2 col */}
          <div className="grid md:grid-cols-2 gap-8 mb-14 md:mb-24">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 md:p-10 space-y-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-4/5 rounded-lg" />
                <Skeleton className="h-8 w-3/5 rounded-lg" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-6 w-20 rounded-full" />
                  ))}
                </div>
                <div className="flex items-end gap-4 border-t border-white/10 pt-5">
                  <Skeleton className="h-12 w-24 rounded-lg" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <Skeleton className="h-48 rounded-3xl" />
        </div>
      </section>
    </Layout>
  );
}
