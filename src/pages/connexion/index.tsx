
import { Seo } from "@/ui/components/seo/seo";
import { Layout } from "@/ui/components/layout/layout";
import { LoginContainer } from "@/ui/modules/authentication/login/login.container";

export default function Connexion() {
  return (
    <>
      <Seo
        title="Connexion sur Coders Monkeys"
        description="Page de connexion"
      />

      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
