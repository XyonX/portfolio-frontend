"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CodeBlock = ({ language, code, filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4 overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
      {/* Header with language name and optional filename */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
        <div className="flex items-center gap-2">
          <span className="font-mono uppercase">{language}</span>
          {filename && (
            <span className="text-neutral-500 dark:text-neutral-400">
              — {filename}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center rounded text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto bg-neutral-50 p-3 text-sm dark:bg-neutral-900">
        <code className={`language-${language} text-neutral-800 dark:text-neutral-200`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock; 