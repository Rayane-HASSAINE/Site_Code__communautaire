import { firebaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot sur Coders Monkeys");
  };

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-compte">Mon compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
        </Typography>
      </div>
      <Button action={handleLogOutUser} variant="danger">
        Deconnexion
      </Button>
    </Box>
  );
};
