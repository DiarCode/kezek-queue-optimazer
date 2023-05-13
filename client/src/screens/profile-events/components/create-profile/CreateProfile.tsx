import { Button } from "@/shared/components/ui/buttons/Button";
import { useState } from "react";
import { CreateProfileModal } from "./CreateProfileModal";

export const CreateProfile = () => {
  const [visible, setVisible] = useState(false);

  const setVisibleState = () => {
    setVisible(prev => !prev);
  };

  return (
    <>
      <Button solid onClick={setVisibleState}>
        Create Event
      </Button>

      <CreateProfileModal visible={visible} setVisibleState={setVisibleState} />
    </>
  );
};
