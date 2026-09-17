import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';



export default function Footer() {
  // navigation removed per design: Quick Links and Connect With Us removed

  const [forks, setForks] = useState<any[]>([]);
  const [loadingForks, setLoadingForks] = useState(true);
  const [forksError, setForksError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const CACHE_KEY = 'slug_forks_cache_v1';
    const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

    async function fetchForks() {
      try {
        // Try cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.ts < CACHE_TTL) {
            setForks(parsed.data || []);
            setLoadingForks(false);
            return;
          }
        }

        const res = await fetch(
          'https://api.github.com/repos/NireekshaAP07/SLUG-website/forks?per_page=12',
          { signal: controller.signal }
        );

        if (res.status === 403) {
          setForksError('Rate limited by GitHub API. Try again later.');
          setLoadingForks(false);
          return;
        }

        if (!res.ok) throw new Error('Failed to fetch forks');
        const data = await res.json();
        setForks(data || []);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        } catch (e) {
          // ignore storage errors
        }
      } catch (e) {
        console.error('Error fetching forks', e);
        setForksError('Unable to load forks');
      } finally {
        setLoadingForks(false);
      }
    }
    fetchForks();
    return () => controller.abort();
  }, []);

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-yellow-500 to-teal-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* Programs Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-xl md:text-2xl font-semibold text-white">Programs</h4>
              <ul className="text-base md:text-lg text-gray-400 space-y-2">
                <li className="transition-colors hover:text-teal-400">GSoC</li>
                <li className="transition-colors hover:text-teal-400">GSSoC</li>
                <li className="transition-colors hover:text-teal-400">SSoC</li>
              </ul>
            </motion.div>
          </div>

          {/* Source Code Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-xl md:text-2xl font-semibold text-white">Source Code</h4>
              <div className="text-base md:text-lg text-gray-400">
                <a
                  href="https://github.com/NireekshaAP07/SLUG-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-teal-400 hover:text-teal-300 mb-2"
                >
                  View this website on GitHub
                </a>
                <p className="text-sm md:text-base text-gray-400">Anyone can contribute — open issues and submit pull requests.</p>
              </div>
            </motion.div>
          </div>

          {/* Forks Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-xl md:text-2xl font-semibold text-white">Forks</h4>
              <div className="text-base md:text-lg text-gray-400">
                <div className="flex w-full gap-2 overflow-x-auto py-1">
                  {loadingForks ? (
                    <span className="text-sm text-gray-500">Loading forks…</span>
                  ) : forksError ? (
                    <span className="text-sm text-gray-500">{forksError}</span>
                  ) : forks && forks.length > 0 ? (
                    forks.slice(0, 12).map((f) => (
                      <a
                        key={f.id}
                        href={f.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Fork by ${f.owner.login}`}
                        className="flex flex-shrink-0 items-center gap-2 rounded bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-teal-600 hover:text-white"
                      >
                        <img src={f.owner.avatar_url} alt={f.owner.login} className="h-6 w-6 md:h-8 md:w-8 rounded-full" />
                        <span className="whitespace-nowrap">{f.owner.login}</span>
                      </a>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">No forks yet — be the first!</span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-400 md:text-left">
              © {new Date().getFullYear()} SLUG - Sapthagiri Libre-Software Users Group.
              All rights reserved.
            </p>
            
          </div>

          {/* Open Source Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Proudly powered by open-source technologies.{' '}
              <span className="text-yellow-500">🐧</span> Linux |{' '}
              <span className="text-teal-500">⚛️</span> React |{' '}
              <span className="text-teal-500">🎨</span> Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-teal-600 opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-600 opacity-5 blur-3xl" />
    </footer>
  );
}