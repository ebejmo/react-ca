import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = `SlapShop | ${title}`;
  }, [title]);
}
