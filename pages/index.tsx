import { useState } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import UploadZone from '../components/UploadZone'
import MacrosTable from '../components/MacrosTable'
import { parse } from 'papaparse';
import { filterYearDays, filterThirtyDays, filterSevenDays } from '../calculationUtils/filterDataUtil'
import { Row, Col } from 'reactstrap'

export default function Home() {
	const [healthData, setHealthData] = useState([]);

	const handleFile = async file => {
		const fileText = await file.target.files[0].text()
		const parsedData = parse(fileText, { header: true });
		// console.log(typeof parsedData);
		// console.log(parsedData);
		// console.log(parsedData.data[0]["Energy (kcal)"])
		setHealthData(parsedData.data);
		// console.log(filterCurrentYear(parsedData.data))
		console.log(filterSevenDays(parsedData.data))
		//console.log(filterCurrentYear(parsedData.data))
		// console.log(healthData);
		// console.log(parsedData.data)
		// setHealthData(parsedData.data.filter(dataPoint => dataPoint["Energy (kcal)"] !== ""));
	}



	return (
		<div className={styles.container}>
			<Head>
				<title>Cronometer Analyzer</title>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to Cronometer Analyzer!</h1>
				<UploadZone handleFile={handleFile} />
				<Row>
					<Row>
						<Col className={styles.graphCol}><MacrosTable title="Past 7 Days" data={filterSevenDays(healthData)} /></Col>
						<Col className={styles.graphCol}><MacrosTable title="Past 30 Days" data={filterThirtyDays(healthData)} /></Col>
						<Col className={styles.graphCol}><MacrosTable title="Past 365 Days" data={filterYearDays(healthData)} /></Col>
					</Row>
				</Row>
			</main>
		</div>
	);
}
