import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function MenstrualTracker () {
  const [csvData, setCsvData] = useState(null);

  const handleFiles = async (files) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      setCsvData(content);
      await processCsvData(content);
    };
    reader.readAsText(files[0]);
  };

  const processCsvData = async (csvContent) => {
    // Parse the CSV data (you can customize this based on your CSV structure)
    const rows = csvContent.split('\n');
    const data = rows.map((row) => row.split(','));

    // Convert data to tensors (example: assuming numeric features and labels)
    const features = data.map((row) => row.slice(0, -1).map(parseFloat));
    const labels = data.map((row) => parseFloat(row.slice(-1)[0]));

    // Create a simple model (you can customize this)
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [features[0].length] }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Train the model
    await model.fit(tf.tensor2d(features), tf.tensor1d(labels), { epochs: 10 });

    // Make predictions (example: predict the first feature row)
    const prediction = model.predict(tf.tensor2d([features[0]]));
    console.log('Prediction:', prediction.dataSync());
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFiles(e.target.files)} />
      {/* Display or process csvData as needed */}
    </div>
  );
}

export default MenstrualTracker;
