import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IconTypes } from "../../components/Icon";

type RoutePage = {
  title: string;
  link?: string;
  icon: IconTypes;
  description?: string;
  onClick?: () => void;
};

const routes = [
  {
    title: "Home",
    icon: "home",
    link: "/orders",
    description: "Acompanhe os pedidos dos clientes",
  },
  {
    title: "Histórico",
    icon: "order",
    link: "/orders/list",
    description: "Visualize pedidos anteriores",
  },
  {
    title: "Cardápio",
    icon: "menu",
    link: "/menu",
    description: "Gerencie os produtos do seu estabelecimento",
  },
  {
    title: "Usuários",
    icon: "users",
    link: "/users",
    description: "Cadastre e gerencie seus usuários",
  },
  {
    title: "Meu perfil",
    icon: "profile",
    // TODO
    onClick: () => {},
  },
  {
    title: "Sair",
    icon: "log-off",
    // TODO
    onClick: () => {},
  },
] satisfies RoutePage[];

function useRoutesStore() {
  const { pathname } = useLocation();

  const getActiveRoute = useCallback(
    () => routes.find(({ link }) => link === pathname),
    [routes, pathname]
  );

  return { routes, utils: { getActiveRoute } };
}

export default useRoutesStore;
