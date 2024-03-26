import { CallToActionView } from "@/ui/design-system/call-to-action.view.tsx/call-to-action.view";
import { CodersMonkeysSlackView } from "./components/coders-monkeys-slack.tsx/coders-monkey-slack.view";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersMonkeysSlackView />
      <CurrentCourseCtaView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
