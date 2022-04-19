import React from 'react';
import useQuery from '../utils/useQuery';

export default function MovieDetail() {
  const query = useQuery();

  const id = query.get('id');

  console.log(id);

  return <div>MovieDetail</div>;
}
