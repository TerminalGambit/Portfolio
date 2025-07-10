# Portfolio Website

A modern, responsive portfolio website built with Angular 19, featuring a clean design with green-blue theming, smooth animations, and comprehensive project showcases.

## ✨ Features

- **Modern Angular Framework**: Built with Angular 19 and Angular Material
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark theme with green-blue accent colors
- **Interactive Animations**: Smooth hover effects and transitions
- **Project Showcase**: Detailed project cards with learning experiences
- **Professional Profile**: Complete about section with education, experience, and skills
- **GitHub Integration**: Live project data from GitHub repositories
- **Performance Optimized**: Lazy loading and optimized bundle sizes

## 🎨 Design

- **Color Scheme**: Dark theme with green (#00ff88) and blue (#00a0b0, #48c4c0) accents
- **Typography**: Inter font family for clean, modern text
- **Components**: Angular Material components with custom styling
- **Layout**: Responsive grid system with smooth scrolling navigation

## 📱 Sections

1. **Home**: Hero section with animated background and call-to-action buttons
2. **About**: Comprehensive profile with education, experience, skills, and certifications
3. **Projects**: Detailed project showcase with GitHub repository integration
4. **Contact**: Contact information and social links

## 🚀 Technologies Used

- **Frontend**: Angular 19, TypeScript, SCSS
- **UI Framework**: Angular Material
- **Icons**: Material Icons
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Pages
- **Version Control**: Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200`

## 📋 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production (SSR)
- `npm run build:gh-pages` - Build for GitHub Pages (static)
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm test` - Run unit tests
- `npm run watch` - Build with file watching

## 🌐 Deployment

The portfolio is configured for easy deployment to GitHub Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. Create a GitHub repository
2. Push your code: `git remote add origin <repo-url> && git push -u origin main`
3. Deploy: `npm run deploy`

Your portfolio will be live at: `https://terminalgambit.github.io/Portfolio/`

## 🎯 Features Breakdown

### Home Section
- Animated hero background
- Profile avatar with hover effects
- Quick stats display
- Call-to-action buttons

### About Section
- Professional profile image
- Education timeline
- Work experience
- Technical skills with chips
- Certifications
- Leadership experience

### Projects Section
- GitHub repository integration
- Project cards with descriptions
- Technology stacks
- "What I Learned" sections
- Live demo and code links

### Contact Section
- Professional contact information
- Social media links
- Contact form placeholder (for static sites)

## 🎨 Customization

### Colors
Update the CSS variables in `src/styles.scss`:
```scss
:root {
  --accent-bright: #00ff88;    // Primary green
  --accent-blue: #00a0b0;      // Primary blue
  --accent-cyan: #48c4c0;      // Light blue/cyan
}
```

### Profile Information
Update personal information in the component files:
- `about.component.ts` - Personal details, education, experience
- `projects.component.ts` - Project information
- `contact.component.ts` - Contact details

### Profile Image
Replace `src/assets/images/profile.jpg` with your own image.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🔧 Performance

- Lazy loading for route components
- Optimized CSS bundles
- Image optimization
- Minimal external dependencies
- Tree-shaking enabled

## 👤 Author

**Jack Massey**
- GitHub: [@jackmassey](https://github.com/jackmassey)
- LinkedIn: [Jack Massey](https://www.linkedin.com/in/masseyjack/)

## 🙏 Acknowledgments

- Angular team for the excellent framework
- Material Design team for the component library
- GitHub for hosting and Pages deployment
