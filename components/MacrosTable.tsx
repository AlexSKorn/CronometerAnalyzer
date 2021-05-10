import { Table } from 'reactstrap'

export default function Macros() {
    return (
        <>
            <h1>Table Testing</h1>
            <div>
                <Table bordered dark>
                    <thead>
                        <tr>
                            <th>Calories</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                            <th>Fats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
