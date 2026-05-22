import Layout from "@/components/Layout";
import { Skeleton } from "./Skeleton";

export function BlogSkeleton() {
  return (
    <Layout>
      <section className="py-20 pt-24 md:pt-28 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-6 w-48 mx-auto rounded-full" />
            <Skeleton className="h-12 w-64 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-96 mx-auto" />
            <Skeleton className="h-4 w-72 mx-auto" />
          </div>

          {/* Featured post */}
          <div className="mb-10 rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-4 w-16 ml-auto" />
            </div>
            <Skeleton className="h-8 w-4/5 mb-2 rounded-lg" />
            <Skeleton className="h-8 w-3/5 mb-5 rounded-lg" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-20" />
              </div>
              <Skeleton className="h-5 w-28 rounded-lg" />
            </div>
          </div>

          {/* Post grid — 19 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-white/[0.03] p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-20 rounded-full" />
                  <Skeleton className="h-3 w-12 ml-auto" />
                </div>
                <Skeleton className="h-5 w-full rounded-md" />
                <Skeleton className="h-5 w-4/5 rounded-md" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-3/4" />
                <div className="flex gap-2 mt-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-4 w-16 mt-auto" />
              </div>
            ))}
          </div>

          {/* CTA block */}
          <Skeleton className="h-40 rounded-2xl" />
        </div>
      </section>
    </Layout>
  );
}
