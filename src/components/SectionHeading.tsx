interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
