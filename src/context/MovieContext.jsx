/* eslint-disable no-lonely-if */
import React, { createContext, useCallback, useMemo, useState } from 'react';

function ContentHomeContext() {
  const Content = createContext();

  function ContentProvider(props) {
    const [content, setContent] = useState({
      type: 'movie',
      filter: 'now_playing',
    });

    const changeContentType = (e) => {
      const target = e.target.value;

      if (target === 'movie') {
        if (content.filter === 'airing_today') {
          setContent({
            type: target,
            filter: 'now_playing',
          });
        } else if (content.filter === 'on_the_air') {
          setContent({
            type: target,
            filter: 'upcoming',
          });
        } else {
          setContent({ ...content, type: e.target.value });
        }
      } else {
        if (content.filter === 'now_playing') {
          setContent({
            type: target,
            filter: 'airing_today',
          });
        } else if (content.filter === 'upcoming') {
          setContent({
            type: target,
            filter: 'on_the_air',
          });
        } else {
          setContent({ ...content, type: e.target.value });
        }
      }
    };

    const changeContentFilter = (e) =>
      setContent({ ...content, filter: e.target.value });

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
