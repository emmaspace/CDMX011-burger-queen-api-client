import { createContext, useEffect, useState } from "react";
import { helpHTTP } from "../helpers/helpHTTP";

const CrudContext = createContext();

const CrudProvider = () => {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    let api = helpHTTP();
    let orders = "http://localhost:5000/orders";
    
    useEffect(() => {
        setLoading(true);
        helpHTTP()
        .get(orders)
        .then((res) => {
            if(!res.err) {
                setDb(res);
                setError(null);
            } else {
                setDb(null);
                setError(res);
            }
            setLoading(false);
        });
    }, [orders]);

    const createData = (data) => {
        data.id = Date.now();
        
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        
        api.post(orders, options).then((res) => {
            if (!res.err) {
                setDb([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${orders}/${data.id}`;

        let options = {
            body: data,
            headers: {"content-type": "application/json"},
        };

        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = db.map((order) => (order.id === data.id ? data : order));
                setDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let deleteOrder = window.confirm('Are you sure you want to delete?');
        if(deleteOrder) {
            let endpoint = `${orders}/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };

            api.delit(endpoint, options).then((res) => {
                if(!res.err) {
                    let newData = db.filter((el) => el.id !== id);
                    setDb(newData); 
                } else {
                    setError(res);
                }
            });    
        } else {
            return;
        }
    }


const data = {
    db,
    error,
    loading, 
    createData, 
    //dataToEdit,
   // setDataToEdit, 
    updateData,
    deleteData,
}

    return <CrudContext.Provider value={data}></CrudContext.Provider>   
    };

    export { CrudProvider };
    export default CrudContext;