
import Head from 'next/head';
import { useContext } from 'react';
import styles from './genre.module.scss';
import MoviesList from '../../components/MoviesList';
import { ContextAPI } from '../../context/ContextAPI';

export default function Genre({ genre }) {

  const { movieGenreList } = useContext(ContextAPI);

  return (
    <>
      <Head>
        <title>חוקר הסרטים - {genre.genre}</title>
      </Head>

      <div className={styles.title}>
      <MoviesList  
        title={`${genre.genre}`}
        movieList={movieGenreList} 
      />
      </div>

    </>
  );
}

export async function getStaticPaths() {

  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(ctx) {

  const genre = ctx.params;
  
  return {
    props: {
      genre: genre,
    },
  };
}

