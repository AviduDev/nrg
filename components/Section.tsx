export default function Section({
  children,
  secName,
  secNumber,
  section,
}: {
  children: React.ReactNode;
  secName: string;
  secNumber: number;
  section: string;
}) {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 border border-blue-900 p-2">
      <div className="self-start border border-x-transparent border-b-blue-900 border-t-transparent">
        {secName}
      </div>
      {children}
      <div className="flex flex-row justify-between self-end  border border-x-transparent border-b-transparent border-t-blue-900">
        <p>{section}</p>
        <p>{secNumber}</p>
      </div>
    </section>
  );
}
