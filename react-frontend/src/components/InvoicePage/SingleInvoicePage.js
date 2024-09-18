import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("invoice")
            .get(urlParams.singleInvoiceId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Invoice", type: "error", message: error.message || "Failed get invoice" });
            });
    }, [props,urlParams.singleInvoiceId]);


    const goBack = () => {
        navigate("/invoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice</h3>
                </div>
                <p>invoice/{urlParams.singleInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Noff</label><p className="m-0 ml-3" >{_entity?.noff}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicetype</label><p className="m-0 ml-3" >{_entity?.invoicetype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicedateandtime</label><p className="m-0 ml-3" >{_entity?.invoicedateandtime}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Originaleinvoicereferencenumber</label><p className="m-0 ml-3" >{_entity?.originaleinvoicereferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliername</label><p className="m-0 ml-3" >{_entity?.suppliername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliertin</label><p className="m-0 ml-3" >{_entity?.suppliertin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliersstregistrationnumber</label><p className="m-0 ml-3" >{_entity?.suppliersstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Identifiertype</label><p className="m-0 ml-3" >{_entity?.identifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Identifiernumber</label><p className="m-0 ml-3" >{_entity?.identifiernumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliertourismtaxregistrationnumber</label><p className="m-0 ml-3" >{_entity?.suppliertourismtaxregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplierbusinessactivitydescription</label><p className="m-0 ml-3" >{_entity?.supplierbusinessactivitydescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplieremail</label><p className="m-0 ml-3" >{_entity?.supplieremail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Thefirstsuppliercontactnumber</label><p className="m-0 ml-3" >{_entity?.thefirstsuppliercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Countryname</label><p className="m-0 ml-3" >{_entity?.countryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Statename</label><p className="m-0 ml-3" >{_entity?.statename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Cityname</label><p className="m-0 ml-3" >{_entity?.cityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyername</label><p className="m-0 ml-3" >{_entity?.buyername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyertin</label><p className="m-0 ml-3" >{_entity?.buyertin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyersstregistrationnumber</label><p className="m-0 ml-3" >{_entity?.buyersstregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyerbusinessregistrationnumber</label><p className="m-0 ml-3" >{_entity?.buyerbusinessregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyeremail</label><p className="m-0 ml-3" >{_entity?.buyeremail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercountryname</label><p className="m-0 ml-3" >{_entity?.buyercountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyerstatename</label><p className="m-0 ml-3" >{_entity?.buyerstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercityname</label><p className="m-0 ml-3" >{_entity?.buyercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Thefirstbuyercontactnumber</label><p className="m-0 ml-3" >{_entity?.thefirstbuyercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercontactnumber</label><p className="m-0 ml-3" >{Number(_entity?.buyercontactnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicecurrency</label><p className="m-0 ml-3" >{_entity?.invoicecurrency}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Frequencyofbilling</label><p className="m-0 ml-3" >{_entity?.frequencyofbilling}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Billingperiodstartdate</label><p className="m-0 ml-3" >{_entity?.billingperiodstartdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Billingperiodenddate</label><p className="m-0 ml-3" >{_entity?.billingperiodenddate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Paymentmode</label><p className="m-0 ml-3" >{_entity?.paymentmode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplierbankaccountnumber</label><p className="m-0 ml-3" >{Number(_entity?.supplierbankaccountnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Paymentterms</label><p className="m-0 ml-3" >{_entity?.paymentterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Prepaymentamount</label><p className="m-0 ml-3" >{Number(_entity?.prepaymentamount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Prepaymentdate</label><p className="m-0 ml-3" >{_entity?.prepaymentdate}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Prepaymentreferencenumber</label><p className="m-0 ml-3" >{_entity?.prepaymentreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientname</label><p className="m-0 ml-3" >{_entity?.shippingrecipientname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientcountryname</label><p className="m-0 ml-3" >{_entity?.shippingrecipientcountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientstatename</label><p className="m-0 ml-3" >{_entity?.shippingrecipientstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientcityname</label><p className="m-0 ml-3" >{_entity?.shippingrecipientcityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipienttin</label><p className="m-0 ml-3" >{_entity?.shippingrecipienttin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientidentifiertype</label><p className="m-0 ml-3" >{_entity?.shippingrecipientidentifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shippingrecipientbusinessregistrationnumber</label><p className="m-0 ml-3" >{_entity?.shippingrecipientbusinessregistrationnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Billreferencenumber</label><p className="m-0 ml-3" >{_entity?.billreferencenumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Referencenumberofcustomsformno1</label><p className="m-0 ml-3" >{_entity?.referencenumberofcustomsformno1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Incoterms</label><p className="m-0 ml-3" >{_entity?.incoterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Freetradeagreementinformation</label><p className="m-0 ml-3" >{_entity?.freetradeagreementinformation}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Authorisationnumberforcertifiedexporter</label><p className="m-0 ml-3" >{_entity?.authorisationnumberforcertifiedexporter}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Referencenumberofcustomsformno2</label><p className="m-0 ml-3" >{_entity?.referencenumberofcustomsformno2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicelineclassification</label><p className="m-0 ml-3" >{_entity?.invoicelineclassification}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Productname</label><p className="m-0 ml-3" >{_entity?.productname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Measurement</label><p className="m-0 ml-3" >{_entity?.measurement}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Countryoforigin</label><p className="m-0 ml-3" >{_entity?.countryoforigin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Taxtype</label><p className="m-0 ml-3" >{_entity?.taxtype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Taxexemptiondetails</label><p className="m-0 ml-3" >{_entity?.taxexemptiondetails}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discountdescription</label><p className="m-0 ml-3" >{_entity?.discountdescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Detailsoftaxexemption</label><p className="m-0 ml-3" >{_entity?.detailsoftaxexemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicenumber</label><p className="m-0 ml-3" >{_entity?.invoicenumber}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleInvoicePage);
