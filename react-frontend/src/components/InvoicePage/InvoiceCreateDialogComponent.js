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

const InvoiceCreateDialogComponent = (props) => {
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
            noff: _entity?.noff,invoicetype: _entity?.invoicetype,invoicedateandtime: _entity?.invoicedateandtime,originaleinvoicereferencenumber: _entity?.originaleinvoicereferencenumber,suppliername: _entity?.suppliername,suppliertin: _entity?.suppliertin,suppliersstregistrationnumber: _entity?.suppliersstregistrationnumber,identifiertype: _entity?.identifiertype,identifiernumber: _entity?.identifiernumber,suppliermsiccode: _entity?.suppliermsiccode,suppliertourismtaxregistrationnumber: _entity?.suppliertourismtaxregistrationnumber,supplierbusinessactivitydescription: _entity?.supplierbusinessactivitydescription,supplieremail: _entity?.supplieremail,thefirstsuppliercontactnumber: _entity?.thefirstsuppliercontactnumber,suppliercontactnumber: _entity?.suppliercontactnumber,countryname: _entity?.countryname,statename: _entity?.statename,cityname: _entity?.cityname,postalzone: _entity?.postalzone,buyername: _entity?.buyername,buyertin: _entity?.buyertin,buyersstregistrationnumber: _entity?.buyersstregistrationnumber,buyerbusinessregistrationnumber: _entity?.buyerbusinessregistrationnumber,buyeremail: _entity?.buyeremail,buyercountryname: _entity?.buyercountryname,buyerstatename: _entity?.buyerstatename,buyercityname: _entity?.buyercityname,buyerpostalzone: _entity?.buyerpostalzone,thefirstbuyercontactnumber: _entity?.thefirstbuyercontactnumber,buyercontactnumber: _entity?.buyercontactnumber,invoicecurrency: _entity?.invoicecurrency,currencyexchangerate: _entity?.currencyexchangerate,frequencyofbilling: _entity?.frequencyofbilling,billingperiodstartdate: _entity?.billingperiodstartdate,billingperiodenddate: _entity?.billingperiodenddate,paymentmode: _entity?.paymentmode,supplierbankaccountnumber: _entity?.supplierbankaccountnumber,paymentterms: _entity?.paymentterms,prepaymentamount: _entity?.prepaymentamount,prepaymentdate: _entity?.prepaymentdate,prepaymentreferencenumber: _entity?.prepaymentreferencenumber,shippingrecipientname: _entity?.shippingrecipientname,shippingrecipientcountryname: _entity?.shippingrecipientcountryname,shippingrecipientstatename: _entity?.shippingrecipientstatename,shippingrecipientcityname: _entity?.shippingrecipientcityname,shippingrecipientpostalzone: _entity?.shippingrecipientpostalzone,shippingrecipienttin: _entity?.shippingrecipienttin,shippingrecipientidentifiertype: _entity?.shippingrecipientidentifiertype,shippingrecipientbusinessregistrationnumber: _entity?.shippingrecipientbusinessregistrationnumber,billreferencenumber: _entity?.billreferencenumber,referencenumberofcustomsformno1: _entity?.referencenumberofcustomsformno1,incoterms: _entity?.incoterms,freetradeagreementinformation: _entity?.freetradeagreementinformation,authorisationnumberforcertifiedexporter: _entity?.authorisationnumberforcertifiedexporter,referencenumberofcustomsformno2: _entity?.referencenumberofcustomsformno2,invoicelinenumber: _entity?.invoicelinenumber,invoicelineclassification: _entity?.invoicelineclassification,productname: _entity?.productname,quantity: _entity?.quantity,unitprice: _entity?.unitprice,measurement: _entity?.measurement,subtotal: _entity?.subtotal,countryoforigin: _entity?.countryoforigin,totalexcludingtax: _entity?.totalexcludingtax,taxtype: _entity?.taxtype,taxrate: _entity?.taxrate,taxamount: _entity?.taxamount,taxexemptiondetails: _entity?.taxexemptiondetails,taxexemptionamount: _entity?.taxexemptionamount,discountrate: _entity?.discountrate,discountamount: _entity?.discountamount,discountdescription: _entity?.discountdescription,feeorchargerate: _entity?.feeorchargerate,feeorchargeamount: _entity?.feeorchargeamount,totaltaxableamountpertaxtype: _entity?.totaltaxableamountpertaxtype,totaltaxamountpertaxtype: _entity?.totaltaxamountpertaxtype,detailsoftaxexemption: _entity?.detailsoftaxexemption,amountexemptedfromtax: _entity?.amountexemptedfromtax,additionaldiscountamount: _entity?.additionaldiscountamount,additionaldiscountdescription: _entity?.additionaldiscountdescription,additionalfeeamount: _entity?.additionalfeeamount,additionalfeedescription: _entity?.additionalfeedescription,totaldiscountvalue: _entity?.totaldiscountvalue,totalfeeorchargeamount: _entity?.totalfeeorchargeamount,totaltaxamount: _entity?.totaltaxamount,totalnetamount: _entity?.totalnetamount,totalincludingtax: _entity?.totalincludingtax,roundingamount: _entity?.roundingamount,totalpayableamount: _entity?.totalpayableamount,invoicenumber: _entity?.invoicenumber,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("invoice").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Invoice created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Invoice" });
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
        <Dialog header="Create Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-create-dialog-component">
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
                <label htmlFor="originaleinvoicereferencenumber">Originaleinvoicereferencenumber:</label>
                <InputText id="originaleinvoicereferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originaleinvoicereferencenumber} onChange={(e) => setValByKey("originaleinvoicereferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["originaleinvoicereferencenumber"]) ? (
              <p className="m-0" key="error-originaleinvoicereferencenumber">
                {error["originaleinvoicereferencenumber"]}
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
                <label htmlFor="suppliersstregistrationnumber">Suppliersstregistrationnumber:</label>
                <InputText id="suppliersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersstregistrationnumber} onChange={(e) => setValByKey("suppliersstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliersstregistrationnumber"]) ? (
              <p className="m-0" key="error-suppliersstregistrationnumber">
                {error["suppliersstregistrationnumber"]}
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
                <label htmlFor="suppliertourismtaxregistrationnumber">Suppliertourismtaxregistrationnumber:</label>
                <InputText id="suppliertourismtaxregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertourismtaxregistrationnumber} onChange={(e) => setValByKey("suppliertourismtaxregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["suppliertourismtaxregistrationnumber"]) ? (
              <p className="m-0" key="error-suppliertourismtaxregistrationnumber">
                {error["suppliertourismtaxregistrationnumber"]}
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
                <label htmlFor="supplieremail">Supplieremail:</label>
                <InputText id="supplieremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieremail} onChange={(e) => setValByKey("supplieremail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplieremail"]) ? (
              <p className="m-0" key="error-supplieremail">
                {error["supplieremail"]}
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
                <label htmlFor="postalzone">Postalzone:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["postalzone"]) ? (
              <p className="m-0" key="error-postalzone">
                {error["postalzone"]}
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
                <label htmlFor="buyertin">Buyertin:</label>
                <InputText id="buyertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyertin} onChange={(e) => setValByKey("buyertin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyertin"]) ? (
              <p className="m-0" key="error-buyertin">
                {error["buyertin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyersstregistrationnumber">Buyersstregistrationnumber:</label>
                <InputText id="buyersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersstregistrationnumber} onChange={(e) => setValByKey("buyersstregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyersstregistrationnumber"]) ? (
              <p className="m-0" key="error-buyersstregistrationnumber">
                {error["buyersstregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyerbusinessregistrationnumber">Buyerbusinessregistrationnumber:</label>
                <InputText id="buyerbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerbusinessregistrationnumber} onChange={(e) => setValByKey("buyerbusinessregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerbusinessregistrationnumber"]) ? (
              <p className="m-0" key="error-buyerbusinessregistrationnumber">
                {error["buyerbusinessregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="buyeremail">Buyeremail:</label>
                <InputText id="buyeremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeremail} onChange={(e) => setValByKey("buyeremail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyeremail"]) ? (
              <p className="m-0" key="error-buyeremail">
                {error["buyeremail"]}
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
                <label htmlFor="buyerpostalzone">Buyerpostalzone:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["buyerpostalzone"]) ? (
              <p className="m-0" key="error-buyerpostalzone">
                {error["buyerpostalzone"]}
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
                <label htmlFor="currencyexchangerate">Currencyexchangerate:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["currencyexchangerate"]) ? (
              <p className="m-0" key="error-currencyexchangerate">
                {error["currencyexchangerate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="frequencyofbilling">Frequencyofbilling:</label>
                <InputText id="frequencyofbilling" className="w-full mb-3 p-inputtext-sm" value={_entity?.frequencyofbilling} onChange={(e) => setValByKey("frequencyofbilling", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["frequencyofbilling"]) ? (
              <p className="m-0" key="error-frequencyofbilling">
                {error["frequencyofbilling"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billingperiodstartdate">Billingperiodstartdate:</label>
                <InputText id="billingperiodstartdate" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingperiodstartdate} onChange={(e) => setValByKey("billingperiodstartdate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingperiodstartdate"]) ? (
              <p className="m-0" key="error-billingperiodstartdate">
                {error["billingperiodstartdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billingperiodenddate">Billingperiodenddate:</label>
                <InputText id="billingperiodenddate" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingperiodenddate} onChange={(e) => setValByKey("billingperiodenddate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billingperiodenddate"]) ? (
              <p className="m-0" key="error-billingperiodenddate">
                {error["billingperiodenddate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentmode">Paymentmode:</label>
                <InputText id="paymentmode" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentmode} onChange={(e) => setValByKey("paymentmode", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentmode"]) ? (
              <p className="m-0" key="error-paymentmode">
                {error["paymentmode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="supplierbankaccountnumber">Supplierbankaccountnumber:</label>
                <InputNumber id="supplierbankaccountnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbankaccountnumber} onChange={(e) => setValByKey("supplierbankaccountnumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supplierbankaccountnumber"]) ? (
              <p className="m-0" key="error-supplierbankaccountnumber">
                {error["supplierbankaccountnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="paymentterms">Paymentterms:</label>
                <InputText id="paymentterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentterms} onChange={(e) => setValByKey("paymentterms", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentterms"]) ? (
              <p className="m-0" key="error-paymentterms">
                {error["paymentterms"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentamount">Prepaymentamount:</label>
                <InputNumber id="prepaymentamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentamount} onChange={(e) => setValByKey("prepaymentamount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentamount"]) ? (
              <p className="m-0" key="error-prepaymentamount">
                {error["prepaymentamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentdate">Prepaymentdate:</label>
                <InputText id="prepaymentdate" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentdate} onChange={(e) => setValByKey("prepaymentdate", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentdate"]) ? (
              <p className="m-0" key="error-prepaymentdate">
                {error["prepaymentdate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="prepaymentreferencenumber">Prepaymentreferencenumber:</label>
                <InputText id="prepaymentreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentreferencenumber} onChange={(e) => setValByKey("prepaymentreferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["prepaymentreferencenumber"]) ? (
              <p className="m-0" key="error-prepaymentreferencenumber">
                {error["prepaymentreferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientname">Shippingrecipientname:</label>
                <InputText id="shippingrecipientname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientname} onChange={(e) => setValByKey("shippingrecipientname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientname"]) ? (
              <p className="m-0" key="error-shippingrecipientname">
                {error["shippingrecipientname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientcountryname">Shippingrecipientcountryname:</label>
                <InputText id="shippingrecipientcountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcountryname} onChange={(e) => setValByKey("shippingrecipientcountryname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientcountryname"]) ? (
              <p className="m-0" key="error-shippingrecipientcountryname">
                {error["shippingrecipientcountryname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientstatename">Shippingrecipientstatename:</label>
                <InputText id="shippingrecipientstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientstatename} onChange={(e) => setValByKey("shippingrecipientstatename", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientstatename"]) ? (
              <p className="m-0" key="error-shippingrecipientstatename">
                {error["shippingrecipientstatename"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientcityname">Shippingrecipientcityname:</label>
                <InputText id="shippingrecipientcityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcityname} onChange={(e) => setValByKey("shippingrecipientcityname", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientcityname"]) ? (
              <p className="m-0" key="error-shippingrecipientcityname">
                {error["shippingrecipientcityname"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientpostalzone">Shippingrecipientpostalzone:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientpostalzone"]) ? (
              <p className="m-0" key="error-shippingrecipientpostalzone">
                {error["shippingrecipientpostalzone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipienttin">Shippingrecipienttin:</label>
                <InputText id="shippingrecipienttin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipienttin} onChange={(e) => setValByKey("shippingrecipienttin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipienttin"]) ? (
              <p className="m-0" key="error-shippingrecipienttin">
                {error["shippingrecipienttin"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientidentifiertype">Shippingrecipientidentifiertype:</label>
                <InputText id="shippingrecipientidentifiertype" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientidentifiertype} onChange={(e) => setValByKey("shippingrecipientidentifiertype", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientidentifiertype"]) ? (
              <p className="m-0" key="error-shippingrecipientidentifiertype">
                {error["shippingrecipientidentifiertype"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="shippingrecipientbusinessregistrationnumber">Shippingrecipientbusinessregistrationnumber:</label>
                <InputText id="shippingrecipientbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientbusinessregistrationnumber} onChange={(e) => setValByKey("shippingrecipientbusinessregistrationnumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingrecipientbusinessregistrationnumber"]) ? (
              <p className="m-0" key="error-shippingrecipientbusinessregistrationnumber">
                {error["shippingrecipientbusinessregistrationnumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="billreferencenumber">Billreferencenumber:</label>
                <InputText id="billreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.billreferencenumber} onChange={(e) => setValByKey("billreferencenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["billreferencenumber"]) ? (
              <p className="m-0" key="error-billreferencenumber">
                {error["billreferencenumber"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="referencenumberofcustomsformno1">Referencenumberofcustomsformno1:</label>
                <InputText id="referencenumberofcustomsformno1" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno1} onChange={(e) => setValByKey("referencenumberofcustomsformno1", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["referencenumberofcustomsformno1"]) ? (
              <p className="m-0" key="error-referencenumberofcustomsformno1">
                {error["referencenumberofcustomsformno1"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="incoterms">Incoterms:</label>
                <InputText id="incoterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.incoterms} onChange={(e) => setValByKey("incoterms", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["incoterms"]) ? (
              <p className="m-0" key="error-incoterms">
                {error["incoterms"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="freetradeagreementinformation">Freetradeagreementinformation:</label>
                <InputText id="freetradeagreementinformation" className="w-full mb-3 p-inputtext-sm" value={_entity?.freetradeagreementinformation} onChange={(e) => setValByKey("freetradeagreementinformation", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["freetradeagreementinformation"]) ? (
              <p className="m-0" key="error-freetradeagreementinformation">
                {error["freetradeagreementinformation"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="authorisationnumberforcertifiedexporter">Authorisationnumberforcertifiedexporter:</label>
                <InputText id="authorisationnumberforcertifiedexporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.authorisationnumberforcertifiedexporter} onChange={(e) => setValByKey("authorisationnumberforcertifiedexporter", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["authorisationnumberforcertifiedexporter"]) ? (
              <p className="m-0" key="error-authorisationnumberforcertifiedexporter">
                {error["authorisationnumberforcertifiedexporter"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="referencenumberofcustomsformno2">Referencenumberofcustomsformno2:</label>
                <InputText id="referencenumberofcustomsformno2" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno2} onChange={(e) => setValByKey("referencenumberofcustomsformno2", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["referencenumberofcustomsformno2"]) ? (
              <p className="m-0" key="error-referencenumberofcustomsformno2">
                {error["referencenumberofcustomsformno2"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicelinenumber">Invoicelinenumber:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicelinenumber"]) ? (
              <p className="m-0" key="error-invoicelinenumber">
                {error["invoicelinenumber"]}
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
                <label htmlFor="quantity">Quantity:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["quantity"]) ? (
              <p className="m-0" key="error-quantity">
                {error["quantity"]}
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
                <label htmlFor="measurement">Measurement:</label>
                <InputText id="measurement" className="w-full mb-3 p-inputtext-sm" value={_entity?.measurement} onChange={(e) => setValByKey("measurement", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["measurement"]) ? (
              <p className="m-0" key="error-measurement">
                {error["measurement"]}
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
                <label htmlFor="countryoforigin">Countryoforigin:</label>
                <InputText id="countryoforigin" className="w-full mb-3 p-inputtext-sm" value={_entity?.countryoforigin} onChange={(e) => setValByKey("countryoforigin", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["countryoforigin"]) ? (
              <p className="m-0" key="error-countryoforigin">
                {error["countryoforigin"]}
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
                <label htmlFor="taxrate">Taxrate:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxrate"]) ? (
              <p className="m-0" key="error-taxrate">
                {error["taxrate"]}
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
                <label htmlFor="taxexemptiondetails">Taxexemptiondetails:</label>
                <InputText id="taxexemptiondetails" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxexemptiondetails} onChange={(e) => setValByKey("taxexemptiondetails", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxexemptiondetails"]) ? (
              <p className="m-0" key="error-taxexemptiondetails">
                {error["taxexemptiondetails"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="taxexemptionamount">Taxexemptionamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxexemptionamount"]) ? (
              <p className="m-0" key="error-taxexemptionamount">
                {error["taxexemptionamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountrate">Discountrate:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountrate"]) ? (
              <p className="m-0" key="error-discountrate">
                {error["discountrate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountamount">Discountamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountamount"]) ? (
              <p className="m-0" key="error-discountamount">
                {error["discountamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="discountdescription">Discountdescription:</label>
                <InputText id="discountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountdescription} onChange={(e) => setValByKey("discountdescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["discountdescription"]) ? (
              <p className="m-0" key="error-discountdescription">
                {error["discountdescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="feeorchargerate">Feeorchargerate:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["feeorchargerate"]) ? (
              <p className="m-0" key="error-feeorchargerate">
                {error["feeorchargerate"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="feeorchargeamount">Feeorchargeamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["feeorchargeamount"]) ? (
              <p className="m-0" key="error-feeorchargeamount">
                {error["feeorchargeamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totaltaxableamountpertaxtype">Totaltaxableamountpertaxtype:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaltaxableamountpertaxtype"]) ? (
              <p className="m-0" key="error-totaltaxableamountpertaxtype">
                {error["totaltaxableamountpertaxtype"]}
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
                <label htmlFor="detailsoftaxexemption">Detailsoftaxexemption:</label>
                <InputText id="detailsoftaxexemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsoftaxexemption} onChange={(e) => setValByKey("detailsoftaxexemption", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["detailsoftaxexemption"]) ? (
              <p className="m-0" key="error-detailsoftaxexemption">
                {error["detailsoftaxexemption"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="amountexemptedfromtax">Amountexemptedfromtax:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["amountexemptedfromtax"]) ? (
              <p className="m-0" key="error-amountexemptedfromtax">
                {error["amountexemptedfromtax"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionaldiscountamount">Additionaldiscountamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionaldiscountamount"]) ? (
              <p className="m-0" key="error-additionaldiscountamount">
                {error["additionaldiscountamount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionaldiscountdescription">Additionaldiscountdescription:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionaldiscountdescription"]) ? (
              <p className="m-0" key="error-additionaldiscountdescription">
                {error["additionaldiscountdescription"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="additionalfeeamount">Additionalfeeamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionalfeeamount"]) ? (
              <p className="m-0" key="error-additionalfeeamount">
                {error["additionalfeeamount"]}
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
                <label htmlFor="totaldiscountvalue">Totaldiscountvalue:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totaldiscountvalue"]) ? (
              <p className="m-0" key="error-totaldiscountvalue">
                {error["totaldiscountvalue"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="totalfeeorchargeamount">Totalfeeorchargeamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalfeeorchargeamount"]) ? (
              <p className="m-0" key="error-totalfeeorchargeamount">
                {error["totalfeeorchargeamount"]}
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
                <label htmlFor="totalnetamount">Totalnetamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalnetamount"]) ? (
              <p className="m-0" key="error-totalnetamount">
                {error["totalnetamount"]}
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
                <label htmlFor="roundingamount">Roundingamount:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["roundingamount"]) ? (
              <p className="m-0" key="error-roundingamount">
                {error["roundingamount"]}
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
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="invoicenumber">Invoicenumber:</label>
                <InputText id="invoicenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicenumber} onChange={(e) => setValByKey("invoicenumber", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["invoicenumber"]) ? (
              <p className="m-0" key="error-invoicenumber">
                {error["invoicenumber"]}
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

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
