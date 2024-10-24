import React from 'react'

function TypesEmp() {
  return (
    <div className='types bg3'>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Full-time Employees</td>
                    <td> Employees who work the standard number of hours per week as defined by the company, usually 35-40 hours. They often receive full benefits such as health insurance, retirement plans, and paid time off</td>
                </tr>
                <tr>
                    <td>Part-time Employees</td>
                    <td>Employees who work fewer hours than full-time employees, often less than 30 hours per week. They may or may not receive the same benefits as full-time workers depending on the organization.</td>
                </tr>
                <tr>
                    <td> Contractors / Freelancers</td>
                    <td> Independent workers hired for specific projects or short-term engagements. They are not on the company’s payroll and typically manage their own taxes and benefits.</td>
                </tr>
                <tr>
                    <td>Temporary Employees</td>
                    <td> Hired for a short-term period, often through staffing agencies, to fill in for permanent employees or to help during busy periods. They are typically paid hourly</td>
                </tr>
                <tr>
                    <td>Interns</td>
                    <td>Typically students or recent graduates who work for a company, often for a short duration, to gain practical experience. Internships can be paid or unpaid, depending on the arrangement.</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default TypesEmp