function generateTemplate({ name, question, remarks, score }) {
  return `
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"> 
    <body style="font-family: 'Open Sans', sans-serif; font-weight: 300">
    <div style="width: 550px; font-size: 18px; padding: 30px; color: white; background-color: #264653">
      Dear ${name}, <br>
      The results for your online test for <strong style='color: #e76f51'>${question}</strong> has come out. Here is the result, <br>
      
      <br>
      Score: <strong style='color: #e76f51'>${score}</strong> <br>
      Remarks: <strong style='color: #e76f51'>${remarks}</strong> <br>
      
      <p>
        Thanks and Regards, <br>
        Sonam Sherpa, <br>
        Faculty, <br>
        Sagarmatha College of Science and Technology.
      </p>
    </div>
    </body>
  `;
}

module.exports = generateTemplate;
