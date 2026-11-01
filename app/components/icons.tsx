import type { CSSProperties, ReactNode } from "react";

const icons = {
  arrow: <path d="M5 12h14M12 5l7 7-7 7" />,
  down: <path d="m6 9 6 6 6-6" />,
  spine: (
    <>
      <path d="M12 2.5c-1.4 0-2.2 1.1-1.7 2.3.4.9.4 1.4-.2 2.1-.7.7-.6 1.8.1 2.4.7.7.6 1.7-.1 2.4-.7.7-.7 1.8.1 2.5.7.7.7 1.6 0 2.4-.7.7-.6 1.8.2 2.4.7.6.7 1.2.3 2.2-.5 1.1.3 2.3 1.7 2.3s2.2-1.2 1.7-2.3c-.4-1-.4-1.6.3-2.2.8-.6.9-1.7.2-2.4-.7-.8-.7-1.7 0-2.4.8-.7.8-1.8.1-2.5-.7-.7-.8-1.7-.1-2.4.7-.6.8-1.7.1-2.4-.6-.7-.6-1.2-.2-2.1.5-1.2-.3-2.3-1.7-2.3Z" />
      <path d="M9.4 8.7h5.2M9.2 12h5.6m-5.2 3.3h4.8" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  insta: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  facebook: (
    <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
  ),
  x: (
    <>
      <path d="M5 4h4l10 16h-4L5 4Z" />
      <path d="m5 20 6-7M13 11l6-7" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

export function Icon({ name, style }: { name: IconName; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" style={style}>
      {icons[name]}
    </svg>
  );
}
