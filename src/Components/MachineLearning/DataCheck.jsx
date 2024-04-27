import React from 'react';
import { readString } from 'react-papaparse';

const csvFile = "C:\Users\John Neo Lopez\Documents\GitHub\TeamCODEXIA-Thesis_Project\src\Components\ML_Assets\FedCycleData071012 (2).csv"; // Replace with the path to your local CSV file

const papaConfig = {
    complete: (results, file) => {
        console.log('Parsing complete:', results, file);
        // Process the parsed data as needed
    },
    download: true,
    error: (error, file) => {
        console.log('Error while parsing:', error, file);
    },
};

readString(csvFile, papaConfig);

function DataCheck() {
    return (
        <div>
            <h1>Check the console for parsed data</h1>
        </div>
    );
}

export default DataCheck;
