export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full">
      <div className="h-1/5 w-full bg-green-100 pt-28">mokcm okc</div>
      {children}
    </div>
  );
}