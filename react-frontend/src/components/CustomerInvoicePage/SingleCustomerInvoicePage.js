import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleCustomerInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("customerInvoice")
            .get(urlParams.singleCustomerInvoiceId, { query: { $populate: [            {
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
                props.alert({ title: "CustomerInvoice", type: "error", message: error.message || "Failed get customerInvoice" });
            });
    }, [props,urlParams.singleCustomerInvoiceId]);


    const goBack = () => {
        navigate("/customerInvoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Customer Invoice</h3>
                </div>
                <p>customerInvoice/{urlParams.singleCustomerInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Noff</label><p className="m-0 ml-3" >{_entity?.noff}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicetype</label><p className="m-0 ml-3" >{_entity?.invoicetype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicedateandtime</label><p className="m-0 ml-3" >{_entity?.invoicedateandtime}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliername</label><p className="m-0 ml-3" >{_entity?.suppliername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Suppliertin</label><p className="m-0 ml-3" >{_entity?.suppliertin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Identifiertype</label><p className="m-0 ml-3" >{_entity?.identifiertype}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Identifiernumber</label><p className="m-0 ml-3" >{_entity?.identifiernumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplierbusinessactivitydescription</label><p className="m-0 ml-3" >{_entity?.supplierbusinessactivitydescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Thefirstsuppliercontactnumber</label><p className="m-0 ml-3" >{_entity?.thefirstsuppliercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Countryname</label><p className="m-0 ml-3" >{_entity?.countryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Statename</label><p className="m-0 ml-3" >{_entity?.statename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Cityname</label><p className="m-0 ml-3" >{_entity?.cityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplieradressline0</label><p className="m-0 ml-3" >{_entity?.supplieradressline0}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyername</label><p className="m-0 ml-3" >{_entity?.buyername}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercountryname</label><p className="m-0 ml-3" >{_entity?.buyercountryname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyerstatename</label><p className="m-0 ml-3" >{_entity?.buyerstatename}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercityname</label><p className="m-0 ml-3" >{_entity?.buyercityname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyeraddressline0</label><p className="m-0 ml-3" >{_entity?.buyeraddressline0}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Thefirstbuyercontactnumber</label><p className="m-0 ml-3" >{_entity?.thefirstbuyercontactnumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyercontactnumber</label><p className="m-0 ml-3" >{Number(_entity?.buyercontactnumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicecurrency</label><p className="m-0 ml-3" >{_entity?.invoicecurrency}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoicelineclassification</label><p className="m-0 ml-3" >{_entity?.invoicelineclassification}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Productname</label><p className="m-0 ml-3" >{_entity?.productname}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Taxtype</label><p className="m-0 ml-3" >{_entity?.taxtype}</p></div>
            

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

export default connect(mapState, mapDispatch)(SingleCustomerInvoicePage);
