# Moodtask Website

A conversion-focused landing page for Moodtask, a habit tracking and mood management app. 

## Features

- Responsive, mobile-first design
- Fast-loading with vanilla HTML, CSS, and JavaScript
- SEO-optimized structure
- Conversion-focused layout with email signup forms
- Integrated blog with three articles
- Affiliate marketing opportunities
- Social sharing capabilities

## File Structure

```
moodtask-website/
├── index.html          # Main landing page
├── blog.html           # Blog page with 3 articles
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Would contain website images (using placeholders for now)
└── README.md           # This file
```

## Deployment to GitHub Pages

Follow these steps to deploy the website to GitHub Pages:

1. **Create a new repository on GitHub**

   - Go to [GitHub](https://github.com) and sign in to your account
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "moodtask-website")
   - Keep it public
   - Click "Create repository"

2. **Initialize the repository locally**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/moodtask-website.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**

   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for deployment
   - Your site will be available at `https://yourusername.github.io/moodtask-website/`

4. **Set up a custom domain (optional)**

   - In the GitHub Pages section of repository settings
   - Enter your domain in the "Custom domain" field
   - Click "Save"
   - Configure your DNS with your domain provider:
     - Add a CNAME record pointing to `yourusername.github.io`
   - Add a file named `CNAME` to your repository containing your domain name

## Customization

### Placeholder Images

Current images are using placeholder links. Replace them with your actual app screenshots and images:

1. Add your images to the `images/` directory
2. Update image paths in HTML files from placeholder URLs to local paths (e.g., `images/hero.jpg`)

### Email Form Integration

The email signup forms are currently set up to use Formspree as an example:

1. Go to [Formspree](https://formspree.io) and create a form
2. Replace the form action URLs in both forms with your unique Formspree endpoint or your own form handling service

### Affiliate Links

Replace the Amazon affiliate links with your own:

1. Sign up for Amazon Associates
2. Generate your own affiliate links
3. Replace the existing links in `index.html` and `blog.html`

## Performance Optimization

For optimal performance:

1. Compress all images before adding them to the website
2. Consider using WebP format for images with a JPEG fallback
3. Add proper caching headers if using a custom server

## Maintenance

Regularly update the blog with new content to improve SEO and keep users engaged.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created for Moodtask - Your Day, Your Mood, Your Transformation. 
