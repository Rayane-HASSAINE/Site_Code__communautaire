import { Breadcrumbs } from "@/ui/modules/landing-page/components/breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigations";
import { Container } from "../container/container";
import { UserAccountNavigation } from "../navigation/user-account-navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadCrumbs?: boolean;
  withSidebar?: boolean;
}

export const Layout = ({
  children,
  isDisplayBreadCrumbs = true,
  withSidebar
}: Props) => {
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <>
      <Navigation />
      {isDisplayBreadCrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </>
  );
};
