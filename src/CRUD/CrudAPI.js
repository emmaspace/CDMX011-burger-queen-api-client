import { useContext } from "react-router";
import { helpHTTP } from "../helpers/helpHTTP";
import Dashboard from "../components/Dashboard/Dashboard";

const CrudApi = () => {
    const { db, loading, error } = useContext(CrudContext);

    return(
        <div>
        <h2>CRUD API con Context API</h2>
        <article className="">
          <Dashboard />
          {loading && }
          {error && 
            <p>error(
              msg={`Error ${error.status}: ${error.statusText}`})
              </p>}
          {db && <Dashboard/>}
        </article>
      </div>
    )

}


