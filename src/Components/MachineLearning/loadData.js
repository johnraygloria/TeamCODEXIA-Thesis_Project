import * as tf from "@tensorflow/tfjs";

async function loadData() {
    const url = "C:\Users\John Neo Lopez\Documents\GitHub\TeamCODEXIA-Thesis_Project\src\Components\ML_Assets\FedCycleData071012 (2).csv"; // Replace with the path to your local CSV file
    const csvDataset = tf.data.csv(url);
    // Process the dataset as needed
}
