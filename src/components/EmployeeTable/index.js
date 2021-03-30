import React, { useContext } from "react";
import EmployeeBody from "../EmployeeBody";
import "./EmployeeTable.css";
import EmployeeAreaInfo from "../../utils/EmployeeAreaInfo";

const EmployeeTable = () => {
    const context = useContext(EmployeeAreaInfo);

    return (

        <div className="employeetable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <EmployeeBody />
            </table>
        </div>
    );
}
//exports EmployeeTable
export default EmployeeTable;