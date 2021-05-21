import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'reactstrap'
import UploadZone from './UploadZone';

export default function Goals() {
    const [weight, setCalories] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fats, setFats] = useState("");

    return (
        <Form>
            <h1>Nutrient Goals</h1>
            <Label for="calories">Email</Label>
            <Input type="email" name="email" id="calories" placeholder="with a placeholder" />
            <Label for="protein">Email</Label>
            <Input type="email" name="email" id="protein" placeholder="with a placeholder" />
            <Label for="carbs">Email</Label>
            <Input type="email" name="email" id="carbs" placeholder="with a placeholder" />
            <Label for="fats">Email</Label>
            <Input type="email" name="email" id="fats" placeholder="with a placeholder" />
            <UploadZone />
        </Form>
    )
}
