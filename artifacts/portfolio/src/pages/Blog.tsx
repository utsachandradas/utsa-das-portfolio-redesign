import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts, categoryColors } from "@/data/blogPosts";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <Layout>
      <Helmet>
        <title>SEO & GEO Blog | 20 Expert Articles | Utsa Das</title>
        <meta name="description" content="20 expert articles on SEO, GEO, AI search optimization, technical SEO, and ecommerce growth by Utsa Das — SEO & GEO Strategist since 2022." />
      </Helmet>

      <section className="py-20 pt-24 md:pt-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.70_0.24_272_/_0.07)_0,transparent_55%)] pointer-events-none" />
        <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6">

          {/* Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-primary text-xs font-semibold mb-5 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Expert Perspectives · {blogPosts.length} Articles
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">SEO & GEO Blog</h1>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto">
              In-depth writing on modern search strategy, AI visibility, and the future of digital discovery — by a practitioner, not an algorithm.
            </p>
          </m.div>

          {/* Featured post */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-10"
          >
            <Link href={`/blog/${featured.slug}`}>
              <div className="glass-panel rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden group cursor-pointer p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryColors[featured.category] ?? "text-primary bg-primary/10 border-primary/20"}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-primary font-semibold px-2.5 py-1 rounded-full bg-primary/8 border border-primary/20">Featured</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                    <Clock className="w-3 h-3" />{featured.readTime} read
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {featured.tags.map(t => (
                      <span key={t} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Tag className="w-2.5 h-2.5" />{t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </m.div>

          {/* Grid */}
          <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16"
          >
            {rest.map((post) => (
              <m.div key={post.slug} variants={fadeUp} whileHover={{ y: -3 }}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-panel rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col h-full cursor-pointer p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[post.category] ?? "text-primary bg-primary/10 border-primary/20"}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground ml-auto">
                        <Clock className="w-2.5 h-2.5" />{post.readTime}
                      </span>
                    </div>
                    <h2 className="text-sm md:text-base font-bold mb-2 tracking-tight group-hover:text-primary transition-colors leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
                      {post.tags.slice(0, 2).map(t => (
                        <span key={t} className="flex items-center gap-1 text-[9px] text-muted-foreground">
                          <Tag className="w-2 h-2" />{t}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all mt-auto">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </m.div>
            ))}
          </m.div>

          {/* CTA */}
          <div className="text-center glass-panel rounded-2xl p-7 md:p-10 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Want a custom SEO & GEO strategy?</h2>
              <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">These articles are just the surface. Let's build a tailored plan for your brand.</p>
              <a href="https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noreferrer"
                className="inline-flex px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-sm">
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
