import { ForwardRefRenderFunction, forwardRef } from 'react';
import { NavItemProps, NavItemStateProps } from '../type';
import { Box, Link, ListItemButton, alpha, styled } from '@mui/material';
import { RouterLink } from '~rfjs/web/routes/components';

const renderNavItem: ForwardRefRenderFunction<HTMLDivElement, NavItemProps> = (
  {
    title,
    path,
    icon,
    info,
    disabled,
    caption,
    roles,
    //
    open,
    depth,
    active,
    hasChild,
    externalLink,
    currentRole = 'admin',
    ...other
  },
  ref,
) => {
  // const subItem = depth !== 1;

  const renderContent = (
    <StyledNavItem
      ref={ref}
      disableGutters
      open={open}
      depth={depth}
      active={active}
      disabled={disabled}
      {...other}
    >
      <Box component={'span'} className="icon">
        {icon}
      </Box>
      <Box component={'span'} sx={{ flex: '1 1 auto', minWidth: 0 }}>
        <Box component={'span'} className="label">
          {title}
        </Box>
      </Box>
    </StyledNavItem>
  );
  return (
    <Link
      component={RouterLink}
      href={path}
      color={'inherit'}
      underline={'none'}
      className="icon"
    >
      {renderContent}
    </Link>
  );
};

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(renderNavItem);

export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavItemStateProps>((props) => {
  const { active, open, depth, theme } = props;
  const subItem = depth !== 1;

  const opened = open && !active;

  const deepSubItem = Number(depth) > 2;

  const noWrapStyles = {
    width: '100%',
    maxWidth: '100%',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  } as const;

  const baseStyles = {
    item: {
      marginBottom: 4,
      borderRadius: 8,
      color: theme.palette.text.secondary,
      padding: theme.spacing(0.5, 1, 0.5, 1.5),
    },
    icon: {
      width: 24,
      height: 24,
      flexShrink: 0,
      marginRight: theme.spacing(2),
    },
    label: {
      ...noWrapStyles,
      ...theme.typography.body2,
      textTransform: 'capitalize',
      fontWeight:
        theme.typography[active ? 'fontWeightSemiBold' : 'fontWeightMedium'],
    },
    caption: {
      ...noWrapStyles,
      ...theme.typography.caption,
      color: theme.palette.text.disabled,
    },
    info: {
      display: 'inline-flex',
      marginLeft: theme.spacing(0.75),
    },
    arrow: {
      flexShrink: 0,
      marginLeft: theme.spacing(0.75),
    },
  } as const;

  return {
    // Root item
    ...(!subItem && {
      ...baseStyles.item,
      minHeight: 44,
      '& .icon': {
        ...baseStyles.icon,
      },
      '& .sub-icon': {
        display: 'none',
      },
      '& .label': {
        ...baseStyles.label,
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .info': {
        ...baseStyles.info,
      },
      '& .arrow': {
        ...baseStyles.arrow,
      },
      ...(active && {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.light,
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      }),
      ...(opened && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      }),
    }),

    // Sub item
    ...(subItem && {
      ...baseStyles.item,
      minHeight: 36,
      '& .icon': {
        ...baseStyles.icon,
      },
      '& .sub-icon': {
        ...baseStyles.icon,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:before': {
          content: '""',
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: theme.palette.text.disabled,
          transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(active && {
            transform: 'scale(2)',
            backgroundColor: theme.palette.primary.main,
          }),
        },
      },
      '& .label': {
        ...baseStyles.label,
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .info': {
        ...baseStyles.info,
      },
      '& .arrow': {
        ...baseStyles.arrow,
      },
      ...(active && {
        color: theme.palette.text.primary,
      }),
    }),

    // Deep sub item
    ...(deepSubItem && {
      paddingLeft: `${theme.spacing(Number(depth))} !important`,
    }),
  };
});
