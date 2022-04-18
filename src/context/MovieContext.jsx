import React, { createContext, useCallback, useMemo, useState } from 'react';

function ContentHomeContext() {
  const Content = createContext();

  function ContentProvider(props) {
    const [content, setContent] = useState({ type: 'movie', filter: 'all' });

    const changeContentType = (e) =>
      setContent({ ...content, type: e.target.value });

    const changeContentFilter = (e) =>
      setContent({ ...content, filter: e.target.value });

    // console.log(content);

    const contentState = useMemo(
      () => ({ content, changeContentType, changeContentFilter }),
      [content]
    );

    const memoizeComponent = useCallback(
      () => (
        <Content.Provider value={contentState}>
          {props.children}
        </Content.Provider>
      ),
      [content]
    );

    return memoizeComponent();
  }

  return { Content, ContentProvider };
}

export default ContentHomeContext();
