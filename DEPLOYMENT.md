# VPS Deployment Guide

## Quick Deployment Steps

Your portfolio is ready for deployment! Here's how to deploy it on your VPS:

### 1. Upload Files
Upload the entire `automation-engineer-portfolio` folder to your VPS.

### 2. Install Dependencies
```bash
cd automation-engineer-portfolio
npm install
```

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy Built Files
The `dist` folder contains your production-ready files. You can:

**Option A: Static File Server**
- Copy contents of `dist/` to your web server directory (e.g., `/var/www/html/`)
- Configure your web server (Apache/Nginx) to serve the files

**Option B: Node.js Server**
```bash
npm install -g serve
serve -s dist -l 3000
```

### 5. Web Server Configuration

**Nginx Configuration Example:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Enable gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

**Apache Configuration Example:**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
    </Location>
</VirtualHost>
```

### 6. SSL Certificate (Recommended)
```bash
# Using Let's Encrypt
sudo certbot --nginx -d your-domain.com
```

### 7. Performance Optimizations
- Enable gzip compression
- Set proper cache headers
- Use a CDN for static assets
- Enable HTTP/2

## File Structure
```
automation-engineer-portfolio/
├── dist/                 # Production build (deploy this)
├── src/                  # Source code
├── public/              # Static assets
├── package.json         # Dependencies
├── README.md           # Documentation
└── vite.config.js      # Build configuration
```

## Customization Guide

### Update Personal Information
Edit `src/App.jsx` and update:
- Name and title
- Contact information
- Project details
- Skills and experience
- About section content

### Modify Design
- Colors: Update in `src/App.css`
- Layout: Modify component structure in `src/App.jsx`
- Add sections: Follow existing pattern

### Add Real Project Images
1. Add images to `src/assets/`
2. Update image paths in the projects array
3. Rebuild with `npm run build`

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Backup your customizations before updates

### Content Updates
1. Edit source files
2. Run `npm run build`
3. Upload new `dist/` contents to server

## Support
- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/

Your portfolio is production-ready and optimized for performance!

