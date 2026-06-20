# Ok to Be Offended (OBO) Website

Static website for the **Ok to Be Offended** podcast by **Sharkbar Studio**.

**Live site:** https://lighthearted-tarsier-2cfbf5.netlify.app/

**GitHub:** https://github.com/miturn/obo-website

## Current Files

- `index.html` – Main page (hero, listen, about + crew, merch, sponsors, connect)
- `styles.css` – Custom CSS (navy theme, responsive, nice typography)
- `script.js` – Mobile nav toggle + active section highlighting
- `assets/`
  - `cover-art.png` – Official podcast artwork (shark fin + flag)
  - `sandy.jpg` – Host photo
  - `micah.jpg` – Co-host photo
- `logo.png` – Old mountain logo (kept for now, not used on current site)

## How We Work Together

1. Everything lives in this folder: `C:\Users\micah\obo-website`
2. I (Grok) can read, edit, and propose changes to any file using the tools.
3. You can also edit the files directly in VS Code / your editor.
4. Commit and push changes regularly:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
5. Because Netlify is connected to this GitHub repo, pushing to `main` updates the live site.

## Showing the Co-Host Before Going Live

We will use **Git branches + Pull Requests** for safe previews:

1. Create a work branch:
   ```bash
   git checkout -b preview-for-sandy
   ```

2. Make changes (we do this together).

3. Push the branch:
   ```bash
   git push -u origin preview-for-sandy
   ```

4. On GitHub, open a Pull Request from that branch.

5. Netlify will automatically create a **Deploy Preview** — a unique temporary URL (something like `preview-for-sandy--lighthearted-tarsier-2cfbf5.netlify.app`).

6. Share that preview URL with your co-host. It will not affect the main live site.

7. Once approved, merge the PR to `main`. Netlify deploys the update to production.

## After Restarting Your Computer

Just do this:

```powershell
cd C:\Users\micah\obo-website
```

Then ask me something like:
- "Look at the current OBO site files"
- "What changes did we make last time?"
- "Let's add a new section" / "Update the about text"

I will use tools to read the local files + GitHub so I always know the exact current state.

## Next Steps / Ideas

Tell me what you want to work on. Examples:
- Polish the design or fix mobile
- Add real episode list
- Improve the crew section
- Add a contact form (Netlify Forms)
- Make it easier for co-host to review
- Add more content
- Prepare for "posting it" (custom domain, etc.)

Let's build this together! 🦈

## Tech

- Pure static HTML + CSS + JS (no build step)
- Hosted on Netlify (connected to this GitHub repo)
- Fonts: Bebas Neue + Inter
