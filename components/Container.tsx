export default function Container({
  children,
  sectionName,
  sectionNumber,
}: {
  children: React.ReactNode;
  sectionName: string;
  sectionNumber: number;
}) {
  return (
    <div className="container flex flex-col">
      <div className="w-full border border-b-blue-900">
        <p>{sectionName}</p>
      </div>
      {children}
      <div className="flex w-full flex-row justify-between border border-t-blue-900">
        <p>Section</p> <p>{sectionNumber}</p>
      </div>
    </div>
  );
}
