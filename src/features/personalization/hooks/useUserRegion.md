# Geo-Targeted Personalization (Localization Logic)

## Overview
This document explains the personalization technique implemented to dynamically change visual assets (like blog images) based on the user's geographical location. This approach creates a tailored, culturally relevant experience for the user without requiring them to manually select a region, ultimately increasing engagement and premium feel.

## How It Works

The architecture relies on three integrated parts:

### 1. The Detection Layer (`useUserRegion.ts`)
This React Hook is responsible for identifying the user's location.
- **Provider**: We fetch geolocation data from a lightweight IP-to-location API (`https://ipapi.co/json/`).
- **Logic**: The API returns a `country_code` (e.g., `"AE"`, `"DE"`, `"EG"`). We evaluate this code against predefined arrays of country codes categorized into conceptual regions:
  - **Gulf**: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman.
  - **Middle East**: Syria, Lebanon, Jordan, Iraq, Egypt, Palestine.
  - **Europe**: Germany, France, UK, Italy, Spain, etc.
- **Output**: The hook exposes a `Region` state (`"global" | "gulf" | "middleEast" | "europe"`). If a user is not in one of the specific regions, or if the API fails, it defaults gracefully to `"global"`.

### 2. The Data Structure (`blogData.ts`)
The content data structure was extended to support region-specific variations.
- We added an optional `localizedImages` object to the `BlogPost` interface.
- This object mapping corresponds exactly to the regions defined by the hook.
- **Example**:
  ```typescript
  localizedImages: {
    gulf: "/assets/images/matcha-gulf-style.webp",
    middleEast: "/assets/images/matcha-levant-style.webp",
    europe: "/assets/images/matcha-eu-style.webp"
  }
  ```

### 3. The Presentation Layer (`BlogPostDetail.tsx`)
The UI components consume both the Hook and the Data structure seamlessly.
- We read the current region via `const region = useUserRegion();`.
- When rendering an image, we use an elegant fallback logical chain:
  ```tsx
  <img src={post.localizedImages?.[region] || post.image} />
  ```
- **Fallback Flow**: Trying to find the assigned `region` image inside `localizedImages`. If it's `undefined` (or if the user is classified as `"global"`), the system falls back seamlessly to the standard default `image` string.

## Scaling
This system is highly scalable. You can easily:
- Add new regions (e.g., `asia`, `americas`) by simply expanding the `Region` type and arrays.
- Localize other data fields beyond images (e.g., `localizedTitles`, `currency`, `shippingBanners`).
