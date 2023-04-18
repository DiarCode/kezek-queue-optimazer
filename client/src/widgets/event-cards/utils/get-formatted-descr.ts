import moment from "moment";

interface getFormattedDescriptionProps {
  text: string;
  date: Date;
  maxSize?: number;
}

export const getFormattedDescription = ({
  text,
  date,
  maxSize = 60,
}: getFormattedDescriptionProps) => {
  const formattedDate = moment(date).format("MMMM Do YYYY, hh:mm a");
  const str = `${text.slice(0, maxSize)}...`;
  return [str, formattedDate] as const;
};
