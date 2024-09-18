import React, { useState } from "react";
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import Plus from "../../../assets/media/Edit.png"; // Importing the Plus image
import { InputSwitch } from "primereact/inputswitch";
import DownSmall from "../../../assets/media/Down Small.png"; // Importing Down Small image

const MultipleChart = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [switchValue, setSwitchValue] = useState({}); // Store state for InputSwitch

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleSwitchChange = (e, index) => {
    setSwitchValue({ ...switchValue, [index]: e.value }); // Update state for each row
  };

  return (
    <div className="surface-card shadow-2 border-round p-4" style={{ width: "151%", height: "auto", boxSizing: "border-box" }}>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Departments</th>
              <th className="p-2">Templates</th>
              <th className="p-2">Reports</th>
              <th className="p-2">Last Commit</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { department: "Staff Info", code: 25, workspaces: 5, lastCommit: "2 days ago" },
              { department: "DynaLoader", code: 30, workspaces: 6, lastCommit: "1 day ago" },
              { department: "JobQues", code: 20, workspaces: 3, lastCommit: "3 days ago" }
            ].map((item, index) => (
              <React.Fragment key={index}>
                <tr className="border-b hover:bg-gray-100">
                  <td className="p-2 flex items-center">
                    {/* Replace Plus icon with InputSwitch */}
                    <InputSwitch
                      checked={switchValue[index] || false}
                      onChange={(e) => handleSwitchChange(e, index)}
                      className="mr-2"
                    />
                    {item.department}
                  </td>
                  <td className="p-2">{item.code}</td>
                  <td className="p-2">{item.workspaces}</td>
                  <td className="p-2">{item.lastCommit}</td>
                  <td className="p-2">
                    {/* Replace button with Down Small image */}
                    <img
                      src={DownSmall}
                      alt="Expand"
                      onClick={() => toggleRow(index)}
                      style={{
                        cursor: "pointer",
                        width: "20px", // Adjust the size as needed
                        height: "20px",
                        transform: expandedRow === index ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                  </td>
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan="6" className="p-4 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <div style={{ width: "48%" }}>
                          <LineChart name={`${item.department} Over Time`} isEdit={false} />
                        </div>
                        <div style={{ width: "48%" }}>
                          <BarChart total="Total Users" isEdit={false} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MultipleChart;
