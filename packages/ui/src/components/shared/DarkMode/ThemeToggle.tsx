'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '#components/ui/button';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mount, setMount] = React.useState<boolean>(false);

  const isDark = resolvedTheme === 'dark';

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
