import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Layout } from "@/ui/components/layout/layout";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill } from "react-icons/ri";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";
import { RegisterContainer } from "@/ui/modules/authentication/register/register.container";

export default function Inscription() {
  return (
    <>
      <Seo
        title="Inscription sur Coders Monkeys"
        description="Page d'inscription"
      />

      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
}
