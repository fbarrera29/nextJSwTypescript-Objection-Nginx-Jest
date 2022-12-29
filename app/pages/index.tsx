export default function Home() {
  const pong = async () => {
    const response = await fetch("http://localhost:80/api/healthcheck/ping");
    console.log(response);
  };
  const getUsers = async () => {
    const response = await fetch(
      "http://localhost:80/api/demo-pagination/users"
    );
    console.log(response);
  };
  return (
    <>
      <button onClick={pong}>click here to call pong</button>
      <button onClick={getUsers}>click here to get users</button>
    </>
  );
}
