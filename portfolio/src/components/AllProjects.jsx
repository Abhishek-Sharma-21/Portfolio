import React, { useEffect } from 'react';
import { CONFIG } from '../config';
import CustomCursor from './CustomCursor';
import Footer from './Footer';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden text-(--text-primary) flex flex-col">
      <CustomCursor />
      
      {/* Simple Navigation for Archive */}
      <nav className="fixed top-0 w-full h-16 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-white/5 flex items-center px-6 md:px-12">
        <div className="flex-1">
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="font-mono text-xl font-bold text-[#F7F7F7] glow-cyan hover:text-[#00E5FF] transition-colors cursor-pointer flex items-center gap-2">
            <span className="text-xl">←</span> AS
          </a>
        </div>
      </nav>

      <main className="flex-1 pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <p className="font-mono text-[#00E5FF] mb-2">// Project Archive</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">All Projects</h1>
          <p className="text-[#8A8A8A] text-xl max-w-2xl">A complete list of things I've built, experimented with, or contributed to.</p>
        </div>

        <div className="overflow-x-auto pb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[#F7F7F7] font-mono text-sm">
                <th className="py-4 pr-4 pl-2 font-semibold">Year</th>
                <th className="py-4 pr-4 font-semibold">Project</th>
                <th className="py-4 pr-4 font-semibold hidden md:table-cell">Made at</th>
                <th className="py-4 pr-4 font-semibold hidden lg:table-cell">Built with</th>
                <th className="py-4 pl-4 font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {CONFIG.projects.map((project, i) => (
                <tr key={project.id || i} className="border-b border-white/5 hover:bg-white/2 transition-colors group">
                  <td className="py-6 pr-4 pl-2 font-mono text-[#00E5FF]/70 text-sm align-top">{project.year || new Date().getFullYear()}</td>
                  <td className="py-6 pr-4 align-top">
                    <div className="font-bold text-[#F7F7F7] text-lg mb-1 group-hover:text-[#00E5FF] transition-colors">{project.title}</div>
                    <div className="text-sm text-[#8A8A8A] lg:hidden mb-2">{project.description}</div>
                  </td>
                  <td className="py-6 pr-4 text-[#8A8A8A] hidden md:table-cell align-top text-sm">{project.status}</td>
                  <td className="py-6 pr-4 hidden lg:table-cell align-top">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-[#8A8A8A] bg-white/5 px-2 py-1 rounded border border-white/5">{t}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-6 pl-4 align-top">
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-[#8A8A8A] hover:text-[#00E5FF] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-[#8A8A8A] hover:text-[#00E5FF] transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
