import Header from "../../components/Header/Header";

export default function User({ isAuthenticated, setIsAuthenticated }) {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <h2>Thông tin cá nhân</h2>
     
    </div>
  );
}
