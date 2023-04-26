import spinnerStyle from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={spinnerStyle.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
