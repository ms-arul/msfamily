import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { APP_INFO_DOCS, type AppInfoDoc } from './src/data/appInfoDocs.ts'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderDocHtml(doc: AppInfoDoc): string {
  const sectionsHtml = doc.sections.map((section, idx) => {
    let contentHtml = '';
    if (Array.isArray(section.content)) {
      contentHtml = `<ul class="space-y-2">` + section.content.map(item => `<li class="leading-relaxed">${escapeHtml(item)}</li>`).join('') + `</ul>`;
    } else {
      contentHtml = `<p>${escapeHtml(section.content)}</p>`;
    }
    return `
      <article id="doc-section-${idx}" class="glass-card rounded-2xl p-5 sm:p-7 border border-white/[0.08] scroll-mt-24 mb-4 bg-slate-900/60 backdrop-blur-md">
        <h2 class="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
          ${escapeHtml(section.title)}
        </h2>
        <div class="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2.5">
          ${contentHtml}
        </div>
      </article>
    `;
  }).join('\n');

  const tocHtml = doc.sections.map((section, idx) => `
    <a href="#doc-section-${idx}" class="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors truncate block">
      ${escapeHtml(section.title)}
    </a>
  `).join('\n');

  return `
  <div class="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 glass-nav py-3 bg-[#0B0F19]/90 border-b border-white/10 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <a href="/" class="flex-shrink-0 flex items-center gap-2.5 group">
            <img src="/msfamily.webp" alt="MS Family Logo" class="h-9 w-9 rounded-xl object-contain shadow-md shadow-indigo-500/20" />
            <div class="flex flex-col">
              <span class="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                MS Family
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  v2.1.9
                </span>
              </span>
            </div>
          </a>
          <div class="hidden md:flex items-center space-x-6 text-sm">
            <a href="/#features" class="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="/#sms" class="text-slate-300 hover:text-white transition-colors">Smart SMS</a>
            <a href="/#family" class="text-slate-300 hover:text-white transition-colors">Family</a>
            <a href="/#subscription" class="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="/#faq" class="text-slate-300 hover:text-white transition-colors">FAQ</a>
            <a href="/legal" class="text-indigo-400 font-semibold transition-colors">Legal &amp; Privacy</a>
            <a href="/support" class="text-slate-300 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-24 pb-12 flex-1">
      <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <!-- Top Breadcrumb -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.08]">
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <a href="/legal" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-colors">
              &larr; Back
            </a>
            <span class="text-slate-600">/</span>
            <a href="/legal" class="hover:text-white transition-colors">Legal Hub</a>
            <span class="text-slate-600">/</span>
            <span class="text-slate-200 font-semibold truncate max-w-[200px]">${escapeHtml(doc.title)}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Left Sidebar -->
          <aside class="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            <div class="glass-card rounded-2xl p-5 border border-white/10 bg-slate-900/60 backdrop-blur-md">
              <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-3">
                <span>Official Compliance Document</span>
              </div>
              <h3 class="text-base font-bold text-white mb-2">${escapeHtml(doc.title)}</h3>
              ${doc.subtitle ? `<p class="text-xs text-slate-300 mb-4 leading-relaxed">${escapeHtml(doc.subtitle)}</p>` : ''}
              <div class="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-slate-400">
                ${doc.lastUpdated ? `
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400">Last Updated:</span>
                    <span class="font-semibold text-slate-200">${escapeHtml(doc.lastUpdated)}</span>
                  </div>
                ` : ''}
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Developer:</span>
                  <span class="font-semibold text-slate-200">XPOOL Technology Pvt Ltd</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">App Version:</span>
                  <span class="font-semibold text-indigo-300 font-mono">v2.1.9 (build 219)</span>
                </div>
              </div>
            </div>

            <!-- Table of Contents -->
            <div class="glass-card rounded-2xl p-5 border border-white/10 hidden lg:block bg-slate-900/60 backdrop-blur-md">
              <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Sections in this Document</h4>
              <nav class="space-y-1 max-h-[320px] overflow-y-auto pr-1">
                ${tocHtml}
              </nav>
            </div>
          </aside>

          <!-- Right Content Column -->
          <div class="lg:col-span-8 space-y-6">
            <div class="glass-card rounded-2xl p-5 sm:p-7 border border-white/10 bg-slate-900/60 backdrop-blur-md">
              <h1 class="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                ${escapeHtml(doc.title)}
              </h1>
              ${doc.subtitle ? `<p class="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">${escapeHtml(doc.subtitle)}</p>` : ''}
            </div>

            <div class="space-y-4">
              ${sectionsHtml}
            </div>

            <div class="pt-6 border-t border-white/10 text-center sm:text-left text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>&copy; 2026 XPOOL Technology Pvt Ltd. All rights reserved.</p>
              <p>Support: <a href="mailto:velgo7686@gmail.com" class="text-indigo-400 hover:underline">velgo7686@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#070A12] text-slate-400 pt-12 pb-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; 2026 XPOOL Technology Pvt Ltd. MS Family.</p>
        <div class="flex items-center gap-4">
          <a href="/privacy-policy" class="text-emerald-400 hover:underline">Privacy Policy</a>
          <a href="/terms" class="hover:text-white transition-colors">Terms</a>
          <a href="/support" class="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  </div>
  `;
}

