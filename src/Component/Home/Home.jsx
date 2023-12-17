import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResultDetails = async () => {
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`);
        setResult(response.data);
      } catch (error) {
        console.error('Error fetching result details:', error);
      }
    };

    fetchResultDetails();
  }, [id]);

  console.log(result);

  return (
    <div className="result-detail">
      {result ? (
        <div className="card w-full bg-cyan-800 text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{result.title}</h2>
            <p>Author: {result.author}</p>
            <p>Type: {result.type}</p>
            <p>Created At: {result.created_at}</p>
            <p>Created At (Unix): {result.created_at_i}</p>
            <p>URL: <a href={result.url} target="_blank" rel="noopener noreferrer">{result.url}</a></p>
            {/* Display other details of the result */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
        // Display a loading message or spinner while fetching data
      )}
    </div>
  );
};

export default Home;