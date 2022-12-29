import { Link as RouterLink, LinkProps  } from 'react-router-dom';

function Link({ to, children, ...props }: LinkProps) {
  return (
    <RouterLink to={to} {...props}>
    {children}
  </RouterLink>
  )
}

export default Link;
