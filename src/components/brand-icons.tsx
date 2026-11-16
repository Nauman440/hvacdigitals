import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const base = (path: React.ReactNode, name: string) => {
  const Icon = ({ size = 24, className, ...rest }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {path}
    </svg>
  );
  Icon.displayName = name;
  return Icon;
};

export const Facebook = base(
  <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z" />,
  "Facebook",
);

export const Instagram = base(
  <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.2 8.1c-.1-1.5-.4-2.9-1.5-4-1.1-1.1-2.5-1.4-4-1.5-1.6-.1-6.3-.1-7.9 0-1.5.1-2.9.4-4 1.5S2.4 6.6 2.3 8.1c-.1 1.6-.1 6.3 0 7.9.1 1.5.4 2.9 1.5 4 1.1 1.1 2.5 1.4 4 1.5 1.6.1 6.3.1 7.9 0 1.5-.1 2.9-.4 4-1.5 1.1-1.1 1.4-2.5 1.5-4 .1-1.6.1-6.3 0-7.9zm-2 9.6a3.2 3.2 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.4.4s-4.2.1-5.4-.4a3.2 3.2 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7a3.2 3.2 0 0 1 1.8-1.8c1.3-.5 4.3-.4 5.4-.4s4.2-.1 5.4.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />,
  "Instagram",
);

export const Linkedin = base(
  <path d="M6.9 21H3.2V9h3.7v12zM5 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3zM21 21h-3.7v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.4V9h3.5v1.6h.1c.5-.9 1.7-2 3.5-2 3.8 0 4.5 2.5 4.5 5.7V21z" />,
  "Linkedin",
);

export const Youtube = base(
  <path d="M22.5 7.2a2.8 2.8 0 0 0-2-2c-1.7-.5-8.5-.5-8.5-.5s-6.8 0-8.5.5a2.8 2.8 0 0 0-2 2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.8 2.8 0 0 0 2 2c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a2.8 2.8 0 0 0 2-2c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z" />,
  "Youtube",
);

export const Twitter = base(
  <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" />,
  "Twitter",
);
