import "./styles.css";
import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ListPage from "./components/ListPage";
export default function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </div>
  );
}
