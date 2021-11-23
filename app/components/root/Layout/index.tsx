type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};
