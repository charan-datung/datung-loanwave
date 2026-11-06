# Architecture rules

- Public legal documents use dedicated React routes with the shared Navbar, Footer, and Seo components so they remain readable, indexable, and consistently maintained.
- Standalone crawler-facing or audience-specific pages explicitly requested as raw HTML remain static files under `public/`, with ordinary links so their text is available without JavaScript.