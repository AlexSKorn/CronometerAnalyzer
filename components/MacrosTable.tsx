import { Table, Col, Row } from 'reactstrap'
import { MacroData, OtherHealthValues } from '../types/types'
import PieChart from './PieChart'
import styles from "../styles/MacrosTable.module.css";

export default function MacrosTable(title: string, data: MacroData) {
    return (
        <>
            <h1>{title}</h1>
            <Row>
                <Col>
                    <PieChart macroData={data} />
                </Col>
                <Col>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td className={styles.macrosTitle}>Calories</td>
                                <td>3000</td>
                            </tr>
                            <tr>
                                <td className={styles.macrosTitle}>Protein</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td className={styles.macrosTitle}>Carbohydrates</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td className={styles.macrosTitle}>Fats</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row >
        </>
    )
}
