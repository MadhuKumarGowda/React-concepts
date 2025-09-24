interface Props {
  productsCount: number;
}
const Navbar = ({ productsCount }: Props) => {
  return (
    <>
      <h3> product count is : {productsCount}</h3>
    </>
  );
};

export default Navbar;
