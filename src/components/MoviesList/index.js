import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { ContextAPI } from "../../context/ContextAPI";

import styles from "./MoviesList.module.scss";

export default function MoviesList({ title, movieList }) {
  const { isSearched } = useContext(ContextAPI);

  return (
    <>
      <section className={styles.container}>
        <h2
          className={styles.title}
          style={isSearched ? { padding: "6rem 0 0 0" } : {}}
        >
          {title}
        </h2>

        <section className={styles.MoviesList}>
          {movieList?.map((movie, index) => {
            return (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div  className={styles.card__movie}>
                  <div className={styles.image__movie}>
                    <img
                      className={styles.image__img}
                      src={movie.poster !== 'https://image.tmdb.org/t/p/w200null' ? movie.poster : '../no-photo.png' }
                      alt={movie.title}
                    />

                    <figcaption className={styles.image__overlay}>
                      <div className={styles.image__rating}>
                        <i>
                          <svg viewBox="0 0 512.002 512.002">
                            <path
                              d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
                      c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
                      c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
                      c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
                      l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
                      C511.56,208.649,513.033,202.688,511.267,197.258z"
                            />
                          </svg>
                        </i>
                        <h4>10 / {movie.rating != 0 ? movie.rating : '?' }</h4>
                      </div>

                      <div className={styles.image__genre}>
                        <h4>{movie.genres[0]}</h4>
                        <h4>{movie.genres[1]}</h4>
                      </div>

                      <span className={styles.button__details}>
                        פרטים מלאים
                      </span>
                    </figcaption>
                  </div>
                  <strong className={styles.movie__title}>{movie.title}</strong>
                  <p className={styles.movie__year}>{movie.year}</p>
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    </>
  );
}
