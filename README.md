# Industrial Automation Engineer Portfolio

A modern, responsive portfolio website for showcasing industrial automation and robotics engineering expertise.

## Features

- **Modern Design**: Dark theme with professional color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Professional Sections**: Hero, About, Projects, Skills, Experience, Contact
- **SEO Optimized**: Meta tags and structured data for search engines
- **Performance Optimized**: Fast loading with modern web technologies

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Animations**: CSS transitions and transforms
- **Build Tool**: Vite for fast development and optimized builds

## Project Structure

```text
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and design assets
│   ├── components/        # React components
│   │   └── ui/           # UI component library
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and Tailwind config
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## Design System

### Color Palette
- **Primary Background**: #1a1d29 (Deep Navy)
- **Secondary Background**: #2d3142 (Charcoal Gray)
- **Primary Accent**: #3b82f6 (Electric Blue)
- **Secondary Accent**: #f97316 (Bright Orange)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)

### Typography
- **Primary Font**: Inter (Headers and body text)
- **Monospace Font**: JetBrains Mono (Code and technical content)

## Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd automation-engineer-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The project is optimized for deployment on modern hosting platforms:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform of choice:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

## Customization

### Content Updates
- Update personal information in `src/App.jsx`
- Modify project data in the `projects` array
- Update skills and experience sections
- Replace placeholder contact information

### Design Customization
- Color scheme can be modified in `src/App.css`
- Component styling uses Tailwind CSS classes
- Custom animations and transitions in CSS

### Adding New Sections
1. Create new section component
2. Add to main App component
3. Update navigation menu
4. Add smooth scrolling behavior

## Performance Optimizations

- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Optimization**: Tree shaking and minification
- **Lazy Loading**: Images and components load on demand

## SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this portfolio template or customization services:
- Email: john.smith@email.com
- LinkedIn: [John Smith](https://linkedin.com/in/johnsmith)
- GitHub: [johnsmith](https://github.com/johnsmith)

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.

