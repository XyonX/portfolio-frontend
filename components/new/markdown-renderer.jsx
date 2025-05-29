"use client";

import { useState, useEffect } from "react";
import { CodeBlock } from "./code-block";

export function MarkdownRenderer({ content }) {
  const [renderedContent, setRenderedContent] = useState("");

  useEffect(() => {
    if (!content) {
      setRenderedContent("");
      return;
    }

    // Simple markdown to HTML conversion
    const html = content
      // Headers
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      // Bold
      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*)\*/gim, "<em>$1</em>")
      // Links
      .replace(
        /\[([^\]]*)\]$$([^$$]*)\)/gim,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      // Line breaks
      .replace(/\n\n/gim, "</p><p>")
      // Wrap in paragraphs
      .replace(/^(.*)$/gim, "<p>$1</p>");

    setRenderedContent(html);
  }, [content]);

  // Extract and render code blocks separately
  const renderContentWithCodeBlocks = () => {
    if (!content) return null;

    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        // This is a code block
        const lines = part.slice(3, -3).split("\n");
        const language = lines[0].trim() || "text";
        const code = lines.slice(1).join("\n");

        return <CodeBlock key={index} language={language} code={code} />;
      } else {
        // Regular content
        const processedContent = part
          // Headers
          .replace(
            /^### (.*$)/gim,
            '<h3 class="text-xl font-medium tracking-tight mt-8 mb-4">$1</h3>'
          )
          .replace(
            /^## (.*$)/gim,
            '<h2 class="text-2xl font-semibold tracking-tight mt-10 mb-4">$1</h2>'
          )
          .replace(
            /^# (.*$)/gim,
            '<h1 class="text-3xl font-bold tracking-tight mt-8 mb-4">$1</h1>'
          )
          // Bold
          .replace(
            /\*\*(.*?)\*\*/gim,
            '<strong class="font-semibold">$1</strong>'
          )
          // Italic
          .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
          // Inline code
          .replace(
            /`([^`]+)`/gim,
            '<code class="px-1 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">$1</code>'
          )
          // Links
          .replace(
            /\[([^\]]*)\]$$([^$$]*)\)/gim,
            '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-600 dark:text-emerald-400 hover:underline">$1</a>'
          )
          // Line breaks
          .split("\n\n")
          .map((paragraph) => paragraph.trim())
          .filter((paragraph) => paragraph.length > 0)
          .map(
            (paragraph) =>
              `<p class="my-4 leading-relaxed text-neutral-800 dark:text-neutral-200">${paragraph}</p>`
          )
          .join("");

        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        );
      }
    });
  };

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {renderContentWithCodeBlocks()}
    </div>
  );
}
