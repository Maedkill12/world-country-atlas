type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <section className={`mx-4 sm:mx-8 md:mx-12 ${className}`}>
      {children}
    </section>
  );
}
