import Home from "../Home";

export  interface IRoute {
  Key: string;
  Path: string;
  Component: any;
}

const RouteTs: IRoute[] = [
  {
    Key: "1",
    Path: "/home",
    Component: Home,
  },
];

export default RouteTs;
