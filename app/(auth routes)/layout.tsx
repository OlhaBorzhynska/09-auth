interface Props {
  children: React.ReactNode;
}

export default function AuthRoutesLayout({ children }: Props) {
  return <div>{children}</div>;
}
