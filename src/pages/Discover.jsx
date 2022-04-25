import React from 'react';
import SearchContext from '../context/SearchContext';
import DiscoverSection from '../parts/Discover';

const { SearchProvider } = SearchContext;

export default function Discover() {
  return (
    <DiscoverSection />
  );
}
