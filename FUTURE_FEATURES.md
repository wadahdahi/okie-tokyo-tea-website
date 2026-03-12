# 🚀 Okie Tokyo Tea - Future Roadmap

This document tracks high-level features and architectural enhancements planned for future development phases.

## 🟢 Phase 2: User Persistence & Smart Features

### 1. Smart Cart / Cloud Synchronization
- **Current State**: Local-only cart (Redux + LocalStorage).
- **Future State**:
    - Automatic synchronization with **Firebase Firestore** when a user is logged in.
    - **Cross-Device Continuity**: Add products on mobile, find them on desktop.
    - **Abandoned Cart Recovery**: Track items left in cart to send reminder emails or offer discounts.
    - **Guest-to-User Merge**: If a guest adds items and then logs in, merge the local cart with their cloud-saved cart.

### 2. Live Stock Validation
- Check product availability in real-time against Firestore before allowing "Add to Bag".
- Synchronized inventory across all users.

### 3. Advanced User Profiles
- Order history with re-order capabilities.
- Saved addresses and payment methods.
- Matcha Loyalty Program (Reward points for purchases).

---
*Last Updated: 2026-03-11*
