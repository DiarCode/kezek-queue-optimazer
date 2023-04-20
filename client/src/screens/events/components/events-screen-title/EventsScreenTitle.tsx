interface EventsScreenTitleProps {
  className?: string;
}

export const EventsScreenTitle = ({ className }: EventsScreenTitleProps) => {
  return (
    <div className={`${className} w-1/2`}>
      <h1 className="font-bold text-2xl sm:text-4xl sm:mb-3">
        Find events online
      </h1>
      <p className="hidden sm:inline text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum at
        minus odit officia, magni fuga!
      </p>
    </div>
  );
};
