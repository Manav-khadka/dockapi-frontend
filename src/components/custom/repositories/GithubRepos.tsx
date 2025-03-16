import React from 'react';

const dummyRepos = [
  {
    id: 1,
    name: 'awesome-project',
    description: 'An awesome project that does amazing things.',
    private: false,
    updatedAt: '2025-03-10',
  },
  {
    id: 2,
    name: 'dockapi',
    description: 'AI-powered cloud platform for Docker-based projects.',
    private: true,
    updatedAt: '2025-03-12',
  },
  {
    id: 3,
    name: 'codebooter',
    description: 'Next-gen coding bootcamp platform.',
    private: false,
    updatedAt: '2025-03-15',
  },
];

export default function GithubRepos() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Select a GitHub Repository</h1>
      <div className="grid gap-4">
        {dummyRepos.map((repo) => (
          <div
            key={repo.id}
            className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition-all bg-white flex items-center justify-between cursor-pointer"
          >
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                {repo.name}
                {repo.private && (
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-md">
                    Private
                  </span>
                )}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{repo.description}</p>
            </div>
            <div className="text-xs text-gray-400">
              Updated on {repo.updatedAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
