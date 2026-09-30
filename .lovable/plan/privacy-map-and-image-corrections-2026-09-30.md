# Privacy, map, and image corrections

## What will change
- Add a dedicated `/privacy-policy` page using the uploaded policy, correcting obvious document typos such as “dating.io” and “Dating” to “datung.io” and “Datung.”
- Add a clearly visible Privacy Policy link in the site footer and include the page in the sitemap.
- Keep the legal meaning intact while presenting the policy in a readable, mobile-friendly layout.
- Replace any people photos confirmed to have extra hands, fingers, or other visible anatomy errors with natural, credible alternatives.
- Correct the office map so it reliably shows Datung Building in Sucat, remains readable on small screens, and keeps a direct directions fallback.

## Validation
- Check the Privacy Policy page and footer link on desktop and mobile.
- Inspect every replaced image at full size before using it.
- Open the homepage map and directions link to confirm the intended place appears.
- Verify all affected routes load without visible errors.

## Technical details
- Add one React page and route, reuse the existing navigation, footer, and SEO patterns, and update the XML sitemap.
- Use a keyless Google Maps embed for the exact office address so the map works on the existing domains without exposing credentials.
