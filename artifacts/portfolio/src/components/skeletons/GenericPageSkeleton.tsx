import Layout from "@/components/Layout";
import { Skeleton } from "./Skeleton";

export function GenericPageSkeleton() {
  return (
    <Layout>
      <section className="py-20 pt-24 md:pt-28 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* Page header */}
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-6 w-40 mx-auto rounded-full" />
            <Skeleton className="h-12 w-80 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-96 mx-auto" />
            <Skeleton className="h-4 w-72 mx-auto" />
          </div>

          {/* Content rows */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 space-y-3">
                <Skeleton className="h-5 w-8 rounded-md" />
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}
          </div>

          {/* Secondary content */}
          <div className="space-y-3 mb-12">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          {/* Tags / chips row */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-7 w-24 rounded-full" />
            ))}
          </div>

          {/* CTA */}
          <Skeleton className="h-36 rounded-2xl" />
        </div>
      </section>
    </Layout>
  );
}
