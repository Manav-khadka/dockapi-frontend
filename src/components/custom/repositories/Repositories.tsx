"use client";
import React from 'react'
import GithubRepos from '@/components/custom/repositories/GithubRepos';

type RepositoriesProps = {
  selected: string;
}

export default function Repositories({ selected }: RepositoriesProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Selected Repo Provider:</h2>
      <p className="text-gray-700">{selected}</p>

      {/* Render Repositories list based on selected */}
       {selected === "github" && <GithubRepos />}
          {/* {selected === "gitlab" && <GitlabRepos />}
          {selected === "bitbucket" && <BitbucketRepos />} */}
          
    </div>
  );
}
