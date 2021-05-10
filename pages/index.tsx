import { useState } from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import UploadZone from '../components/UploadZone'
import MacrosTable from '../components/MacrosTable'
import { parse } from 'papaparse';
import { filterCurrentYear } from '../calculationUtils/filterDataUtil';

export default function Home() {
	const [healthData, setHealthData] = useState([]);

	const handleFile = async file => {
		// console.log(typeof file);
		const fileText = await file.target.files[0].text()
		// console.log(typeof fileText)
		const parsedData = parse(fileText, { header: true });
		// console.log(typeof parsedData);
		// console.log(parsedData);
		// console.log(parsedData.data[0]["Energy (kcal)"])
		setHealthData(parsedData.data);
		console.log(filterCurrentYear(parsedData.data))
		//console.log(filterCurrentYear(parsedData.data))
		// console.log(healthData);
		// console.log(parsedData.data)
		// setHealthData(parsedData.data.filter(dataPoint => dataPoint["Energy (kcal)"] !== ""));
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Cronometer Analyzer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to Cronometer Analyzer!</h1>
				<div className={styles.grid}>
					<Link href="https://nextjs.org/docs">
						<a href="https://nextjs.org/docs" className={styles.card}>
							<h3>Standard Diet</h3>
							<p>Go here if you have no specific dietary restrictions.</p>
						</a>
					</Link>
					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Low Carb/Keto</h3>
						<p>Go here if you are on a low carb, or keto diet</p>
					</a>
					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h3>Vegan</h3>
						<p>Go Here if you are on a vegan diet.</p>
					</a>
				</div>
				<UploadZone handleFile={handleFile} />
				<MacrosTable />
			</main>
		</div>
	);
}