function prerenderPlugin(): Plugin {
  return {
    name: 'prerender-pages',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

      const routesToPrerender: { route: string; docId: string; pageTitle: string; pageDesc: string }[] = [
        {
          route: 'privacy-policy',
          docId: 'privacy',
          pageTitle: 'MS Family Privacy Policy — Official Data Protection & Privacy Policy',
          pageDesc: 'MS Family Privacy Policy: Official Data Protection & Privacy Policy by XPOOL Technology Pvt Ltd. Learn how we collect, process, and protect your information.'
        },
        {
          route: 'privacy',
          docId: 'privacy',
          pageTitle: 'MS Family Privacy Policy — Official Data Protection & Privacy Policy',
          pageDesc: 'MS Family Privacy Policy: Official Data Protection & Privacy Policy by XPOOL Technology Pvt Ltd.'
        },
        {
          route: 'terms',
          docId: 'terms',
          pageTitle: 'MS Family Terms of Service — Terms & Conditions of Use',
          pageDesc: 'MS Family Terms of Service: Contractual terms, user eligibility, financial utilities disclaimer, and usage rules.'
        },
        {
          route: 'retention',
          docId: 'retention',
          pageTitle: 'MS Family Data Retention Policy — Data Lifecycles & Retention',
          pageDesc: 'MS Family Data Retention Policy: Retention schedules, purge mechanisms, and account deletion rules.'
        },
        {
          route: 'refund-policy',
          docId: 'subscription',
          pageTitle: 'MS Family Subscription & Refund Policy',
          pageDesc: 'MS Family Subscription & Refund Policy: Pricing tiers, billing rules, cancellation, and refund policies.'
        },
        {
          route: 'security',
          docId: 'legal',
          pageTitle: 'MS Family Security & Legal Framework',
          pageDesc: 'MS Family Security & Legal Framework: Data protection, infrastructure security, and legal disclaimers.'
        },
        {
          route: 'about',
          docId: 'about',
          pageTitle: 'About MS Family — Personal & Household Finance',
          pageDesc: 'About MS Family: Smart family finance, local on-device SMS transaction detection, and secure document vault.'
        },
        {
          route: 'support',
          docId: 'contact',
          pageTitle: 'MS Family Support & Help Center',
          pageDesc: 'MS Family Support: Customer care, feature requests, bug reporting, and contact information.'
        },
        {
          route: 'changelog',
          docId: 'changelog',
          pageTitle: 'MS Family Changelog & Release Notes',
          pageDesc: 'MS Family Release Changelog: Version history, features, and production update notes.'
        }
      ];

      for (const item of routesToPrerender) {
        const doc = APP_INFO_DOCS[item.docId];
        if (!doc) continue;

        const renderedContent = renderDocHtml(doc);

        const pageHtml = baseHtml
          .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(item.pageTitle)}</title>`)
          .replace(
            /<meta name="description" content=".*?" \/>/,
            `<meta name="description" content="${escapeHtml(item.pageDesc)}" />\n    <link rel="canonical" href="https://msfamily.vercel.app/${item.route}" />\n    <meta name="robots" content="index, follow" />`
          )
          .replace('<div id="root"></div>', `<div id="root">${renderedContent}</div>`);

        const routeDir = path.join(distDir, item.route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf-8');
        fs.writeFileSync(path.join(distDir, `${item.route}.html`), pageHtml, 'utf-8');
      }

      console.log(`[prerender] Successfully generated ${routesToPrerender.length} static compliance routes.`);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
