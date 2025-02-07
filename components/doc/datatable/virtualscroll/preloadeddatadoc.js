import React from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { CarService } from '../../../../service/CarService';

export function PreloadedDataDoc(props) {
    const carService = new CarService();
    const cars = Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1));

    const code = {
        basic: `
<DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,
        javascript: `
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from '../service/CarService';

const PreloadedDataDoc = () => {
    const carService = new CarService();
    const cars = Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from '../service/CarService';

const PreloadedDataDoc = () => {
    const carService = new CarService();
    const cars = Array.from({ length: 100000 }).map((_, i) => carService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Preloaded Data Scroll demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                    <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                    <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                    <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                    <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
