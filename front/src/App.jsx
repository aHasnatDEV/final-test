import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState([]);
  const [hash, setHash] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  console.log(data);

  return (
    <div>
      <h1 className="title">Git Commits</h1>
      <table>
        <thead>
          <tr>
            <td className="table-row">No.</td>
            <td className="table-row">Author</td>
            <td className="table-row">Commit Massage</td>
            <td className="table-row">hash</td>
            <td className="table-row">Date</td>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((list, i) => <tr key={list.sha}>
              <td className="table-row">{i + 1}</td>
              <td className="table-row">{list.commit.author.name}</td>
              <td className="table-row">{list.commit.message}</td>
              <td className="table-row">{list.sha}</td>
              <td className="table-row">{list.commit.author.date}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}
