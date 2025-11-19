import Header from "@/app/components/shared/header";
import Footer from "@/app/components/shared/footer";

export default function SeekerWithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

