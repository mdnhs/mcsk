import Navigation from "@/components/navigation";
import PageHeaderLogo from "@/components/page-header-logo";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-40 mx-auto flex w-full items-center justify-center border-b border-white/10 bg-baltimorePurple/90 backdrop-blur-xl">
      <div className="flex w-full max-w-pageWidth items-center justify-between gap-4 px-4 py-3">
        <PageHeaderLogo />
        <Navigation />
      </div>
    </header>
  );
}
