import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme, type ThemePreference } from '../hooks/useTheme';

const themeOptions: Array<{ value: ThemePreference; label: string }> = [
  { value: 'system', label: 'Sistema' },
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
];

export function ThemeControl() {
  const { preference, setPreference } = useTheme();
  const Icon = preference === 'dark' ? Moon : preference === 'light' ? Sun : SunMoon;

  return (
    <label className="theme-control">
      <Icon aria-hidden="true" size={18} />
      <span className="sr-only">Tema visual</span>
      <select
        aria-label="Seleccionar tema visual"
        value={preference}
        onChange={(event) => setPreference(event.target.value as ThemePreference)}
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
