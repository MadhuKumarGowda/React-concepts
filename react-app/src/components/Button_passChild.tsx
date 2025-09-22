interface Props {
  children?: React.ReactNode;
}
const Button_passChild = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Button_passChild;
