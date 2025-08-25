# 🌊 Voger Bodrum Anniversary Card

An elegant, interactive 10th Anniversary celebration card designed for **Voger Bodrum by The Sea** hotel guests. This premium digital experience features a beautiful envelope opening animation with a heartfelt congratulatory message from the hotel.

![Anniversary Card Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎭 **Interactive Envelope Animation** - Click to open and reveal the letter
- 💌 **Elegant Letter Reading** - Smooth pull-out animation with scroll functionality
- 🎨 **Premium Design** - Gold and rose-gold color palette matching luxury hotel branding
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🌟 **3D Effects** - Beautiful shadows, hover effects, and smooth transitions
- 🏨 **Hotel Branding** - Professional message from Voger Bodrum by The Sea team

## 🚀 Demo

**Live Demo**: [View the Anniversary Card](https://efe184.github.io/Voger-Bodrum-Anniversary-Card/)

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations and responsive design
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - Dancing Script & Poppins typography

## 📁 Project Structure

```
voger-bodrum-anniversary-card/
├── index.html          # Main page with interactive card
├── styles.css          # Premium styling and animations
├── script.js           # Interactive envelope/letter functionality
└── README.md           # Project documentation
```

## 🎯 How to Use

### For Hotel Staff:
1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
3. **Present to guests** on tablet/computer for their anniversary celebration
4. **Guests can interact** by clicking the envelope to open and read the message

### For Developers:
```bash
# Clone the repository
git clone https://github.com/Efe184/Voger-Bodrum-Anniversary-Card.git

# Navigate to project directory
cd Voger-Bodrum-Anniversary-Card

# Open in browser or serve locally
open index.html
# OR
python -m http.server 8000
```

## 🎨 Customization Guide

### Personalizing the Message

Edit the letter content in `index.html`:

```html
<div class="letter-content">
    <h2>Dear Valued Guests,</h2>
    <p>Your personalized anniversary message here...</p>
    <div class="signature">
        "Your hotel signature"
    </div>
</div>
```

### Updating Hotel Branding

Modify colors in `styles.css`:

```css
/* Primary gold color */
--gold-primary: #d4af37;

/* Background gradient */
background: linear-gradient(135deg, #faf3e8 0%, #f4e4c8 100%);

/* Envelope colors */
--envelope-primary: #d4b8a3;
--envelope-secondary: #e6c497;
```

### Adjusting Animations

Fine-tune timing in `styles.css`:

```css
/* Envelope opening speed */
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

/* Letter pull-out animation */
transform: translateY(-200px) scale(1.1);
```

## 🏨 Hotel Integration

### Digital Display Setup
- **Tablet/Computer**: Full-screen kiosk mode
- **Smart TV**: Mirror from tablet or direct browser
- **Mobile**: Share via QR code or direct link

### Guest Experience Flow
1. **Welcome**: Guest receives tablet/device
2. **Interaction**: Guest clicks envelope to open
3. **Message**: Personal anniversary congratulations appear
4. **Keepsake**: Option to screenshot or share

## 📱 Browser Compatibility

- ✅ **Chrome** 60+
- ✅ **Firefox** 60+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- **CSS Animations** - Hardware accelerated
- **Optimized Assets** - Minimal external dependencies
- **Responsive Images** - Efficient loading
- **Clean Code** - Maintainable and fast

## 🔧 Development

### Local Development
```bash
# Serve locally with Python
python -m http.server 8000

# Or with Node.js
npx serve .

# Or with PHP
php -S localhost:8000
```

### Making Changes
1. Edit files in your preferred code editor
2. Refresh browser to see changes
3. Test on multiple devices/browsers

## 📄 License

This project is designed specifically for **Voger Bodrum by The Sea** hotel. 

## 🤝 Contributing

Hotel staff and developers are welcome to suggest improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-improvement`)
3. Commit changes (`git commit -m 'Add amazing improvement'`)
4. Push to branch (`git push origin feature/amazing-improvement`)
5. Open a Pull Request

## 📞 Support

For technical support or customization requests:

- **Email**: [Your Contact Email]
- **GitHub Issues**: [Create an Issue](https://github.com/Efe184/Voger-Bodrum-Anniversary-Card/issues)

---

<div align="center">

**Made with ❤️ for Voger Bodrum by The Sea**

*Creating unforgettable anniversary moments in paradise*

</div>