import Layout from "@/components/Layout";
import { Skeleton } from "./Skeleton";

export function HomeSkeleton() {
  return (
    <Layout>
      <section className="py-20 pt-28 md:pt-36 relative">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* Badge row */}
          <div className="flex justify-center gap-3 mb-8">
            <Skeleton className="h-6 w-40 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-6 w-36 rounded-full" />
          </div>

          {/* Hero title */}
          <div className="text-center mb-6 space-y-4">
            <Skeleton className="h-14 w-3/4 mx-auto rounded-xl" />
            <Skeleton className="h-14 w-2/3 mx-auto rounded-xl" />
            <Skeleton className="h-14 w-1/2 mx-auto rounded-xl" />
          </div>

          {/* Subtitle */}
          <div className="text-center mb-10 space-y-2">
            <Skeleton className="h-4 w-96 mx-auto" />
            <Skeleton className="h-4 w-80 mx-auto" />
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center gap-4 mb-20">
            <Skeleton className="h-12 w-44 rounded-xl" />
            <Skeleton className="h-12 w-36 rounded-xl" />
          </div>

          {/* Service bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            <Skeleton className="col-span-2 md:col-span-1 h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="h-48 rounded-2xl" />
            <Skeleton className="col-span-2 h-48 rounded-2xl" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-10 w-24 mx-auto rounded-lg" />
                <Skeleton className="h-3 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
