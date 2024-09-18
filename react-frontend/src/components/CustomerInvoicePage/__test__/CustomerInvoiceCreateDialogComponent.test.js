import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerInvoiceCreateDialogComponent from "../CustomerInvoiceCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customerInvoice create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerInvoiceCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customerInvoice-create-dialog-component")).toBeInTheDocument();
});
