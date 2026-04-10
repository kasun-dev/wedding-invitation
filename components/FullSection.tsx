import { ReactNode } from 'react';

type FullSectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export function FullSection({ children, id, className = '' }: FullSectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-dvh snap-start snap-always flex items-center justify-center px-6 py-10 ${className}`}
    >
      <div className="w-full max-w-5xl">{children}</div>
    </section>
  );
}
