import { use } from "react";
import Link from 'next/link';

async function getMovies() {
  const res = await fetch(
    "https://3000-alekspantel-samselikoff-l4tr1o8g7gy.ws-eu78.gitpod.io/api/movies"
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Layout({children}) {
  let movies = use(getMovies());

  // console.log(movies);

  return (
    <>
      <h2 className="text-2xl font-bold">Movies page</h2>
      <div className="flex gap-10">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
          ))}
        </ul>

        <div>{children}</div>
      </div>
    </>
  );
}
