//COMPONENT
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigations";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

//ICO
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />

      <Navigation />
      <Layout>
        <Container className="py-10 space-y-10">
          {/*Typography*/}
          <div className="space-y-2">
            <Typography theme="primary" variant="h1" component="div">
              Coders Monkeys
            </Typography>
            <Typography theme="secondary" variant="lead" component="div">
              Coders Monkeys
            </Typography>
            <Typography variant="body-sm" component="div">
              Coders Monkeys
            </Typography>
            <Typography variant="caption4" component="div">
              Coders Monkeys
            </Typography>
            <Typography variant="caption4" weight="medium" component="div">
              Coders Monkeys
            </Typography>
          </div>

          <div className="flex items-start gap-7">
            {/*Spinners*/}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Spinners
              </Typography>

              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Spinner size="small" />
                <Spinner />
                <Spinner size="large" />
              </div>
            </div>

            {/*Avatar*/}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Avatar
              </Typography>

              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Avatar
                  size="small"
                  src="/assets/images/grande-image.jpg"
                  alt="Avatar de Daniel Lincoln"
                />
                <Avatar
                  size="medium"
                  src="/assets/images/grande-image.jpg"
                  alt="Avatar de Daniel Lincoln"
                />
                <Avatar
                  size="large"
                  src="/assets/images/grande-image.jpg"
                  alt="Avatar de Daniel Lincoln"
                />
              </div>
            </div>

            {/*Logo*/}
            <div className="space-y-2">
              <Typography variant="caption2" weight="medium">
                Logo
              </Typography>

              <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                <Logo size="very-small" />
                <Logo size="small" />
                <Logo size="medium" />
                <Logo size="large" />
              </div>
            </div>
          </div>

          {/*Button*/}
          <div className="space-y-2">
            <div className="flex items-center gap-4 p-10">
              <Button isLoading size="small">
                Accent
              </Button>

              <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
                Accent
              </Button>

              <Button
                isLoading
                size="small"
                icon={{ icon: RiUser6Fill }}
                iconPosition="left"
              >
                Accent
              </Button>

              <Button isLoading size="small" variant="secondary">
                {" "}
                Secondary{" "}
              </Button>
              <Button isLoading size="small" variant="outline">
                {" "}
                Accent{" "}
              </Button>
              <Button isLoading size="small" variant="disabled" disabled>
                {" "}
                Accent{" "}
              </Button>
              <Button
                isLoading
                size="small"
                variant="ico"
                icon={{ icon: RiUser6Fill }}
              />
            </div>

            <div className="flex items-center gap-4 p-10">
              <Button>Accent</Button>
              <Button variant="secondary"> Secondary </Button>
              <Button variant="outline"> Accent </Button>
              <Button variant="disabled" disabled>
                {" "}
                Accent{" "}
              </Button>
              <Button variant="ico" icon={{ icon: RiUser6Fill }} />
            </div>

            <div className="flex items-center gap-4 p-10">
              <Button size="large">Accent</Button>
              <Button size="large" variant="secondary">
                {" "}
                Secondary{" "}
              </Button>
              <Button size="large" variant="outline">
                {" "}
                Accent{" "}
              </Button>
              <Button size="large" variant="disabled" disabled>
                {" "}
                Accent{" "}
              </Button>
              <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
              <Button
                size="large"
                variant="ico"
                icon={{ icon: RiUser6Fill }}
                iconTheme="gray"
              />
              <Button
                size="large"
                variant="ico"
                icon={{ icon: RiUser6Fill }}
                iconTheme="secondary"
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
