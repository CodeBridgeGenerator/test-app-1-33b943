import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const CustomerInvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            noff: _entity?.noff,invoicetype: _entity?.invoicetype,invoicedateandtime: _entity?.invoicedateandtime,suppliername: _entity?.suppliername,suppliertin: _entity?.suppliertin,identifiertype: _entity?.identifiertype,identifiernumber: _entity?.identifiernumber,suppliermsiccode: _entity?.suppliermsiccode,supplierbusinessactivitydescription: _entity?.supplierbusinessactivitydescription,thefirstsuppliercontactnumber: _entity?.thefirstsuppliercontactnumber,suppliercontactnumber: _entity?.suppliercontactnumber,countryname: _entity?.countryname,statename: _entity?.statename,cityname: _entity?.cityname,supplieradressline0: _entity?.supplieradressline0,buyername: _entity?.buyername,buyercountryname: _entity?.buyercountryname,buyerstatename: _entity?.buyerstatename,buyercityname: _entity?.buyercityname,buyeraddressline0: _entity?.buyeraddressline0,thefirstbuyercontactnumber: _entity?.thefirstbuyercontactnumber,buyercontactnumber: _entity?.buyercontactnumber,invoicecurrency: _entity?.invoicecurrency,invoicelineclassification: _entity?.invoicelineclassification,productname: _entity?.productname,unitprice: _entity?.unitprice,subtotal: _entity?.subtotal,totalexcludingtax: _entity?.totalexcludingtax,taxtype: _entity?.taxtype,taxamount: _entity?.taxamount,totaltaxamountpertaxtype: _entity?.totaltaxamountpertaxtype,additionalfeedescription: _entity?.additionalfeedescription,totaltaxamount: _entity?.totaltaxamount,totalincludingtax: _entity?.totalincludingtax,totalpayableamount: _entity?.totalpayableamount,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("customerInvoice").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Customer Invoice created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Customer Invoice" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Customer Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="customerInvoice-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="noff">Noff:</label>
                <InputText id="noff" className="w-full mb-3 p-inputtext-sm" value={_entity?.noff} onChange={(e) => setValByKey("noff", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["noff"]) ? (
              <p className="m-0" key="error-noff">
                {error["noff"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicetype">Invoicetype:</label>
                <InputText id="invoicetype" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicetype} onChange={(e) => setValByKey("invoicetype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicetype"]) ? (
              <p className="m-0" key="error-invoicetype">
                {error["invoicetype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicedateandtime">Invoicedateandtime:</label>
                <InputText id="invoicedateandtime" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicedateandtime} onChange={(e) => setValByKey("invoicedateandtime", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicedateandtime"]) ? (
              <p className="m-0" key="error-invoicedateandtime">
                {error["invoicedateandtime"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliername">Suppliername:</label>
                <InputText id="suppliername" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliername} onChange={(e) => setValByKey("suppliername", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliername"]) ? (
              <p className="m-0" key="error-suppliername">
                {error["suppliername"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliertin">Suppliertin:</label>
                <InputText id="suppliertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertin} onChange={(e) => setValByKey("suppliertin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliertin"]) ? (
              <p className="m-0" key="error-suppliertin">
                {error["suppliertin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="identifiertype">Identifiertype:</label>
                <InputText id="identifiertype" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiertype} onChange={(e) => setValByKey("identifiertype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["identifiertype"]) ? (
              <p className="m-0" key="error-identifiertype">
                {error["identifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="identifiernumber">Identifiernumber:</label>
                <InputText id="identifiernumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiernumber} onChange={(e) => setValByKey("identifiernumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["identifiernumber"]) ? (
              <p className="m-0" key="error-identifiernumber">
                {error["identifiernumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliermsiccode">Suppliermsiccode:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliermsiccode"]) ? (
              <p className="m-0" key="error-suppliermsiccode">
                {error["suppliermsiccode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierbusinessactivitydescription">Supplierbusinessactivitydescription:</label>
                <InputText id="supplierbusinessactivitydescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbusinessactivitydescription} onChange={(e) => setValByKey("supplierbusinessactivitydescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierbusinessactivitydescription"]) ? (
              <p className="m-0" key="error-supplierbusinessactivitydescription">
                {error["supplierbusinessactivitydescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstsuppliercontactnumber">Thefirstsuppliercontactnumber:</label>
                <InputText id="thefirstsuppliercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstsuppliercontactnumber} onChange={(e) => setValByKey("thefirstsuppliercontactnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstsuppliercontactnumber"]) ? (
              <p className="m-0" key="error-thefirstsuppliercontactnumber">
                {error["thefirstsuppliercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="suppliercontactnumber">Suppliercontactnumber:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliercontactnumber"]) ? (
              <p className="m-0" key="error-suppliercontactnumber">
                {error["suppliercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="countryname">Countryname:</label>
                <InputText id="countryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.countryname} onChange={(e) => setValByKey("countryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["countryname"]) ? (
              <p className="m-0" key="error-countryname">
                {error["countryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="statename">Statename:</label>
                <InputText id="statename" className="w-full mb-3 p-inputtext-sm" value={_entity?.statename} onChange={(e) => setValByKey("statename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["statename"]) ? (
              <p className="m-0" key="error-statename">
                {error["statename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="cityname">Cityname:</label>
                <InputText id="cityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.cityname} onChange={(e) => setValByKey("cityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["cityname"]) ? (
              <p className="m-0" key="error-cityname">
                {error["cityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplieradressline0">Supplieradressline0:</label>
                <InputText id="supplieradressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieradressline0} onChange={(e) => setValByKey("supplieradressline0", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieradressline0"]) ? (
              <p className="m-0" key="error-supplieradressline0">
                {error["supplieradressline0"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyername">Buyername:</label>
                <InputText id="buyername" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyername} onChange={(e) => setValByKey("buyername", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyername"]) ? (
              <p className="m-0" key="error-buyername">
                {error["buyername"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercountryname">Buyercountryname:</label>
                <InputText id="buyercountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercountryname} onChange={(e) => setValByKey("buyercountryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercountryname"]) ? (
              <p className="m-0" key="error-buyercountryname">
                {error["buyercountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerstatename">Buyerstatename:</label>
                <InputText id="buyerstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerstatename} onChange={(e) => setValByKey("buyerstatename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerstatename"]) ? (
              <p className="m-0" key="error-buyerstatename">
                {error["buyerstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercityname">Buyercityname:</label>
                <InputText id="buyercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercityname} onChange={(e) => setValByKey("buyercityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercityname"]) ? (
              <p className="m-0" key="error-buyercityname">
                {error["buyercityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeraddressline0">Buyeraddressline0:</label>
                <InputText id="buyeraddressline0" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeraddressline0} onChange={(e) => setValByKey("buyeraddressline0", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeraddressline0"]) ? (
              <p className="m-0" key="error-buyeraddressline0">
                {error["buyeraddressline0"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="thefirstbuyercontactnumber">Thefirstbuyercontactnumber:</label>
                <InputText id="thefirstbuyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstbuyercontactnumber} onChange={(e) => setValByKey("thefirstbuyercontactnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["thefirstbuyercontactnumber"]) ? (
              <p className="m-0" key="error-thefirstbuyercontactnumber">
                {error["thefirstbuyercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyercontactnumber">Buyercontactnumber:</label>
                <InputNumber id="buyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercontactnumber} onChange={(e) => setValByKey("buyercontactnumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyercontactnumber"]) ? (
              <p className="m-0" key="error-buyercontactnumber">
                {error["buyercontactnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicecurrency">Invoicecurrency:</label>
                <InputText id="invoicecurrency" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicecurrency} onChange={(e) => setValByKey("invoicecurrency", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicecurrency"]) ? (
              <p className="m-0" key="error-invoicecurrency">
                {error["invoicecurrency"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicelineclassification">Invoicelineclassification:</label>
                <InputText id="invoicelineclassification" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicelineclassification} onChange={(e) => setValByKey("invoicelineclassification", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicelineclassification"]) ? (
              <p className="m-0" key="error-invoicelineclassification">
                {error["invoicelineclassification"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="productname">Productname:</label>
                <InputText id="productname" className="w-full mb-3 p-inputtext-sm" value={_entity?.productname} onChange={(e) => setValByKey("productname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["productname"]) ? (
              <p className="m-0" key="error-productname">
                {error["productname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="unitprice">Unitprice:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unitprice"]) ? (
              <p className="m-0" key="error-unitprice">
                {error["unitprice"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="subtotal">Subtotal:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subtotal"]) ? (
              <p className="m-0" key="error-subtotal">
                {error["subtotal"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalexcludingtax">Totalexcludingtax:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalexcludingtax"]) ? (
              <p className="m-0" key="error-totalexcludingtax">
                {error["totalexcludingtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxtype">Taxtype:</label>
                <InputText id="taxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxtype} onChange={(e) => setValByKey("taxtype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxtype"]) ? (
              <p className="m-0" key="error-taxtype">
                {error["taxtype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxamount">Taxamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxamount"]) ? (
              <p className="m-0" key="error-taxamount">
                {error["taxamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totaltaxamountpertaxtype">Totaltaxamountpertaxtype:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaltaxamountpertaxtype"]) ? (
              <p className="m-0" key="error-totaltaxamountpertaxtype">
                {error["totaltaxamountpertaxtype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionalfeedescription">Additionalfeedescription:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionalfeedescription"]) ? (
              <p className="m-0" key="error-additionalfeedescription">
                {error["additionalfeedescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totaltaxamount">Totaltaxamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaltaxamount"]) ? (
              <p className="m-0" key="error-totaltaxamount">
                {error["totaltaxamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalincludingtax">Totalincludingtax:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalincludingtax"]) ? (
              <p className="m-0" key="error-totalincludingtax">
                {error["totalincludingtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalpayableamount">Totalpayableamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalpayableamount"]) ? (
              <p className="m-0" key="error-totalpayableamount">
                {error["totalpayableamount"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CustomerInvoiceCreateDialogComponent);
