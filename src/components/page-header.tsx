import Navigation from "@/components/navigation";
import PageHeaderLogo from "@/components/page-header-logo";

export default function PageHeader() {
  return (
    <header className="mx-auto flex w-full items-center justify-center border-b-2 border-solid border-white bg-baltimorePurple">
      <div className="flex w-full max-w-pageWidth items-center justify-between p-2">
        <PageHeaderLogo />
        <Navigation />
      </div>
    </header>
  );
}
