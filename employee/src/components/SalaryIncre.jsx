import React from 'react'

const SalaryIncre = () => {
  return (
    <div className='p-5 bg3'>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Increment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Software Developer</td>
                    <td>$60,000 - $85,000 per year</td>
                    <td> 5% - 10%, based on performance</td>
                </tr>
                <tr>
                    <td>
                    Quality Assurance (QA) 
                    </td>
                    <td>
                    $50,000 - $70,000 per year
                    </td>
                    <td>
                    3% - 8%, depending on how well the role contributes to product quality and release cycles.
                    </td>
                </tr>
                <tr>
                    <td>Product Manager</td>
                    <td> $80,000 - $110,000 per year</td>
                    <td>5% - 12%, often tied to product success and business performance.</td>
                </tr>
                <tr>
                    <td> UI/UX Designer</td>
                    <td> $60,000 - $80,000 per year</td>
                    <td>
                    4% - 10%, depending on the impact of the design on product usability and customer feedback.
                    </td>
                </tr>
                <tr>
                    <td> DevOps Engineer</td>
                    <td> $80,000 - $100,000 per year</td>
                    <td>5% - 12%, with potential bonuses tied to improving system performance and automation.</td>
                </tr>
                <tr>
                    <td> Data Scientist </td>
                    <td> $85,000 - $110,000 per year</td>
                    <td>6% - 15%, due to the high demand for data experts and their contribution to business intelligence.</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SalaryIncre