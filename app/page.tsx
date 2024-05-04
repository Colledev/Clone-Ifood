import Header from "./_components/Header";
import CategoryList from "./_components/categoryList";
import Search from "./_components/search";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
