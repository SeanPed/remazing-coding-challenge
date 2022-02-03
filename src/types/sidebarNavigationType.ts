export type sidebarNavigationType = {
  title: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpen?: JSX.Element;
  link: string;
  subNav?: [
    {
      title: string;
      icon: JSX.Element;
      link: string;
    }
  ];
};
