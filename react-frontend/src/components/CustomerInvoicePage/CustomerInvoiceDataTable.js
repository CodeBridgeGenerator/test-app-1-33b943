import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const CustomerInvoiceDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.noff}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.invoicetype}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.invoicedateandtime}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.suppliername}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.suppliertin}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.identifiertype}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.identifiernumber}</p>
const p_dateTemplate7 = (rowData, { rowIndex }) => <p >{(new Date(rowData.suppliermsiccode)).toLocaleDateString()}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.supplierbusinessactivitydescription}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.thefirstsuppliercontactnumber}</p>
const p_dateTemplate10 = (rowData, { rowIndex }) => <p >{(new Date(rowData.suppliercontactnumber)).toLocaleDateString()}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.countryname}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.statename}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.cityname}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.supplieradressline0}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.buyername}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.buyercountryname}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.buyerstatename}</p>
const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.buyercityname}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.buyeraddressline0}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.thefirstbuyercontactnumber}</p>
const p_numberTemplate21 = (rowData, { rowIndex }) => <p >{rowData.buyercontactnumber}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.invoicecurrency}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.invoicelineclassification}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.productname}</p>
const p_dateTemplate25 = (rowData, { rowIndex }) => <p >{(new Date(rowData.unitprice)).toLocaleDateString()}</p>
const p_dateTemplate26 = (rowData, { rowIndex }) => <p >{(new Date(rowData.subtotal)).toLocaleDateString()}</p>
const p_dateTemplate27 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalexcludingtax)).toLocaleDateString()}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.taxtype}</p>
const p_dateTemplate29 = (rowData, { rowIndex }) => <p >{(new Date(rowData.taxamount)).toLocaleDateString()}</p>
const p_dateTemplate30 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaltaxamountpertaxtype)).toLocaleDateString()}</p>
const p_dateTemplate31 = (rowData, { rowIndex }) => <p >{(new Date(rowData.additionalfeedescription)).toLocaleDateString()}</p>
const p_dateTemplate32 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totaltaxamount)).toLocaleDateString()}</p>
const p_dateTemplate33 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalincludingtax)).toLocaleDateString()}</p>
const p_dateTemplate34 = (rowData, { rowIndex }) => <p >{(new Date(rowData.totalpayableamount)).toLocaleDateString()}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "customerInvoice"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="noff" header="Noff" body={pTemplate0} filter={selectedFilterFields.includes("noff")} hidden={selectedHideFields?.includes("noff")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicetype" header="Invoicetype" body={pTemplate1} filter={selectedFilterFields.includes("invoicetype")} hidden={selectedHideFields?.includes("invoicetype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicedateandtime" header="Invoicedateandtime" body={pTemplate2} filter={selectedFilterFields.includes("invoicedateandtime")} hidden={selectedHideFields?.includes("invoicedateandtime")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliername" header="Suppliername" body={pTemplate3} filter={selectedFilterFields.includes("suppliername")} hidden={selectedHideFields?.includes("suppliername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliertin" header="Suppliertin" body={pTemplate4} filter={selectedFilterFields.includes("suppliertin")} hidden={selectedHideFields?.includes("suppliertin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="identifiertype" header="Identifiertype" body={pTemplate5} filter={selectedFilterFields.includes("identifiertype")} hidden={selectedHideFields?.includes("identifiertype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="identifiernumber" header="Identifiernumber" body={pTemplate6} filter={selectedFilterFields.includes("identifiernumber")} hidden={selectedHideFields?.includes("identifiernumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliermsiccode" header="Suppliermsiccode" body={p_dateTemplate7} filter={selectedFilterFields.includes("suppliermsiccode")} hidden={selectedHideFields?.includes("suppliermsiccode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierbusinessactivitydescription" header="Supplierbusinessactivitydescription" body={pTemplate8} filter={selectedFilterFields.includes("supplierbusinessactivitydescription")} hidden={selectedHideFields?.includes("supplierbusinessactivitydescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstsuppliercontactnumber" header="Thefirstsuppliercontactnumber" body={pTemplate9} filter={selectedFilterFields.includes("thefirstsuppliercontactnumber")} hidden={selectedHideFields?.includes("thefirstsuppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliercontactnumber" header="Suppliercontactnumber" body={p_dateTemplate10} filter={selectedFilterFields.includes("suppliercontactnumber")} hidden={selectedHideFields?.includes("suppliercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="countryname" header="Countryname" body={pTemplate11} filter={selectedFilterFields.includes("countryname")} hidden={selectedHideFields?.includes("countryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="statename" header="Statename" body={pTemplate12} filter={selectedFilterFields.includes("statename")} hidden={selectedHideFields?.includes("statename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="cityname" header="Cityname" body={pTemplate13} filter={selectedFilterFields.includes("cityname")} hidden={selectedHideFields?.includes("cityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplieradressline0" header="Supplieradressline0" body={pTemplate14} filter={selectedFilterFields.includes("supplieradressline0")} hidden={selectedHideFields?.includes("supplieradressline0")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyername" header="Buyername" body={pTemplate15} filter={selectedFilterFields.includes("buyername")} hidden={selectedHideFields?.includes("buyername")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercountryname" header="Buyercountryname" body={pTemplate16} filter={selectedFilterFields.includes("buyercountryname")} hidden={selectedHideFields?.includes("buyercountryname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerstatename" header="Buyerstatename" body={pTemplate17} filter={selectedFilterFields.includes("buyerstatename")} hidden={selectedHideFields?.includes("buyerstatename")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercityname" header="Buyercityname" body={pTemplate18} filter={selectedFilterFields.includes("buyercityname")} hidden={selectedHideFields?.includes("buyercityname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyeraddressline0" header="Buyeraddressline0" body={pTemplate19} filter={selectedFilterFields.includes("buyeraddressline0")} hidden={selectedHideFields?.includes("buyeraddressline0")}  sortable style={{ minWidth: "8rem" }} />
<Column field="thefirstbuyercontactnumber" header="Thefirstbuyercontactnumber" body={pTemplate20} filter={selectedFilterFields.includes("thefirstbuyercontactnumber")} hidden={selectedHideFields?.includes("thefirstbuyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyercontactnumber" header="Buyercontactnumber" body={p_numberTemplate21} filter={selectedFilterFields.includes("buyercontactnumber")} hidden={selectedHideFields?.includes("buyercontactnumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicecurrency" header="Invoicecurrency" body={pTemplate22} filter={selectedFilterFields.includes("invoicecurrency")} hidden={selectedHideFields?.includes("invoicecurrency")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoicelineclassification" header="Invoicelineclassification" body={pTemplate23} filter={selectedFilterFields.includes("invoicelineclassification")} hidden={selectedHideFields?.includes("invoicelineclassification")}  sortable style={{ minWidth: "8rem" }} />
<Column field="productname" header="Productname" body={pTemplate24} filter={selectedFilterFields.includes("productname")} hidden={selectedHideFields?.includes("productname")}  sortable style={{ minWidth: "8rem" }} />
<Column field="unitprice" header="Unitprice" body={p_dateTemplate25} filter={selectedFilterFields.includes("unitprice")} hidden={selectedHideFields?.includes("unitprice")}  sortable style={{ minWidth: "8rem" }} />
<Column field="subtotal" header="Subtotal" body={p_dateTemplate26} filter={selectedFilterFields.includes("subtotal")} hidden={selectedHideFields?.includes("subtotal")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalexcludingtax" header="Totalexcludingtax" body={p_dateTemplate27} filter={selectedFilterFields.includes("totalexcludingtax")} hidden={selectedHideFields?.includes("totalexcludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxtype" header="Taxtype" body={pTemplate28} filter={selectedFilterFields.includes("taxtype")} hidden={selectedHideFields?.includes("taxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxamount" header="Taxamount" body={p_dateTemplate29} filter={selectedFilterFields.includes("taxamount")} hidden={selectedHideFields?.includes("taxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxamountpertaxtype" header="Totaltaxamountpertaxtype" body={p_dateTemplate30} filter={selectedFilterFields.includes("totaltaxamountpertaxtype")} hidden={selectedHideFields?.includes("totaltaxamountpertaxtype")}  sortable style={{ minWidth: "8rem" }} />
<Column field="additionalfeedescription" header="Additionalfeedescription" body={p_dateTemplate31} filter={selectedFilterFields.includes("additionalfeedescription")} hidden={selectedHideFields?.includes("additionalfeedescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totaltaxamount" header="Totaltaxamount" body={p_dateTemplate32} filter={selectedFilterFields.includes("totaltaxamount")} hidden={selectedHideFields?.includes("totaltaxamount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalincludingtax" header="Totalincludingtax" body={p_dateTemplate33} filter={selectedFilterFields.includes("totalincludingtax")} hidden={selectedHideFields?.includes("totalincludingtax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalpayableamount" header="Totalpayableamount" body={p_dateTemplate34} filter={selectedFilterFields.includes("totalpayableamount")} hidden={selectedHideFields?.includes("totalpayableamount")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload CustomerInvoice Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService user={user} serviceName="~cb-service-name~"/>
      </Dialog>

      <Dialog header="Search CustomerInvoice" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default CustomerInvoiceDataTable;