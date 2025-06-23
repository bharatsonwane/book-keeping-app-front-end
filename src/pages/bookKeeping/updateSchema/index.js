import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Searchbox } from "src/components/searchbox";
import { useNavigate, useParams } from "react-router-dom";
import { getBookkeepingSchemaDetailsAction, updateBookkeepingSchemaAction } from "src/redux/thunks/bookKeeping";
import SchemaEditor from "../components/SchemaEditor";

function UpdateSchema(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate()

  const [schema, setSchema] = useState(null);
  const [search, changeSearch] = useState("");

  useEffect(() => {
    getSchemaDetail();

    return () => {
      setSchema(null);
    };
  }, []);

  const getSchemaDetail = async () => {
    try {
      const responseData = await dispatch(
        getBookkeepingSchemaDetailsAction(params.id)
      ).unwrap();
      setSchema(responseData);
      return responseData;
    } catch (error) {}
  };

  const updateSchema = async (schema) => {
    try {
      const responseData = await dispatch(
        updateBookkeepingSchemaAction(schema)
      ).unwrap();
      setSchema(responseData);

      navigate("/app/bookkeeping/list/");
      return responseData;
    } catch (error) {}
  };

  const onChangeSearch = (e) => {
    let value = e.target.value;

    changeSearch(value);
  };

  return (
    <React.Fragment key={params.id}>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
      >
        <h4>Confirm Schema</h4>
        <div className="w-20">
          <Searchbox
            value={search}
            onChange={onChangeSearch}
            placeholder={"Search on home"}
          />
        </div>
      </div>
      <div>
        {schema && schema.name && (
          <SchemaEditor schema={schema} updateSchema={updateSchema} />
        )}
      </div>
    </React.Fragment>
  );
}

export default UpdateSchema;
