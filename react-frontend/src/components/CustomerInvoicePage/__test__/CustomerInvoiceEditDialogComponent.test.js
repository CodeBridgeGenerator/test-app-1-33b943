import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerInvoiceEditDialogComponent from "../CustomerInvoiceEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customerInvoice edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerInvoiceEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customerInvoice-edit-dialog-component")).toBeInTheDocument();
});
