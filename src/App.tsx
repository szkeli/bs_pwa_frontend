import React from 'react';
import logo from './logo.svg';
import './App.css';
import { usePostsQuery } from './generated/graphql';
import { IonButton, IonDatetime } from '@ionic/react';
import { Virtuoso } from 'react-virtuoso';

function App() {
  const { loading, error, data, fetchMore } = usePostsQuery();

  if(loading) return <div> Loading... </div>
  console.error({
    loading, error, data
  })

  const pageInfo = data?.postsWithRelay.pageInfo

  return (
    <Virtuoso
      style= {{ height: '100vh' }}
      totalCount ={data?.postsWithRelay.edges.length ?? 0}
      itemContent={index=> <div> {data?.postsWithRelay.edges[index].node?.content} </div>}
      endReached = {index => {
        fetchMore({
          variables: {
            after: pageInfo?.endCursor,
            first: 10,
          }
        })    
      }}
    >
    </Virtuoso>
  )
}

export default App;
