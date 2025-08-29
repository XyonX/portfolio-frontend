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

    // Simple markdown to HTML conversion for fallback
    const html = processMarkdown(content);
    setRenderedContent(html);
  }, [content]);

  // Process regular markdown content (non-code blocks)
  const processMarkdown = (text) => {
    return (
      text
        // Images
        .replace(
          /!\[([^\]]*)\]\(([^\)]+)\)/gim,
          '<img src="$2" alt="$1" style="max-width:100%;height:auto;" class="rounded-xl my-6" />'
        )
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
        // Standard Markdown links
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/gim,
          '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-600 dark:text-emerald-400 hover:underline">$1</a>'
        )
        // Horizontal rule
        .replace(
          /^---$/gim,
          '<hr class="my-8 border-neutral-200 dark:border-neutral-700" />'
        )
        // Unordered lists
        .replace(
          /^\s*[\*\-\+]\s+(.+)$/gim,
          '<li class="ml-4 list-disc">$1</li>'
        )
        // Ordered lists
        .replace(
          /^\s*(\d+)\.\s+(.+)$/gim,
          '<li class="ml-4 list-decimal">$2</li>'
        )
        // Blockquotes
        .replace(
          /^>\s+(.+)$/gim,
          '<blockquote class="pl-4 border-l-4 border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">$1</blockquote>'
        )
        // Convert consecutive list items into proper lists
        .replace(/(<li[^>]*>.*<\/li>)(\s*)(<li[^>]*>)/gim, "$1$2$3")
        // Wrap lists in ul/ol tags
        .replace(
          /(<li class="ml-4 list-disc">.*?<\/li>)/gs,
          '<ul class="my-4">$1</ul>'
        )
        .replace(
          /(<li class="ml-4 list-decimal">.*?<\/li>)/gs,
          '<ol class="my-4">$1</ol>'
        )
        // Task lists
        .replace(
          /^\s*\[ \]\s+(.+)$/gim,
          '<div class="flex items-start my-2"><input type="checkbox" class="mt-1 mr-2" disabled /><span>$1</span></div>'
        )
        .replace(
          /^\s*\[x\]\s+(.+)$/gim,
          '<div class="flex items-start my-2"><input type="checkbox" class="mt-1 mr-2" checked disabled /><span>$1</span></div>'
        )
    );
  };

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
        // Pre-process list items to group them properly
        let processedPart = part;

        // Process regular content
        const sections = processedPart.split("\n\n");
        const processedSections = sections.map((section) => {
          // Check if section is a list
          if (
            section.match(/^\s*[\*\-\+]\s+.+/gm) ||
            section.match(/^\s*\d+\.\s+.+/gm)
          ) {
            // Process as list but keep original line breaks
            return processMarkdown(section);
          } else {
            // Process individual paragraphs
            return section.trim().length > 0
              ? `<p class="my-4 leading-relaxed text-neutral-800 dark:text-neutral-200">${processMarkdown(
                  section
                )}</p>`
              : "";
          }
        });

        const processedContent = processedSections.join("");

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
