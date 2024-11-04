export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='flex flex-col items-center p-4'>{children}</main>
    </>
  );
}
