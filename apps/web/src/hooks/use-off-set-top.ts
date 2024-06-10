import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';

// ----------------------------------------------------------------------

type UseScrollOptions = 
  Omit<ScrollOptions, 'container' | 'target'> & {
    container?: React.RefObject<HTMLElement>;
    target?: React.RefObject<HTMLElement>;
  };

export function useOffSetTop(top = 0, options?: UseScrollOptions) {
  const { scrollY } = useScroll(options); 

  const [value, setValue] = useState(false);

  const onOffSetTop = useCallback(() => {
    scrollY.on('change', (scrollHeight) => {
      setValue(scrollHeight > top);
    })
  }, [scrollY, top]);

  useEffect(() => {
    onOffSetTop();
  }, [onOffSetTop]);

  const memoizedValue = useMemo(() => value, [value]);
  
  return memoizedValue;
}