# Okie Tokyo Tea

A premium web experience for a high-end matcha brand, bridging centuries-old Japanese tradition with modern elegance.

## Architecture & Project Structure
The project follows **Feature-Sliced Design (FSD)**, a modern architectural pattern. Here is how the project is organized:

```
src/
 ├─ app/           # App-wide settings, providers, and styles
 ├─ pages/         # High-level composition of application pages
 ├─ widgets/       # Autonomous UI blocks combining features (e.g., Navbar)
 ├─ features/      # User-facing business logic and interactions (e.g., Cart)
 ├─ entities/      # Business entities (e.g., Product, Blog Post)
 ├─ shared/        # Reusable helpers, UI kit, and low-level tools
 └─ main.tsx       # Entry point
```

This ensures the codebase is modular, scalable, and easy to maintain by strictly separating business logic from UI components.

## Key Features
- **Dynamic Localization**: Real-time region detection and manual switching (Global, Gulf, Middle East, Europe).
- **Premium UX**: Smooth animations with Framer Motion and a global toast notification system.
- **Smart Commerce**: Fully decentralized Redux state management for shopping bag and user interactions.
- **Responsive Mastery**: Proportional layouts designed for a flawless experience across all devices.

## Tech Stack
- **Core**: React + TypeScript
- **Styling**: Tailwind CSS
- **State**: Redux Toolkit
- **Animation**: Framer Motion
- **Internationalization**: i18next

---
*Crafted for perfection, just like the perfect bowl of Uji Matcha.*
