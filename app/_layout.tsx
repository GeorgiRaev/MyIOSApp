import { Stack } from 'expo-router';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Stack />
      </LanguageProvider>
    </ThemeProvider>
  );
}
