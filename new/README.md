# 美食速递 — Food Delivery App Prototype

React Native (Expo) + TypeScript food delivery prototype with bottom tabs and stack navigation. No backend required — all data is mocked.

## Tech stack

- **Expo** ~53
- **React Navigation** (bottom tabs + native stack)
- **TypeScript**
- Minimal dependencies — no UI kits or state libraries

## Run locally

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press `a` / `i` for Android / iOS simulator.

## App structure

```
App.tsx
src/
  components/     # Reusable UI (SearchBar, RestaurantCard, etc.)
  data/mock.ts    # Hardcoded restaurants, menu, checkout data
  navigation/     # Root stack + bottom tabs
  screens/        # Home, Orders, Profile, Restaurant Detail, Checkout
  theme/          # Colors and spacing tokens
```

## Navigation flow

1. **首页** — Browse categories and recommended restaurants
2. Tap **绿意沙拉屋** or **看菜单** → **餐厅详情页**
3. Tap floating cart bar → **结算页**
4. Bottom tabs: **首页** | **订单** | **我的**

## Design

- White backgrounds, subtle gray borders
- Primary accent: `#22C55E` (green)
- Clean, minimalist production-style layout
