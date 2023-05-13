import { Title } from "@/shared/components/ui/title/Title";

interface EventsScreenTitleProps {
  className?: string;
}

export const EventsScreenTitle = ({ className }: EventsScreenTitleProps) => {
  return (
    <div className={`${className} w-1/2`}>
      <Title content="Find events online" className="mb-2" />

      <p className="hidden sm:inline text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum at
        minus odit officia, magni fuga!
      </p>
    </div>
  );
};
