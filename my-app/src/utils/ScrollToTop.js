import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTop(0, 0);
    });
    return () => {
      unlisten();
    } 
  });

  return (null);
}

export default withRouter(ScrollToTop);