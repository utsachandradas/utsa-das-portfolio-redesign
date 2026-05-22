import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { blogPosts, categoryColors, ContentBlock } from "@/data/blogPosts";

const WHATSAPP = "https://wa.me/8801861393416?text=Hi%20Utsa%2C%20I%27d%20like%20to%20discuss%20a%20project";

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={i} className="text-muted-foreground leading-relaxed md:leading-loose text-sm md:text-base mb-5">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={i} className="text-xl md:text-2xl font-bold mt-10 mb-4 tracking-tight text-foreground">
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={i} className="text-base md:text-lg font-semibold mt-6 mb-3 text-foreground">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2.5 mb-6 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="my-7 p-5 md:p-6 rounded-xl border border-primary/25 bg-primary/5 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl" />
          <p className="text-sm md:text-base text-foreground font-medium leading-relaxed pl-2">{block.text}</p>
        </div>
      );
    case "divider":
      return <hr key={i} className="border-border/40 my-8" />;
    default:
      return null;
  }
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = blogPosts.find((p) => p.slug === slug);
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prev = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const next = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container max-w-2xl mx-auto py-40 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">This article doesn't exist or may have moved.</p>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-primary font-semibold cursor-pointer hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </span>
          </Link>
        </div>
      </Layout>
    );
  }

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": "Utsa Das",
      "url": "https://utsadas.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Utsa Das",
      "url": "https://utsadas.com"
    },
    "datePublished": post.date,
    "keywords": post.tags.join(", "),
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Utsa Das Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
      </Helmet>

      <article className="py-20 pt-24 md:pt-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.70_0.24_272_/_0.06)_0,transparent_50%)] pointer-events-none" />
        <div className="container max-w-3xl mx-auto relative z-10 px-4 sm:px-6">

          {/* Back nav */}
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="mb-8">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </span>
            </Link>
          </motion.div>

          {/* Post header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? "text-primary bg-primary/10 border-primary/20"}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />{post.readTime} read
              </span>
              <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              {post.excerpt}
            </p>

            {/* Author strip */}
            <div className="flex items-center gap-3 py-4 border-y border-border/40">
              <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                U
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Utsa Das</p>
                <p className="text-xs text-muted-foreground">SEO & GEO Strategist · Since 2022</p>
              </div>
              <div className="ml-auto flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map(t => (
                  <span key={t} className="flex items-center gap-1 text-[9px] text-muted-foreground">
                    <Tag className="w-2 h-2" />{t}
                  </span>
                ))}
              </div>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="prose-custom mb-12"
          >
            {post.content.map((block, i) => renderBlock(block, i))}
          </motion.div>

          {/* WhatsApp CTA inline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl p-5 md:p-7 border border-primary/20 mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-bold text-base mb-1">Want to apply this to your brand?</p>
                <p className="text-muted-foreground text-sm">4+ years of founder-led SEO & GEO strategy. Let's discuss your specific situation.</p>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex-shrink-0">
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {prev ? (
                <Link href={`/blog/${prev.slug}`}>
                  <div className="glass-panel rounded-xl p-4 border border-white/5 hover:border-primary/25 transition-all group cursor-pointer">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1">
                      <ArrowLeft className="w-3 h-3" /> Previous
                    </p>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">{prev.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`}>
                  <div className="glass-panel rounded-xl p-4 border border-white/5 hover:border-primary/25 transition-all group cursor-pointer text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 flex items-center justify-end gap-1">
                      Next <ArrowRight className="w-3 h-3" />
                    </p>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">{next.title}</p>
                  </div>
                </Link>
              ) : <div />}
            </div>
          )}

          {/* Back to blog */}
          <div className="text-center">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> All Articles
              </span>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
