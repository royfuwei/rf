import { NavListProps } from '../type';
import NavItem from './nav-item';

export default function NavList({
  data,
  depth,
  slotProps,
}: Readonly<NavListProps>) {
  const active = false;
  return (
    <NavItem
      //
      title={data.title}
      path={data.path}
      icon={data.icon}
      info={data.info}
      roles={data.roles}
      caption={data.caption}
      disabled={data.disabled}
      //
      depth={depth}
      hasChild={!!data.children}
      externalLink={data.path.includes('http')}
      currentRole={slotProps?.currentRole}
      //
      active={active}
      className={active ? 'active' : ''}
      sx={{
        mb: `${slotProps?.gap}px`,
        ...(depth === 1 ? slotProps?.rootItem : slotProps?.subItem),
      }}
    ></NavItem>
  );
}
