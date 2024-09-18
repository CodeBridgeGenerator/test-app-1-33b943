import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const InvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            noff: _entity?.noff,
invoicetype: _entity?.invoicetype,
invoicedateandtime: _entity?.invoicedateandtime,
originaleinvoicereferencenumber: _entity?.originaleinvoicereferencenumber,
suppliername: _entity?.suppliername,
suppliertin: _entity?.suppliertin,
suppliersstregistrationnumber: _entity?.suppliersstregistrationnumber,
identifiertype: _entity?.identifiertype,
identifiernumber: _entity?.identifiernumber,
suppliermsiccode: _entity?.suppliermsiccode,
suppliertourismtaxregistrationnumber: _entity?.suppliertourismtaxregistrationnumber,
supplierbusinessactivitydescription: _entity?.supplierbusinessactivitydescription,
supplieremail: _entity?.supplieremail,
thefirstsuppliercontactnumber: _entity?.thefirstsuppliercontactnumber,
suppliercontactnumber: _entity?.suppliercontactnumber,
countryname: _entity?.countryname,
statename: _entity?.statename,
cityname: _entity?.cityname,
postalzone: _entity?.postalzone,
buyername: _entity?.buyername,
buyertin: _entity?.buyertin,
buyersstregistrationnumber: _entity?.buyersstregistrationnumber,
buyerbusinessregistrationnumber: _entity?.buyerbusinessregistrationnumber,
buyeremail: _entity?.buyeremail,
buyercountryname: _entity?.buyercountryname,
buyerstatename: _entity?.buyerstatename,
buyercityname: _entity?.buyercityname,
buyerpostalzone: _entity?.buyerpostalzone,
thefirstbuyercontactnumber: _entity?.thefirstbuyercontactnumber,
buyercontactnumber: _entity?.buyercontactnumber,
invoicecurrency: _entity?.invoicecurrency,
currencyexchangerate: _entity?.currencyexchangerate,
frequencyofbilling: _entity?.frequencyofbilling,
billingperiodstartdate: _entity?.billingperiodstartdate,
billingperiodenddate: _entity?.billingperiodenddate,
paymentmode: _entity?.paymentmode,
supplierbankaccountnumber: _entity?.supplierbankaccountnumber,
paymentterms: _entity?.paymentterms,
prepaymentamount: _entity?.prepaymentamount,
prepaymentdate: _entity?.prepaymentdate,
prepaymentreferencenumber: _entity?.prepaymentreferencenumber,
shippingrecipientname: _entity?.shippingrecipientname,
shippingrecipientcountryname: _entity?.shippingrecipientcountryname,
shippingrecipientstatename: _entity?.shippingrecipientstatename,
shippingrecipientcityname: _entity?.shippingrecipientcityname,
shippingrecipientpostalzone: _entity?.shippingrecipientpostalzone,
shippingrecipienttin: _entity?.shippingrecipienttin,
shippingrecipientidentifiertype: _entity?.shippingrecipientidentifiertype,
shippingrecipientbusinessregistrationnumber: _entity?.shippingrecipientbusinessregistrationnumber,
billreferencenumber: _entity?.billreferencenumber,
referencenumberofcustomsformno1: _entity?.referencenumberofcustomsformno1,
incoterms: _entity?.incoterms,
freetradeagreementinformation: _entity?.freetradeagreementinformation,
authorisationnumberforcertifiedexporter: _entity?.authorisationnumberforcertifiedexporter,
referencenumberofcustomsformno2: _entity?.referencenumberofcustomsformno2,
invoicelinenumber: _entity?.invoicelinenumber,
invoicelineclassification: _entity?.invoicelineclassification,
productname: _entity?.productname,
quantity: _entity?.quantity,
unitprice: _entity?.unitprice,
measurement: _entity?.measurement,
subtotal: _entity?.subtotal,
countryoforigin: _entity?.countryoforigin,
totalexcludingtax: _entity?.totalexcludingtax,
taxtype: _entity?.taxtype,
taxrate: _entity?.taxrate,
taxamount: _entity?.taxamount,
taxexemptiondetails: _entity?.taxexemptiondetails,
taxexemptionamount: _entity?.taxexemptionamount,
discountrate: _entity?.discountrate,
discountamount: _entity?.discountamount,
discountdescription: _entity?.discountdescription,
feeorchargerate: _entity?.feeorchargerate,
feeorchargeamount: _entity?.feeorchargeamount,
totaltaxableamountpertaxtype: _entity?.totaltaxableamountpertaxtype,
totaltaxamountpertaxtype: _entity?.totaltaxamountpertaxtype,
detailsoftaxexemption: _entity?.detailsoftaxexemption,
amountexemptedfromtax: _entity?.amountexemptedfromtax,
additionaldiscountamount: _entity?.additionaldiscountamount,
additionaldiscountdescription: _entity?.additionaldiscountdescription,
additionalfeeamount: _entity?.additionalfeeamount,
additionalfeedescription: _entity?.additionalfeedescription,
totaldiscountvalue: _entity?.totaldiscountvalue,
totalfeeorchargeamount: _entity?.totalfeeorchargeamount,
totaltaxamount: _entity?.totaltaxamount,
totalnetamount: _entity?.totalnetamount,
totalincludingtax: _entity?.totalincludingtax,
roundingamount: _entity?.roundingamount,
totalpayableamount: _entity?.totalpayableamount,
invoicenumber: _entity?.invoicenumber,
        };

        setLoading(true);
        try {
            
        const result = await client.service("invoice").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info invoice updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
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
        <Dialog header="Edit Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="noff">Noff:</label>
            <InputText id="noff" className="w-full mb-3 p-inputtext-sm" value={_entity?.noff} onChange={(e) => setValByKey("noff", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicetype">Invoicetype:</label>
            <InputText id="invoicetype" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicetype} onChange={(e) => setValByKey("invoicetype", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicedateandtime">Invoicedateandtime:</label>
            <InputText id="invoicedateandtime" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicedateandtime} onChange={(e) => setValByKey("invoicedateandtime", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="originaleinvoicereferencenumber">Originaleinvoicereferencenumber:</label>
            <InputText id="originaleinvoicereferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originaleinvoicereferencenumber} onChange={(e) => setValByKey("originaleinvoicereferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliername">Suppliername:</label>
            <InputText id="suppliername" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliername} onChange={(e) => setValByKey("suppliername", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliertin">Suppliertin:</label>
            <InputText id="suppliertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertin} onChange={(e) => setValByKey("suppliertin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersstregistrationnumber">Suppliersstregistrationnumber:</label>
            <InputText id="suppliersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersstregistrationnumber} onChange={(e) => setValByKey("suppliersstregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="identifiertype">Identifiertype:</label>
            <InputText id="identifiertype" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiertype} onChange={(e) => setValByKey("identifiertype", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="identifiernumber">Identifiernumber:</label>
            <InputText id="identifiernumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.identifiernumber} onChange={(e) => setValByKey("identifiernumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliermsiccode">Suppliermsiccode:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliertourismtaxregistrationnumber">Suppliertourismtaxregistrationnumber:</label>
            <InputText id="suppliertourismtaxregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliertourismtaxregistrationnumber} onChange={(e) => setValByKey("suppliertourismtaxregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierbusinessactivitydescription">Supplierbusinessactivitydescription:</label>
            <InputText id="supplierbusinessactivitydescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbusinessactivitydescription} onChange={(e) => setValByKey("supplierbusinessactivitydescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplieremail">Supplieremail:</label>
            <InputText id="supplieremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplieremail} onChange={(e) => setValByKey("supplieremail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="thefirstsuppliercontactnumber">Thefirstsuppliercontactnumber:</label>
            <InputText id="thefirstsuppliercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstsuppliercontactnumber} onChange={(e) => setValByKey("thefirstsuppliercontactnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliercontactnumber">Suppliercontactnumber:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="countryname">Countryname:</label>
            <InputText id="countryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.countryname} onChange={(e) => setValByKey("countryname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="statename">Statename:</label>
            <InputText id="statename" className="w-full mb-3 p-inputtext-sm" value={_entity?.statename} onChange={(e) => setValByKey("statename", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="cityname">Cityname:</label>
            <InputText id="cityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.cityname} onChange={(e) => setValByKey("cityname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="postalzone">Postalzone:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyername">Buyername:</label>
            <InputText id="buyername" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyername} onChange={(e) => setValByKey("buyername", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyertin">Buyertin:</label>
            <InputText id="buyertin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyertin} onChange={(e) => setValByKey("buyertin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersstregistrationnumber">Buyersstregistrationnumber:</label>
            <InputText id="buyersstregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersstregistrationnumber} onChange={(e) => setValByKey("buyersstregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerbusinessregistrationnumber">Buyerbusinessregistrationnumber:</label>
            <InputText id="buyerbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerbusinessregistrationnumber} onChange={(e) => setValByKey("buyerbusinessregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyeremail">Buyeremail:</label>
            <InputText id="buyeremail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyeremail} onChange={(e) => setValByKey("buyeremail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercountryname">Buyercountryname:</label>
            <InputText id="buyercountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercountryname} onChange={(e) => setValByKey("buyercountryname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerstatename">Buyerstatename:</label>
            <InputText id="buyerstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerstatename} onChange={(e) => setValByKey("buyerstatename", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercityname">Buyercityname:</label>
            <InputText id="buyercityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercityname} onChange={(e) => setValByKey("buyercityname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerpostalzone">Buyerpostalzone:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="thefirstbuyercontactnumber">Thefirstbuyercontactnumber:</label>
            <InputText id="thefirstbuyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.thefirstbuyercontactnumber} onChange={(e) => setValByKey("thefirstbuyercontactnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyercontactnumber">Buyercontactnumber:</label>
            <InputNumber id="buyercontactnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyercontactnumber} onChange={(e) => setValByKey("buyercontactnumber", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicecurrency">Invoicecurrency:</label>
            <InputText id="invoicecurrency" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicecurrency} onChange={(e) => setValByKey("invoicecurrency", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="currencyexchangerate">Currencyexchangerate:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="frequencyofbilling">Frequencyofbilling:</label>
            <InputText id="frequencyofbilling" className="w-full mb-3 p-inputtext-sm" value={_entity?.frequencyofbilling} onChange={(e) => setValByKey("frequencyofbilling", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingperiodstartdate">Billingperiodstartdate:</label>
            <InputText id="billingperiodstartdate" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingperiodstartdate} onChange={(e) => setValByKey("billingperiodstartdate", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingperiodenddate">Billingperiodenddate:</label>
            <InputText id="billingperiodenddate" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingperiodenddate} onChange={(e) => setValByKey("billingperiodenddate", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentmode">Paymentmode:</label>
            <InputText id="paymentmode" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentmode} onChange={(e) => setValByKey("paymentmode", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierbankaccountnumber">Supplierbankaccountnumber:</label>
            <InputNumber id="supplierbankaccountnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierbankaccountnumber} onChange={(e) => setValByKey("supplierbankaccountnumber", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentterms">Paymentterms:</label>
            <InputText id="paymentterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentterms} onChange={(e) => setValByKey("paymentterms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentamount">Prepaymentamount:</label>
            <InputNumber id="prepaymentamount" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentamount} onChange={(e) => setValByKey("prepaymentamount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentdate">Prepaymentdate:</label>
            <InputText id="prepaymentdate" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentdate} onChange={(e) => setValByKey("prepaymentdate", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="prepaymentreferencenumber">Prepaymentreferencenumber:</label>
            <InputText id="prepaymentreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.prepaymentreferencenumber} onChange={(e) => setValByKey("prepaymentreferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientname">Shippingrecipientname:</label>
            <InputText id="shippingrecipientname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientname} onChange={(e) => setValByKey("shippingrecipientname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientcountryname">Shippingrecipientcountryname:</label>
            <InputText id="shippingrecipientcountryname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcountryname} onChange={(e) => setValByKey("shippingrecipientcountryname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientstatename">Shippingrecipientstatename:</label>
            <InputText id="shippingrecipientstatename" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientstatename} onChange={(e) => setValByKey("shippingrecipientstatename", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientcityname">Shippingrecipientcityname:</label>
            <InputText id="shippingrecipientcityname" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientcityname} onChange={(e) => setValByKey("shippingrecipientcityname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientpostalzone">Shippingrecipientpostalzone:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipienttin">Shippingrecipienttin:</label>
            <InputText id="shippingrecipienttin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipienttin} onChange={(e) => setValByKey("shippingrecipienttin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientidentifiertype">Shippingrecipientidentifiertype:</label>
            <InputText id="shippingrecipientidentifiertype" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientidentifiertype} onChange={(e) => setValByKey("shippingrecipientidentifiertype", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingrecipientbusinessregistrationnumber">Shippingrecipientbusinessregistrationnumber:</label>
            <InputText id="shippingrecipientbusinessregistrationnumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingrecipientbusinessregistrationnumber} onChange={(e) => setValByKey("shippingrecipientbusinessregistrationnumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billreferencenumber">Billreferencenumber:</label>
            <InputText id="billreferencenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.billreferencenumber} onChange={(e) => setValByKey("billreferencenumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="referencenumberofcustomsformno1">Referencenumberofcustomsformno1:</label>
            <InputText id="referencenumberofcustomsformno1" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno1} onChange={(e) => setValByKey("referencenumberofcustomsformno1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="incoterms">Incoterms:</label>
            <InputText id="incoterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.incoterms} onChange={(e) => setValByKey("incoterms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="freetradeagreementinformation">Freetradeagreementinformation:</label>
            <InputText id="freetradeagreementinformation" className="w-full mb-3 p-inputtext-sm" value={_entity?.freetradeagreementinformation} onChange={(e) => setValByKey("freetradeagreementinformation", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="authorisationnumberforcertifiedexporter">Authorisationnumberforcertifiedexporter:</label>
            <InputText id="authorisationnumberforcertifiedexporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.authorisationnumberforcertifiedexporter} onChange={(e) => setValByKey("authorisationnumberforcertifiedexporter", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="referencenumberofcustomsformno2">Referencenumberofcustomsformno2:</label>
            <InputText id="referencenumberofcustomsformno2" className="w-full mb-3 p-inputtext-sm" value={_entity?.referencenumberofcustomsformno2} onChange={(e) => setValByKey("referencenumberofcustomsformno2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicelinenumber">Invoicelinenumber:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicelineclassification">Invoicelineclassification:</label>
            <InputText id="invoicelineclassification" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicelineclassification} onChange={(e) => setValByKey("invoicelineclassification", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="productname">Productname:</label>
            <InputText id="productname" className="w-full mb-3 p-inputtext-sm" value={_entity?.productname} onChange={(e) => setValByKey("productname", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="quantity">Quantity:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="unitprice">Unitprice:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="measurement">Measurement:</label>
            <InputText id="measurement" className="w-full mb-3 p-inputtext-sm" value={_entity?.measurement} onChange={(e) => setValByKey("measurement", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="subtotal">Subtotal:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="countryoforigin">Countryoforigin:</label>
            <InputText id="countryoforigin" className="w-full mb-3 p-inputtext-sm" value={_entity?.countryoforigin} onChange={(e) => setValByKey("countryoforigin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalexcludingtax">Totalexcludingtax:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxtype">Taxtype:</label>
            <InputText id="taxtype" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxtype} onChange={(e) => setValByKey("taxtype", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxrate">Taxrate:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxamount">Taxamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxexemptiondetails">Taxexemptiondetails:</label>
            <InputText id="taxexemptiondetails" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxexemptiondetails} onChange={(e) => setValByKey("taxexemptiondetails", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxexemptionamount">Taxexemptionamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountrate">Discountrate:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountamount">Discountamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountdescription">Discountdescription:</label>
            <InputText id="discountdescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountdescription} onChange={(e) => setValByKey("discountdescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeorchargerate">Feeorchargerate:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeorchargeamount">Feeorchargeamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaltaxableamountpertaxtype">Totaltaxableamountpertaxtype:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaltaxamountpertaxtype">Totaltaxamountpertaxtype:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailsoftaxexemption">Detailsoftaxexemption:</label>
            <InputText id="detailsoftaxexemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsoftaxexemption} onChange={(e) => setValByKey("detailsoftaxexemption", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="amountexemptedfromtax">Amountexemptedfromtax:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionaldiscountamount">Additionaldiscountamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionaldiscountdescription">Additionaldiscountdescription:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionalfeeamount">Additionalfeeamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="additionalfeedescription">Additionalfeedescription:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaldiscountvalue">Totaldiscountvalue:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalfeeorchargeamount">Totalfeeorchargeamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totaltaxamount">Totaltaxamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalnetamount">Totalnetamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalincludingtax">Totalincludingtax:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="roundingamount">Roundingamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalpayableamount">Totalpayableamount:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoicenumber">Invoicenumber:</label>
            <InputText id="invoicenumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoicenumber} onChange={(e) => setValByKey("invoicenumber", e.target.value)}  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created At:"></Tag>{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created By:"></Tag>{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated At:"></Tag>{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated By:"></Tag>{" " +_entity?.updatedBy?.name}</p></div>
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
