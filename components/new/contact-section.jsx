import Link from "next/link";

export function ContactSection() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 md:p-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-mono text-2xl font-semibold mb-4">
          Let's Work Together!
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Have a project in mind? Whether it's game development or web
          application, I'd love to hear about it.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
