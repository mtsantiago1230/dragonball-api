[![Deploy to GitHub Pages](https://github.com/mtsantiago1230/dragonball-api/actions/workflows/pipeline.yml/badge.svg)](https://github.com/mtsantiago1230/dragonball-api/actions/workflows/pipeline.yml)

# Anime VD

A React Native app built with Expo, NativeWind (Tailwind CSS), and React Navigation. It lists Dragon Ball characters from the [Dragon Ball API](https://dragonball-api.com/api/characters) and shows details for each character.

## Features

- List Dragon Ball characters
- View character details with description
- Navigation between screens
- Styled with Tailwind CSS (NativeWind)

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the Expo server:**
   ```sh
   npx expo start
   ```
3. **Run on your device:**
   - Use the Expo Go app (Android/iOS) or an emulator.

## Project Structure

- `App.js`: Main app entry point, navigation setup
- `screens/CharacterListScreen.js`: Lists all characters
- `screens/CharacterDetailScreen.js`: Shows character details
- `components/CharacterCard.js`: Card component for each character

## API Reference

- List characters: `https://dragonball-api.com/api/characters`
- Character details: `https://dragonball-api.com/api/characters/{id}`

## Styling

- Uses [NativeWind](https://www.nativewind.dev/) for Tailwind CSS in React Native.

## Navigation

- Uses [React Navigation](https://reactnavigation.org/) for routing between screens.

---

Feel free to contribute or customize!
