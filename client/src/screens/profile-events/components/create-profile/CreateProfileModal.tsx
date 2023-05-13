import { Button } from "@/shared/components/ui/buttons/Button";
import { InputField } from "@/shared/components/ui/input/Input";
import { Modal } from "@/shared/components/ui/modal/Modal";
import { TextAreaField } from "@/shared/components/ui/text-area/TextArea";
import { FC } from "react";
import { ICreateProfileForm } from "../../types/CreateProfileForm.type";
import { useForm } from "react-hook-form";

interface CreateProfileModalProps {
  visible: boolean;
  setVisibleState: () => void;
}

export const CreateProfileModal: FC<CreateProfileModalProps> = ({
  visible,
  setVisibleState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProfileForm>();

  const onCreateProfileFormSubmit = (data: ICreateProfileForm) => {
    console.log(data);
  };

  return (
    <Modal
      visible={visible}
      setVisibleState={setVisibleState}
      title="Create Event"
    >
      <form
        onSubmit={handleSubmit(onCreateProfileFormSubmit)}
        className="flex flex-col gap-y-6 mb-7"
      >
        <InputField
          label="Title"
          required
          placeholder="Enter title"
          {...register("title", { required: "Title is required" })}
          error={errors.title?.message}
        />

        <TextAreaField
          label="Description"
          required
          placeholder="Enter description"
          type="textarea"
          {...register("description", { required: "Description is required" })}
          error={errors.description?.message}
        />

        <InputField
          label="Display Image"
          type="file"
          required
          placeholder="Upload image"
          accept="image/png, image/jpeg"
          {...register("image", { required: "Image is required" })}
          error={errors.image?.message}
        />

        <InputField
          label="Place Address"
          required
          placeholder="Enter address"
          {...register("address", { required: "Address is required" })}
          error={errors.address?.message}
        />

        <div className="flex gap-x-6 flex-wrap">
          <InputField
            label="Start Time"
            type="datetime-local"
            required
            placeholder="Enter address"
            {...register("timeBegin", { required: "Start Time is required" })}
            error={errors.timeBegin?.message}
          />

          <InputField
            label="End Time"
            type="datetime-local"
            required
            placeholder="Enter address"
            {...register("timeEnd", { required: "Start End is required" })}
            error={errors.timeEnd?.message}
          />
        </div>

        <Button type="submit" className="w-full" solid>
          Submit
        </Button>
      </form>
    </Modal>
  );
};
