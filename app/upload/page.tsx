"use client";
import Image from "next/image";
import React from "react";
import { JSX } from "react";

export default function Home() : JSX.Element {
  const [projectName, setProjectName] = React.useState("");
  const [githubUrl, setGithubUrl] = React.useState("");
  const [deploying, setDeploying] = React.useState(false);
  const [deployed, setDeployed] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  const validateForm = () => {
    if (!projectName || !githubUrl) {
      setFormError("Both fields are required.");
      return false;
    }
    setFormError("");
    return true;
  };

  const deploy = async () => {
    if (!validateForm()) {
      return;
    }
    alert("Deploying...");
    setDeploying(true);
    try {
      const response = await fetch("/api/deploy", {
        method: "POST",
        body: JSON.stringify({ projectName, githubUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to deploy");
      }
      setDeployed(true);
    } catch (e) {
      setError(true);
    } finally {
      setDeploying(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-8">Deploy your React project</h1>
      <div className="flex flex-col items-center justify-center p-5 gap-4 bg-gray-800 rounded-lg shadow-lg">
        <textarea 
          name="project name" 
          id="projectname" 
          placeholder="Enter your project name" 
          className="text-black rounded-lg p-2.5 h-15 w-75"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        ></textarea>
        <textarea 
          name="Github Url" 
          id="githuburl" 
          placeholder="Enter your Github url" 
          className="text-black rounded-lg p-2.5 h-15 w-75"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        ></textarea>
        {formError && <p className="text-red-500">{formError}</p>}
        <button 
          className="bg-blue-500 text-white rounded-lg p-2.5 h-15 w-50 hover:bg-blue-700 transition-colors duration-300"
          onClick={deploy}
          disabled={deploying}
        >
          {deploying ? "Deploying..." : "Deploy"}
        </button>
      </div>
    </div>
  );
}
