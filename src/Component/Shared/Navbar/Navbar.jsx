import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
// console.log(results)
  return (
    <div className="navbar bg-base-100">
      <div className="flex">
        <a className="btn btn-ghost text-warning  text-2xl">Hacker News</a>
      </div>
      <div className="gap-2 mx-auto">
        <div className="form-control flex-row space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[800px]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <IoSearch className="h-8 w-8 mt-2 text-warning" />
          </button>
        </div>

        <div className='space-x-8 ms-20'>
        <button className="btn btn-warning text-white font-bold">Login</button>
        <button className="btn btn-outline btn-warning font-bold">Sign Up</button>
        </div>
      </div>

      {results.length > 0 && (
        <div
       
          className='absolute top-[70px]  w-full '
        >
          <ul>
            {results.map((result) => (
               <li className='border-orange-300 border-2 p-8 ' key={result.objectID}>
               {/* Use Link component to navigate to the detail page */}
               <Link className='font-bold'   to={`/${result.objectID}`}>{result.title}</Link>
              <div>
              <Link>Comments:{result.num_comments}</Link>
               <p> points: {result.points}</p>
              </div>
             </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;