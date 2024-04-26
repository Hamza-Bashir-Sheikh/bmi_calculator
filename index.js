import inquirer from 'inquirer';

const main = async () => {
    const answer = await inquirer.prompt([
        {
            message: 'Enter your valide Name!',
            type: 'input_type',
            name: 'UserName'
        },
        {
            message: 'Enter your weight in kg:',
            type: 'number',
            name: 'weightInKg'
        },
        {
            message: 'Enter your height in meters:',
            type: 'number',
            name: 'heightInMeter'
        }
    ]);

const calculateBMI = (weightInKg, heightInMeter) => {
    return weightInKg/(heightInMeter*heightInMeter)*703;
};

const classifyBMI = (bmi) => {
    if (bmi < 18.5) {
        return "Very underweight and possibly malnourished.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Healthy weight range for young and middle-aged adults.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight.";
    } else {
        return "Obese.";
    }
};


    const bmi = calculateBMI(answer.weightInKg, answer.heightInMeter);
    const bmiCategory = classifyBMI(bmi);

    console.log(`Your bmi is ${bmi.toFixed(2)}.`);
    console.log(`You are ${bmiCategory}`);
};

main();