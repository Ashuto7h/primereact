import { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { DocSectionCode } from '../common/docsectioncode';
import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionText } from '../common/docsectiontext';

export function SizeDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedOptionValue, setSelectedOptionValue] = useState('small');
    const productService = new ProductService();

    const onRadioButtonChange = (option) => {
        setSelectedOptionValue(option.value);
    };

    useEffect(() => {
        productService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const demoOptions = [
        {
            label: 'Small',
            value: 'small'
        },
        {
            label: 'Normal',
            value: 'normal'
        },
        {
            label: 'Large',
            value: 'large'
        }
    ];

    const code = {
        basic: `
<DataTable value={products} size="${selectedOptionValue}" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const SmallTableDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} size="${selectedOptionValue}" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const SmallTableDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} size="${selectedOptionValue}" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
            `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>In addition to a regular table, alternatives with alternative sizes are available.</p>
            </DocSectionText>
            <div className="card mt-3 flex flex-column justify-content-center">
                <div className="flex flex-row justify-content-center align-items-center flex-wrap">
                    <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
                        {demoOptions.map((option) => {
                            const { value, label } = option;

                            return (
                                <div className="mr-4" key={label}>
                                    <RadioButton value={label} onChange={() => onRadioButtonChange(option)} checked={selectedOptionValue === value} />
                                    <label htmlFor={label} className="ml-2">
                                        {label} Size
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <DataTable value={products} size={selectedOptionValue} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
