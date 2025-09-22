interface Props {
  children: React.ReactNode;
}
/**
 * Alert component that displays its children inside a styled alert box.
 *
 * @param children - The content to be displayed inside the alert.
 * @returns A div element with alert styling containing the provided children.
 */
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
